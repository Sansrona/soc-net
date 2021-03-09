import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {followAC,unfollowAC,addMoreAC} from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id)=>{dispatch(followAC(id))},
        unfollow: (id)=>{dispatch(unfollowAC(id))},
        addMore:(users)=>{ dispatch(addMoreAC(users))}
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;