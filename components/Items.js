import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { ALL_ITEMS_QUERY } from './graphql/queries'
import Item from './Item'
import Pagination from './Pagination'
import { perPage } from '../config'
import Loading from './styles/Loading'

const Center = styled.div`
  text-align: center;
`

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;

  @media(max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const Items = (props) => {
  const { page } = props

  const { loading, error, data } = useQuery(
    ALL_ITEMS_QUERY,
    { fetchPolicy: 'network-only' },
    { variables: { skip: page * perPage - perPage } },
  )

  if (loading) return <Loading />
  if (error) return <Center>ERROR</Center>

  return (
    <Center>
      <ItemsList>
        {
          data.items.map((item) => <Item key={item.id} item={item} />)
        }
      </ItemsList>
      <Pagination page={page} />
    </Center>
  )
}

export default Items
