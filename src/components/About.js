import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    const profiles = this.props.route.data;
    const profileNode = profiles.map((profile) => {
      return (
        <Link
          to={"/profiles/"+profile.id}
          className="list-group-item"
          key={profile.id}>
          {profile.name}
        </Link>
      )
    });
    return (
      <div>
        <h1>About page</h1>
        <div className="list-group">
          {profileNode}
        </div>
      </div>
    );
  }
}

export default About;
