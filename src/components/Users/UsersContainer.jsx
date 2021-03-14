import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {getUsers,setFollowing,setUnfollowing} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader'
import { Redirect } from 'react-router';
import withAuthRedirectComponent from '../common/Redirect/Redirect'



class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.usersPerPage);
       
    }
    onFollow = (userId)=>{
        this.props.setFollowing(userId);
    }

    onUnfollow = (userId)=>{
        this.props.setUnfollowing(userId);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.usersPerPage)
    
    }
    render() {
        if(!this.props.isAuth){return <Redirect to='/login'/>}
        return <>
            {this.props.isFetched ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                usersPerPage={this.props.usersPerPage}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFollowing={this.props.isFollowing}
                onFollow={this.onFollow}
                onUnfollow={this.onUnfollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersPerPage: state.usersPage.usersPerPage,
        currentPage: state.usersPage.currentPage,
        isFetched: state.usersPage.isFetched,
        isFollowing: state.usersPage.isFollowing,
        isAuth: state.auth.isAuth
    }
}


export default withAuthRedirectComponent(connect(mapStateToProps, {getUsers,setFollowing,setUnfollowing})
(UsersAPIContainer));