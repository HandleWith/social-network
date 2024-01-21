import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps) {
      if(this.props.status !== prevProps.status) {
        this.setState({
          status: this.props.status
        })
      }
    }
    activateEditMode = () => {
      this.setState({
        editMode: true
      })
    }
    disableEditMode = () => {
      this.setState({
        editMode: false
      })
      this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
      this.setState({ 
        status: e.target.value 
      })
    }
   render() {
    return (
      <div>
        {!this.state.editMode 
        ? <div><span onDoubleClick={ this.activateEditMode }>{this.props.status || "--------"}</span></div>
        : <div><input onChange={ this.onStatusChange } autoFocus={true} onBlur={ this.disableEditMode } type="text" value={this.state.status}/></div>
        }
      </div>
    );
  }
}

export default ProfileStatus;
