import React from 'react'
import Profile from './Profile'
import { connect } from "react-redux";
import {getUserProfile} from '../../redux/post-reducer'
import { withRouter,Redirect } from "react-router-dom";
import withRedirectComponent from '../common/Redirect/Redirect'


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 15605
        }
        this.props.getUserProfile(userId)
    }
    
    render() {
        if(!this.props.auth){return <Redirect to="/login" />}
        return <Profile profile={this.props.profile} />
    }

}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
}
)
 let withAuthRedirectComponent = withRedirectComponent(ProfileContainer)

let WithUserDataContainer = withRouter(withAuthRedirectComponent)


export default connect(mapStateToProps, {getUserProfile})(WithUserDataContainer);
