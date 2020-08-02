import React,{ useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setBooks } from './Store/actions/books';
import Axios from 'axios';
import NavMenu from './Components/NavMenu';
import {Container} from 'semantic-ui-react'
import CardItem from './Components/Cart';
import { Card } from 'semantic-ui-react'




function App({
  books,
  isReady,
  setBooksToStore
}){
  useEffect(()=>{
    Axios.get('http://localhost:3001/books')
    .then(data=>setBooksToStore(data.data))
  },[])

  return(
    <Container>
      <NavMenu />
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

const mapStateToProps=({books})=>({
  books:books.booksArray,
  isReady:books.isReady
})
const mapDispatchToProps=dispatch=>({
  setBooksToStore:books=>dispatch(setBooks(books))
})




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
