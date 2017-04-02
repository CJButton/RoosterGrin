

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
      email: "",
      formatHide: "",
      formatShow: "formatHide",
      finalText: [],
      modal: false
    };
  }

  componentWillReceiveProps(nextProps) {

    let properPhone = [];
    let areaCode;
    if(nextProps.patientInfo.phone_number !== undefined) {
      areaCode = nextProps.patientInfo.phone_number.slice(0, 3);
      properPhone.push(`(${areaCode})`)
      properPhone.push(`${nextProps.patientInfo.phone_number.slice(3, 6)}-`);
      properPhone.push(`${nextProps.patientInfo.phone_number.slice(6)}`);
    }

    this.setState({
      fname: nextProps.patientInfo.first_name,
      lname: nextProps.patientInfo.last_name,
      street: nextProps.patientInfo.street_address,
      phone: properPhone.join(""),
      city: nextProps.patientInfo.city,
      state: nextProps.patientInfo.state,
      zip: nextProps.patientInfo.zip,
      email: nextProps.patientInfo.email
    })
  }

  handleText(e) {
    this.setState({
      text: e.target.value
    });
  }

  componentWillMount() {
    Modal.setAppElement('body');
   }

  submitHit() {
    if (this.state.currentPatient === "Select a Patient") {
      this.setState({
        modal: true
      })
    } else {
      this.handleSubmit();
    }
  }

  closeModal() {
    this.setState({
      modal: false
    });
  }

  handleSubmit() {
    let newLine = this.state.text.split("\n");

    newLine.forEach((span) => {
      let splitSpan = span.split(" ");
      splitSpan.forEach((word) => {
        if (word.includes("@fname")) {
          this.state.finalText.push(word.replace("@fname", this.state.fname));
        } else if (word.includes("@lname")) {
          this.state.finalText.push(word.replace("@lname", this.state.lname));
        } else if (word.includes("@street")) {
          this.state.finalText.push(word.replace("@street", this.state.street));
        } else if (word.includes("@phone")) {
          this.state.finalText.push(word.replace("@phone", this.state.phone));
        } else if (word.includes("@city")) {
          this.state.finalText.push(word.replace("@city", this.state.city));
        } else if (word.includes("@state")) {
          this.state.finalText.push(word.replace("@state", this.state.state));
        } else if (word.includes("@zip")) {
          this.state.finalText.push(word.replace("@zip", this.state.zip));
        } else if (word.includes("@email")) {
          this.state.finalText.push(word.replace("@email", this.state.email));
        } else {
          this.state.finalText.push(word);
        }
        this.state.finalText.push(" ");
      });

      this.state.finalText.push("\n");
    });

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
    return (
    <div className="mainWrapper">

      <div className={`formatWrapper` + " " + this.state.formatHide}>

        <li className="instructions"> When writing your note, please be aware of the following keys:
          <ul>@fname: Patient's first name</ul>
          <ul>@lname:  Patient's last name</ul>
          <ul>@street: 12345 ABC Street</ul>
          <ul>@phone:  (123)456-789</ul>
          <ul>@city:   San Francisco</ul>
          <ul>@state:  California</ul>
          <ul>@zip:   123456</ul>
          <ul>@email:  sample@email.com</ul>
        </li>

          <p className="dropdownInstruction">Please choose a patient from the dropdown:</p>
          <Dropdown options={this.props.patients}
                    onChange={this.selectPatient.bind(this)}
                    placeholder={this.state.currentPatient} />
          <br></br>

          <div className="textAreaFlex">

            <div className="textAreaContainer">
              <p className="textAreaTitle">What would you like to write?</p>
              <textarea className="textArea"
                        onChange={this.handleText.bind(this)}
                        value={this.state.text}/>
              <br/>
              <button className="submitButton button"
                      onClick={this.submitHit.bind(this)}>Submit!</button>
            </div>
          </div>
          <br/>
          <br/>

      </div>


      <div className={this.state.formatShow}>
          {this.state.finalText.map((word, idx) => {
            if (word.includes("@")) {
              let stateWord = word.split("@")[1]
              return <span key={idx}>{this.state[stateWord]}</span>
            } else if (word === "\n") {
              return React.createElement("br")
            } else {
              return <span key={idx}>{word}</span>
            }
          })}
      </div>


      <Modal className="warningModal"
             isOpen={this.state.modal}>

          <p className="modalTitle">
              Are you sure you want to submit without choosing a patient?</p>

            <div className="submitChecker">
            <button className="closeModal button"
                    onClick={this.closeModal.bind(this)}>
                    No! Go back!</button>

            <button className="proceedSubmit button"
                    onClick={this.handleSubmit.bind(this)}>
                    Yes! Proceed!</button>
            </div>
        </Modal>

    </div>
    );
  }
}

export default Main;
