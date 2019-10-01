import React, { useState } from 'react'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_ITEM_MUTATION } from './graphql/mutations'
import Error from './ErrorMessage'
import Form from './styles/Form'

const CreateItem = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
  })

  const [
    createItem,
    { loading, error },
  ] = useMutation(CREATE_ITEM_MUTATION)

  const handleChange = (e) => {
    const { name, type, value } = e.target
    const finalValue = type === 'number' ? parseFloat(value) : value
    setState({ ...state, [name]: finalValue })
  }

  const handleUploadFile = async (e) => {
    const { files } = e.target
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'sickfits')

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/shahroozme/image/upload',
      {
        method: 'POST',
        body: data,
      },
    )

    const file = await res.json()

    setState({
      ...state,
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await createItem({
      variables: { ...state },
    })
    Router.push({
      pathname: '/item',
      query: { id: res.data.createItem.id },
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Error error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="file">
          Image
          <input
            type="file"
            id="file"
            name="File"
            placeholder="Upload an image"
            required
            // value={state.image}
            onChange={handleUploadFile}
          />
          {
            state.image
            && <img width="200" src={state.image} alt="Upload preview" />
          }
        </label>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required
            value={state.title}
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
            required
            value={state.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            required
            value={state.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  )
}

export default CreateItem
