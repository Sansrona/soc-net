import React from 'react'
import Profile from './Profile'
import { connect } from "react-redux";
import {getUserProfile, getUserStatus,updateUserStatus} from '../../redux/post-reducer'
import { withRouter,Redirect } from "react-router-dom";
import withRedirectComponent from '../common/Redirect/Redirect'
import {compose} from 'redux'

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 15
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    
    render() {
        if(!this.props.auth){return <Redirect to="/login" />}
        return <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}  />
    }

}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    status: state.postPage.status
}
)


export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus,updateUserStatus}),withRouter,withRedirectComponent)(ProfileContainer)


