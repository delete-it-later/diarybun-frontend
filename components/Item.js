import React from 'react'
import Link from 'next/link'
import formatMoney from '../lib/formatMoney'
import ItemStyles from './styles/ItemStyles'
import Title from './styles/Title'
import PriceTag from './styles/PriceTag'
import AddToCart from './AddToCart'
import DeleteItem from './DeleteItem'

const Item = (props) => {
  const { item } = props

  return (
    <ItemStyles>
      <Link
        href={{
          pathname: '/item',
          query: { id: item.id },
        }}
      >
        {
          item.image
          && <img src={item.image} alt={item.title} />
        }
      </Link>

      <Title>
        <Link
          href={{
            pathname: '/item',
            query: { id: item.id },
          }}
        >
          <a>{item.title}</a>
        </Link>
      </Title>

      <PriceTag>{formatMoney(item.price)}</PriceTag>

      <p>{item.description}</p>

      <div className="buttonList">
        <Link
          href={{
            pathname: '/update',
            query: { id: item.id },
          }}
        >
          <a>EDIT</a>
        </Link>
        <AddToCart id={item.id} />
        <DeleteItem id={item.id} />
      </div>
    </ItemStyles>
  )
}

export default Item
