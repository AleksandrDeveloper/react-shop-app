import React,{ useEffect } from 'react';

import Axios from 'axios';
import NavMenu from './NavMenu';
import {Container} from 'semantic-ui-react'
import CardItem from './Cart';
import { Card } from 'semantic-ui-react'
import Filter from '../Containers/Filter'

 


function App({
  books,
  isReady,
  setBooks,
  setFilter,
}){
  useEffect(()=>{
    Axios.get('http://localhost:3001/books')
    .then(data=>setBooks(data.data))
  },[])

  console.log(setFilter);
  return(
    <Container>
      <NavMenu />
      <Filter />
      <Card.Group itemsPerRow={4}>
      {
          !isReady?'Loading...'
          :books.map((itemBook,index)=>(
            <CardItem 
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
