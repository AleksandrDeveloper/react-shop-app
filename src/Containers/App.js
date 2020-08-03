import { connect } from "react-redux";
import * as bookAction from "../Store/actions/books";
import App from "../Components/App";
import { bindActionCreators } from "redux";

import orderBy from 'lodash/orderBy';

const sortBy = (books,type)=>{
  switch (type) {
    case 'All' :
      return books;
    case 'PriceHigth':
      return orderBy(books,'price','desc');
    case 'PriceLoy':
      return orderBy(books,'price','asc')
    default:
      return books;
  }
}


const mapStateToProps = ({ books }) => ({
  books: sortBy(books.booksArray,books.filterBy),
  isReady: books.isReady,
});
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(bookAction,dispatch),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);


  