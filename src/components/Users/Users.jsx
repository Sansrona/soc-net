import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userIMG from '../../assets/image/user-omg.png';

class Users extends React.Component {

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
        let pagination = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
        let pageCounts = [];
        for (let i = 1; i <= pagination; i++) { pageCounts.push(i) }
        return (
            <div className={s.usersContainer}>
                {pageCounts.map(page => { return <span onClick={(e) => { this.onPageChanged(page) }} className={this.props.currentPage === page && s.selectedPage}>{page}</span> })}
                {this.props.users.map((user) =>
                    <div key={user.id} className={s.usersFlexContainer}>
                        <div className={s.intro}>
                            <img className={s.userImg} src={user.photos.small ? user.photos.small : userIMG} alt="user avatar" />
                            {user.followed ? <button onClick={() => {
                                this.props.unfollow(user.id);
                            }}>Follow</button> : <button onClick={() => {
                                this.props.follow(user.id);
                            }}>Unfollow</button>}
                        </div>
                        <div className={s.profile}>
                            <div className={s.userProfile}>
                                <span className={s.username}>{user.name}</span>
                                <span>{user.description}</span>
                            </div>
                            <div className={s.userLocation}>
                                <span>{'user.location.city'}</span>
                                <span>{'user.location.country'}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}


export default Users;