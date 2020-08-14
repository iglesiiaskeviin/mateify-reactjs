import React from 'react';
import userData from '../databases/userData.json';




class CheckUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          userData,
      };
    }
  
    render() {
      return (
        <div>
            <ul>
                {
                    this.state.userData.map((persons)=>{
                        return (
                            <li key={persons.uuid}>{persons.email}</li>
                        )
                    })
                }
            </ul>
        </div>
      );
}
}

export default CheckUser;