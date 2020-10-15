import React, { Component } from 'react';
import Snack from './Snack'
import NewSnackForm from './NewSnackForm'

class ProfileContainer extends Component {

  render() {
    
    return (
      <div>
        <h2>{""}&apos;s Profile</h2>
        <h3></h3>

        <ol>
          {/* RENDER SNACKS HERE */}
        </ol>

        <NewSnackForm />

      </div>
    );
  }

}

export default ProfileContainer;
