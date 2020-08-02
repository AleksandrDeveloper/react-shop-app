import { connect } from "react-redux";
import Filter from "../Components/Filter";
import * as filterAction from '../Store/actions/filters'
import { bindActionCreators } from "redux";


const mapStateToProps=({books})=>({
    activeItem: books.filterBy,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(filterAction,dispatch)
}); 

export default connect(mapStateToProps,mapDispatchToProps)(Filter) 