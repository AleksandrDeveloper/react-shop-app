import { connect } from "react-redux";
import * as bookAction from "../Store/actions/books";
import * as filterAction from "../Store/actions/filters";
import App from "../Components/App";
import { bindActionCreators } from "redux";

const mapStateToProps = ({ books }) => ({
  books: books.booksArray,
  isReady: books.isReady,
});
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(bookAction,dispatch),
  ...bindActionCreators(filterAction,dispatch)
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);


 