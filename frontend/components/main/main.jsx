

import React from 'react';
import {HashRouter, Link} from 'react-router';

import Modal from 'react-modal';
import Dropdown from 'react-dropdown'

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
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
  }


  render() {
    console.log(this.props);
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
