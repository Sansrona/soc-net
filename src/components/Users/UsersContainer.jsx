import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, addMore, setTotalUsersCount, setCurrentPage, toggleIsFetched, toggleIsFollowing } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader'
import usersAPI from '../../dal/usersAPI';


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetched(true);
        usersAPI.getUsersAPI(this.props.currentPage,this.props.usersPerPage).then(data => {
            this.props.toggleIsFetched(false);
            this.props.addMore(data.items);
            this.props.setTotalUsersCount(30)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetched(true);
        usersAPI.getUsersAPI(pageNumber,this.props.usersPerPage).then(data => {
            this.props.toggleIsFetched(false);
            this.props.addMore(data.items);
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
                isFollowing={this.props.isFollowing}
                toggleIsFollowing={this.props.toggleIsFollowing}
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
        isFollowing: state.usersPage.isFollowing

    }
}



const UsersContainer = connect(mapStateToProps, {follow, unfollow, addMore, setTotalUsersCount, setCurrentPage, toggleIsFetched, toggleIsFollowing})
(UsersAPIContainer);


export default UsersContainer;