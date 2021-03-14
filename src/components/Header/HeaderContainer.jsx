import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {getAuthUser} from '../../redux/auth-reducer'
import {compose} from 'redux'

class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.getAuthUser();
    }


    render(){
        return <Header {...this.props}/>
    } 
}

let mapStateToProps = (state) => ({
    login:state.auth.login,
    isAuth: state.auth.isAuth,
})
export default compose(connect(mapStateToProps,{getAuthUser}))(HeaderContainer)
