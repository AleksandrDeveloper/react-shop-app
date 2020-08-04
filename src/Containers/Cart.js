import { connect } from "react-redux";
import Filter from "../Components/Cart";
import * as cartAction from '../Store/actions/cart'
import { bindActionCreators } from "redux";


const mapStateToProps=({cart})=>({
    addedCount:0
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartAction,dispatch)
}); 

export default connect(mapStateToProps,mapDispatchToProps)(Filter)  