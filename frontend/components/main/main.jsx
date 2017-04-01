

import React from 'react';
import {HashRouter, Link} from 'react-router';

import Modal from 'react-modal';
import Dropdown from 'react-dropdown'

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      patientsList: this.props.patients
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
    console.log(e);
  }


  render() {
    console.log(this.props.patients);
    return (
    <div className="mainWrapper">

      <h1>Hello from main.jsx!</h1>
      <Dropdown options={this.props.patients}
                onChange={this.selectPatient.bind(this)}
                placeholder="Select a Patient" />

    </div>

    );
  }
}

export default Main;
