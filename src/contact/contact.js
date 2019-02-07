import React, { Component } from 'react';
import { simpleAction } from '../actions/simpleAction';
import { connect } from 'react-redux';
import { simpleReducer } from '../reducers/simpleReducer';
class Contact extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
       }
    render() {
    return(<div>
      Contact
      <button onClick={this.simpleAction}>Test redux action</button>
      {JSON.stringify(this.props.simpleReducer.result)}
    </div>)}
}
  const mapStateToProps = state => ({
    simpleReducer: state.simpleReducer
   })
const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
   })
   export default connect(mapStateToProps, mapDispatchToProps)(Contact);