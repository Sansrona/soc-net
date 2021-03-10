import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {followAC,unfollowAC,addMoreAC,setTotalUsersCountAC,setCurrentPageAC} from '../../redux/users-reducer';
import * as axios from 'axios'

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`).then(response => {
            this.props.addMore(response.data.items);
            this.props.setTotalUsersCount(30)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`).then(response => {
            this.props.addMore(response.data.items);
        })
    }
    render() {    
    return <Users totalUsersCount={this.props.totalUsersCount} 
        usersPerPage={this.props.usersPerPage}
        onPageChanged={this.onPageChanged}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        currentPage={this.props.currentPage}
        users={this.props.users}
    />
    }
}

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


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);


export default UsersContainer;