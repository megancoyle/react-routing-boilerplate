import React, { Component } from 'react';

class ProfileDetail extends Component {
  render() {
    const profiles = this.props.route.data;
    const id = this.props.params.id;
    const profile = profiles.filter(profile => {
      if(profile.id == id) {
        return profile;
      }
    });

    return (
      <div>
        <h1>{profile[0].name}</h1>
        <ul>
          <li><strong>Age:</strong> {profile[0].age}</li>
          <li><strong>Hobbies:</strong> {profile[0].hobbies}</li>
        </ul>
      </div>
    );
  }
}

export default ProfileDetail;
