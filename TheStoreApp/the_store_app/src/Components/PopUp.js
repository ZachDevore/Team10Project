import React from "react";
import SignUp from "./SignUpPage"

export default class PopUp extends React.Component {
  state = {
   seen: false
   };  togglePop = () => {
   this.setState({
    seen: !this.state.seen
   });
  };render() {
  return (
   <div>
    <div className="Btn" onClick={this.togglePop}>
      <button>Sign Up</button>
    </div>
    {this.state.seen ? <SignUp toggle={this.togglePop} /> : null}
   </div>
  );
 }
}