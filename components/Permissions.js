import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ALL_USERS_QUERY } from './graphql/queries'
import { UPDATE_PERMISSIONS_MUTATION } from './graphql/mutations'
import Error from './ErrorMessage'
import Loading from './styles/Loading'
import Table from './styles/Table'
import SickButton from './styles/SickButton'

const permissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE',
]

const Permissions = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY)

  if (loading) return <Loading />

  return (
    <div>
      <Error error={error} />
      <h2>Manage Permissions</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {
              permissions.map((permission) => (
                <th key={permission}>{permission}</th>
              ))
            }
            <th><span role="img" aria-label="emoji">👇🏻</span></th>
          </tr>
        </thead>
        <tbody>
          {
            data.users.map((user) => (
              <UserPermissions key={user.id} user={user} />
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

const UserPermissions = (props) => {
  const { user } = props

  const [state, setState] = useState({
    permissions: user.permissions,
  })

  const [
    updatePermissions,
    { loading, error },
  ] = useMutation(UPDATE_PERMISSIONS_MUTATION)

  const handlePermissionChange = (e) => {
    const checkbox = e.target

    // take a copy of current permissions
    let updatedPermissions = [...state.permissions]

    // figure out if we need to remove or add this permission
    if (checkbox.checked) {
      updatedPermissions.push(checkbox.value)
    } else {
      updatedPermissions = updatedPermissions.filter(
        (permission) => permission !== checkbox.value,
      )
    }

    setState({
      permissions: updatedPermissions,
    })

    updatePermissions({
      variables: {
        permissions: state.permissions,
        userId: user.id,
      },
    })
  }

  return (
    <>
      {
        error
        && (
          <tr>
            <td colSpan="8">
              <Error error={error} />
            </td>
          </tr>
        )
      }
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {
          permissions.map((permission) => (
            <td key={permission}>
              <label htmlFor={`${user.id}-permission-${permission}`}>
                <input
                  type="checkbox"
                  id={`${user.id}-permission-${permission}`}
                  checked={state.permissions.includes(permission)}
                  value={permission}
                  onChange={handlePermissionChange}
                />
              </label>
            </td>
          ))
        }
        <td>
          <SickButton
            type="submit"
            disabled={loading}
            onClick={() => {
              updatePermissions({
                variables: {
                  permissions: state.permissions,
                  userId: user.id,
                },
              })
            }}
          >
            {`UPDAT${loading ? 'ING' : 'E'}`}
          </SickButton>
        </td>
      </tr>
    </>
  )
}

export default Permissions
