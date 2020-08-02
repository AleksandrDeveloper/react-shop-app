import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Extra =({price}) =>(
  <div>
    <Icon name='rub' />
    {price}
  </div>
)


const CardItem = ({
    image,
    title,
    author,
    price
}) => (
  <Card
    image={image}
    header={title}
    meta={author}
    extra={<Extra price={price} />}
  />
)

export default CardItem;