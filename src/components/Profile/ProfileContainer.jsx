import React from 'react'
import Profile from './Profile'
import * as axios from "axios";
import { connect } from "react-redux";
import {setUserProfile} from '../../redux/post-reducer'
import { withRouter } from "react-router-dom";
import usersAPI from '../../dal/usersAPI';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 15605
        }
        usersAPI.getProfileApi(userId).then(data => {
            this.props.setUserProfile(data);
        })
    }
    
    render() {
        return <Profile  profile={this.props.profile} />
    }

}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile
}
)

let WithUserDataContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(WithUserDataContainer);
