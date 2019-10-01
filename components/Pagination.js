import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { PAGINATION_QUERY } from './graphql/queries'
import { perPage } from '../config'
import PaginationStyles from './styles/PaginationStyles'

const Pagination = (props) => {
  const { page } = props

  const { loading, error, data } = useQuery(PAGINATION_QUERY)

  if (loading) return null
  if (error) return null

  const { count } = data.itemsConnection.aggregate
  const pages = Math.ceil(count / perPage)

  return (
    <PaginationStyles>
      <Head>
        <title>{`Page ${page} of ${pages} | Sick Fits`}</title>
      </Head>
      <Link
        href={{
          pathname: '/items',
          query: { page: page - 1 },
        }}
      >
        <a className="prev" aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>{`Page ${page} of ${pages}`}</p>
      <Link
        href={{
          pathname: '/items',
          query: { page: page + 1 },
        }}
      >
        <a className="next" aria-disabled={page >= pages}>Next →</a>
      </Link>
    </PaginationStyles>
  )
}

export default Pagination
