import React from 'react'
import { Card, Icon, Button, Image } from 'semantic-ui-react'

const Extra =({price}) =>(
  <div>
    <Icon name='rub' />
    {price}
  </div>
)


const CardItem = ({
    id,
    image,
    title,
    author,
    price,
    addBook,
}) => (
  <Card>
      <div className="card-image">
        <Image src={image} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content> 
      <Card.Content extra>
        <a>
          <Icon name="rub" />
          {price}
        </a>
      </Card.Content>
      <Button onClick={()=>addBook({
        image,
        title,
        author,
        price,
        id
      })}>
        Add to card (3)
      </Button>
    </Card>
)

export default CardItem;