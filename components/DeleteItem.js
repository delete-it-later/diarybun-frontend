import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { ALL_ITEMS_QUERY, ALL_USERS_QUERY } from './graphql/queries'
import { DELETE_ITEM_MUTATION } from './graphql/mutations'

const DeleteItem = (props) => {
  const { id } = props

  // const updateCache = (cache, payload) => {
  //   // manually update the cache on the client, so it matches the server

  //   // 1. read the cache for the items we want
  //   const data = cache.readQuery({ query: ALL_ITEMS_QUERY })

  //   // 2. filter the deleted item out of the page
  //   data.items = data.items.filter(
  //     (item) => item.id !== payload.data.deleteItem.id,
  //   )

  //   // 3. put the items back
  //   cache.writeQuery({ query: ALL_ITEMS_QUERY, data })
  // }

  const [deleteItem] = useMutation(
    DELETE_ITEM_MUTATION,
    { refetchQueries: [{ query: ALL_ITEMS_QUERY }] },
  )

  return (
    <button
      type="button"
      onClick={
        () => {
        /* eslint-disable */
        if (confirm('Are you sure you want to delete the item?')) {
            deleteItem({ 
              variables: { id },
              // update: updateCache,
            })
              .catch((error) => alert(error.message))
          }
        /* eslint-enable */
        }
      }
    >
      DELETE
    </button>
  )
}

export default DeleteItem
