import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { SINGLE_ITEM_QUERY } from './graphql/queries'
import { UPDATE_ITEM_MUTATION } from './graphql/mutations'
import Error from './ErrorMessage'
import Form from './styles/Form'
import Loading from './styles/Loading'

const UpdateItem = (props) => {
  const { id } = props

  const [state, setState] = useState({})

  const {
    loading: singleItemLoading,
    data: singleItemData,
  } = useQuery(
    SINGLE_ITEM_QUERY,
    { variables: { id } },
  )

  const [
    updateItem,
    { loading: updateItemLoading, error: updateItemError },
  ] = useMutation(
    UPDATE_ITEM_MUTATION,
  )

  const handleChange = (e) => {
    const { name, type, value } = e.target
    const finalValue = type === 'number' ? parseFloat(value) : value
    setState({ ...state, [name]: finalValue })
  }

  const updateItemOnSubmit = async (e) => {
    e.preventDefault()
    await updateItem({
      variables: {
        id,
        ...state,
      },
    })
  }

  if (singleItemLoading) return <Loading />
  if (!singleItemData.item) return <p>No Item Found!</p>

  return (
    <Form onSubmit={updateItemOnSubmit}>
      <Error error={updateItemError} />
      <fieldset disabled={updateItemLoading} aria-busy={updateItemLoading}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            defaultValue={singleItemData.item.title}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            defaultValue={singleItemData.item.price}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            defaultValue={singleItemData.item.description}
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">
          {`Sav${updateItemLoading ? 'ing' : 'e'} Changes`}
        </button>
      </fieldset>
    </Form>
  )
}

export default UpdateItem
