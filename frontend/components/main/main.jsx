

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

   handleProceed() {
     this.setState({
       modal: false
     });
     this.handleSubmit();
   }

  submitHit() {
    if (this.state.currentPatient === "Select a Patient") {
      this.setState({
        modal: true
      });
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
    // entire line
    newLine.forEach((span) => {
      let modifiedSent = [];
      // broken down into word and punctuation pieces
      span.split(" ").forEach((word) => {
        let modifiedWord = [];
        let elements = word.split(/\s*\b\s*/);
        for (let i = 0; i < elements.length; i++) {
          if (elements[i] === "@") {
            modifiedWord.push(this.state[elements[1]]);
            i++;
          }
          else {
            modifiedWord.push(elements[i])
          }
        }
        modifiedSent.push(modifiedWord.join(""));
      });
      this.state.finalText.push(modifiedSent.join(" "));
      this.state.finalText.push("\n")
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



            <div className="textAreaContainer">
              <p className="textAreaTitle">What would you like to write?</p>
              <textarea className="textArea"
                        onChange={this.handleText.bind(this)}
                        value={this.state.text}/>
              <br/>
              <button className="submitButton button"
                      onClick={this.submitHit.bind(this)}>Submit!</button>
            </div>

          <br/>
          <br/>

      </div>


      <div className={this.state.formatShow}>
        <div className="flexContainer">
          <div className="formattedContainer">
            {this.state.finalText.map((el, idx) => {
              if (el === "\n") {
                return React.createElement("br")
              } else {
                return <span key={idx}>{el}</span>
              }
            })}
          </div>
        </div>
      </div>


      <Modal className="warningModal"
             isOpen={this.state.modal}
             contentLabel="warningModal">

          <p className="modalTitle">
              Are you sure you want to submit without choosing a patient?</p>

            <div className="submitChecker">
            <button className="closeModal button"
                    onClick={this.closeModal.bind(this)}>
                    No! Go back!</button>

            <button className="proceedSubmit button"
                    onClick={this.handleProceed.bind(this)}>
                    Yes! Proceed!</button>
            </div>
        </Modal>

    </div>
    );
  }
}
//
// Hi @fname @lname
//
// Is this contact info still correct?
// @street
// @city, @state @zip
// @phone
// @email

export default Main;
