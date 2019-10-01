import React from 'react'
import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks'
import { SINGLE_ITEM_QUERY } from './graphql/queries'
import Error from './ErrorMessage'
import Loading from './styles/Loading'
import SingleItemStyles from './styles/SingleItemStyles'

const SingleItem = (props) => {
  const { id } = props

  const { loading, error, data } = useQuery(
    SINGLE_ITEM_QUERY,
    { variables: { id } },
  )

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (!data.item) return <p>No Item Found!</p>

  return (
    <SingleItemStyles>
      <Head>
        <title>{`${data.item.title} | Diarybun`}</title>
      </Head>
      <img src={data.item.largeImage} alt={data.item.title} />
      <div className="details">
        <h2>{`Viewing ${data.item.title}`}</h2>
        <p>{data.item.description}</p>
      </div>
    </SingleItemStyles>
  )
}

export default SingleItem
