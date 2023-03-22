import React from "react";


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            
        }
    }
    render() {
        return(
                <>
                  <h1>Count: { this.state.count }</h1>
                  <button onClick = {() => {
                      this.setState({count: this.state.count + 1})
                  }}  >IncrementCount</button>
                </>
            )
        };
}

export default Profile;