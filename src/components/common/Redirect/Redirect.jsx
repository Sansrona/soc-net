import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";


let mapStateToPropsRedirect = (state) => {
    return {auth:state.auth.isAuth}
}

const withRedirectComponent  = (Component) =>{
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.auth)return <Redirect to="/login" />
            return <Component {...this.props} />
        }
}
const withAuthRedirect = connect(mapStateToPropsRedirect)(RedirectComponent);
    return withAuthRedirect;
}

export default withRedirectComponent;