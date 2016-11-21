import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DonutActions from '../actions/donutAction'




function mapStateToProps(state) {
    return {
        counter: state.counter,
        donutConfig:state.donutConfig
    }
}


function donutDispatch(dispatch){
    return bindActionCreators(DonutActions,dispatch);
}

export default connect(mapStateToProps,donutDispatch)(MaimView)
