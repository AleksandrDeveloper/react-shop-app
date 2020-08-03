import { connect } from "react-redux";
import Filter from "../Components/Filter";
import * as filterAction from '../Store/actions/filters'
import { bindActionCreators } from "redux";


const mapStateToProps=({filter})=>({
    activeItem: filter.filterBy,
    searchQuiery:filter.searchQuiery
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(filterAction,dispatch)
}); 

export default connect(mapStateToProps,mapDispatchToProps)(Filter) 