import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {setAuthUser} from '../../redux/auth-reducer'
import * as axios from 'axios'



class HeaderContainer extends React.Component {
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials:true}).then(response=>{
            let {login, id, email} = response.data.data;
            this.props.setAuthUser(login,id,email);
        })
    }


    render(){
        return <Header {...this.props}/>
    } 
}

let mapStateToProps = (state) => ({
    login:state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps,{setAuthUser})(HeaderContainer);