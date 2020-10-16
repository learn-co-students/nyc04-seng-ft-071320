import React, { Component } from 'react';
import Snack from './Snack'
import NewSnackForm from './NewSnackForm'

class ProfileContainer extends Component {

  render() {
    let {username, id, snacks, token, addSnack} = this.props

    let allSnacks = snacks.map(snackObj => {
      return <Snack key={snackObj.id} snack={snackObj} />
    })
    
    return (
      <div>
        <h2>{username}&apos;s Profile</h2>

        <ol>
          {allSnacks}
        </ol>

        <NewSnackForm token={token} addSnack={addSnack}/>

      </div>
    );
  }

}

export default ProfileContainer;
