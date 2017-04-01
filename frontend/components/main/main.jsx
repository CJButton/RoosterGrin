

import React from 'react';
import {HashRouter, Link} from 'react-router';

import Modal from 'react-modal';
import Dropdown from 'react-dropdown'

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPatient: "Select a Patient"
    };
  }

  // update(property) {
  //   return e => this.setState({[property]: e.target.value});
  // }
  //
  // closeModal() {
  //   this.setState({
  //     addModal: false,
  //     errorModal: false
  //   });
  // }
  //
  // openAddModal() {
  //   if (this.props.user === null) {
  //     this.setState({
  //       errorModal: true
  //     });
  //   } else {
  //     this.setState({
  //       addModal: true
  //     });
  //   }
  // }
  //
  // componentWillMount() {
  //   Modal.setAppElement('body');
  // }

  selectPatient(e) {
    this.props.requestPatientInfo(e.value);
    this.setState({
      currentPatient: e.label
    });
  }


  render() {
    console.log(this.props);
    return (
    <div className="mainWrapper">

      <h1>Email formatting:</h1>
      <Dropdown options={this.props.patients}
                onChange={this.selectPatient.bind(this)}
                placeholder={this.state.currentPatient} />

      <textarea></textarea>
      <br></br>
      <button>Submit!</button>

    </div>

    );
  }
}

export default Main;
