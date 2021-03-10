import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {followAC,unfollowAC,addMoreAC,setTotalUsersCountAC,setCurrentPageAC} from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersPerPage: state.usersPage.usersPerPage,
        currentPage: state.usersPage.currentPage

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id)=>{dispatch(followAC(id))},
        unfollow: (id)=>{dispatch(unfollowAC(id))},
        addMore:(users)=>{ dispatch(addMoreAC(users))},
        setTotalUsersCount:(usersCount)=>{ dispatch(setTotalUsersCountAC(usersCount))},
        setCurrentPage:(currentPage)=>{ dispatch(setCurrentPageAC(currentPage))}
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;