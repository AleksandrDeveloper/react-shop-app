import { connect } from "react-redux";
import * as bookAction from "../Store/actions/books";
import App from "../Components/App";
import { bindActionCreators } from "redux";

import orderBy from 'lodash/orderBy';

const sortBy = (books,type,searchVal)=>{ 
  switch (type) {
    case 'PriceHigth':
      return orderBy(books,'price','desc');
    case 'PriceLoy':
      return orderBy(books,'price','asc')
    default:
      return books;
  } 
}

const filterBySearch = (books,search)=>{
  return books.filter(item=>{
    return item.title.toLowerCase().indexOf(search.toLowerCase()) >=0
    || item.author.toLowerCase().indexOf(search.toLowerCase()) >=0
  })
}

const searchBook = (books,filterBy,searchBook)=>{
  return sortBy(filterBySearch(books,searchBook),filterBy)
}


const mapStateToProps = ({ books,filter }) => ({
  books: books.booksArray && searchBook(
    books.booksArray,
    filter.filterBy,
    filter.searchQuiery
  ),
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(bookAction,dispatch),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);


  