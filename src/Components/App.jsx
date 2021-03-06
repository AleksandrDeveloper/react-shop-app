import React,{ useEffect } from 'react';

import Axios from 'axios';
import NavMenu from '../Containers/Menu';
import {Container} from 'semantic-ui-react'
import CardItem from './Cart';
import { Card } from 'semantic-ui-react'
import Filter from '../Containers/Filter'
import Cart from '../Containers/Cart';

 


function App({
  books,
  isReady,
  setBooks,
}){
  useEffect(()=>{
    Axios.get('http://localhost:3001/books')
    .then(data=>setBooks(data.data))
  },[])

  return(
    <Container>
      <NavMenu />
      <Filter />
      <Card.Group itemsPerRow={4}>
      {
          !isReady?'Loading...'
          :books.map((itemBook,index)=>(
            <Cart
            key={index} 
            {...itemBook}
            />
          ))
        }
      </Card.Group>
    </Container>
  )
}


export default App;
