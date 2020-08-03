import { connect } from "react-redux";
import NavMenu from "../Components/NavMenu";
import * as cartAction from '../Store/actions/cart'
import { bindActionCreators } from "redux";


const mapStateToProps=({cart})=>{
    return{
        totalprice:cart.cartArray.reduce((total,item)=>total+=item.price,0),
        count:cart.cartArray.length
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartAction,dispatch)
}); 

export default connect(mapStateToProps,mapDispatchToProps)(NavMenu) 