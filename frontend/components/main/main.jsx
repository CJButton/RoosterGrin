

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

        // punctuation and letters are broken apart
        for (let i = 0; i < elements.length; i++) {
          // just a standard case of @fname
          if (elements[i] === "@") {
            modifiedWord.push(this.state[elements[i + 1]]);
            i++;

            // needed to resolve edgecase of something like "----@fname"
          } else if (elements[i][elements[i].length - 1] === "@" &&
                      this.state[elements[i + 1]]){
            modifiedWord.push(elements[0].slice(0, elements[0].length - 1));
            modifiedWord.push(this.state[elements[i + 1]]);
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

      <div className="instructionsContainer">
        <dl className="instructions one"> When writing your note, please be aware of the following keys:
          <br/>
          <br/>
          <dt>@fname</dt>
          <dd>Tom</dd>
          <dt>@lname</dt>
          <dd>Servo</dd>
          <dt>@street</dt>
          <dd>221 Baker St.</dd>
          <dt>@phone</dt>
          <dd>(123)456-789</dd>
        </dl>

        <dl className="instructions two">
          <br/>
          <br/>
          <dt>@city</dt>
          <dd>London</dd>
          <dt>@state</dt>
          <dd>California</dd>
          <dt>@zip</dt>
          <dd>94122</dd>
          <dt>@email</dt>
          <dd>email@example.com</dd>
        </dl>
      </div>

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
            </div>
              <br/>
              <div className="buttonContainer">
                <button className="submitButton button"
                  onClick={this.submitHit.bind(this)}>Submit!</button>
              </div>

          <br/>
          <br/>

      </div>


      <div className={this.state.formatShow}>
        <div className="flexContainer email">
          <div className="formattedContainer email">
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
