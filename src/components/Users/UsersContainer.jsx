import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, addMore, setTotalUsersCount, setCurrentPage, toggleIsFetched } from '../../redux/users-reducer';
import * as axios from 'axios'
import Preloader from '../common/Preloader/Preloader'


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetched(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`).then(response => {
            this.props.toggleIsFetched(false);
            this.props.addMore(response.data.items);
            this.props.setTotalUsersCount(30)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetched(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`).then(response => {
            this.props.toggleIsFetched(false);
            this.props.addMore(response.data.items);
        })
    }
    render() {
        return <>
            {this.props.isFetched ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                usersPerPage={this.props.usersPerPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                users={this.props.users}
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
        isFetched: state.usersPage.isFetched

    }
}



const UsersContainer = connect(mapStateToProps, {follow, unfollow, addMore, setTotalUsersCount, setCurrentPage, toggleIsFetched})
(UsersAPIContainer);


export default UsersContainer;