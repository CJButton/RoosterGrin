

import React from 'react';
import {HashRouter, Link} from 'react-router';

import Modal from 'react-modal';
import Dropdown from 'react-dropdown'

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPatient: "Select a Patient",
      text: "",
      fname: "",
      lname: "",
      street: "",
      phone: "",
      city: "",
      state: "",
      zip: "",
      formatHide: "",
      formatShow: "formatHide"
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
  componentWillReceiveProps(nextProps) {
    this.setState({
      fname: nextProps.first_name,
      lname: nextProps.last_name,
      street: nextProps.street_address,
      phone: nextProps.phone_number,
      city: nextProps.city,
      state: nextProps.state,
      zip: nextProps.zip,
    })
  }

  handleText(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit() {
    this.setState({
      formatHide: "formatHide",
      formatShow: ""
    });
  }

  selectPatient(e) {
    this.props.requestPatientInfo(e.value);
    this.setState({
      currentPatient: e.label
    });
  }


  render() {
    console.log(this.props);
    console.log(this.state);
    return (
    <div className="mainWrapper">

      <div className={`formatWrapper` + " " + this.state.formatHide}>
        <h1>Email formatting:</h1>
        <Dropdown options={this.props.patients}
          onChange={this.selectPatient.bind(this)}
          placeholder={this.state.currentPatient} />
        <br></br>
        <br></br>
        <div className="textAreaContainer">
          <p>What would you like to write?</p>
          <textarea className="textArea"
            onChange={this.handleText.bind(this)}
            value={this.state.text}/>
          <br></br>
          <button className="submitButton"
            onClick={this.handleSubmit.bind(this)}>Submit!</button>
        </div>


      </div>
      <div className={this.state.formatShow}>
                  {this.state.text.split("\n").map((word, idx) => {
                    return(
                      <span key={idx}>{word}<br/></span>
                    );
                  })}

      </div>

    </div>

    );
  }
}

export default Main;
