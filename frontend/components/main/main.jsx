

import React from 'react';
import {HashRouter, Link} from 'react-router';

import Modal from 'react-modal';

class Main extends React.Component{
  constructor(props) {
    super(props);

    // this.state = {
    //
    // };
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

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let user_id = this.props.user.id;
  //   let title = this.state.title;
  //   let body = this.state.text;
  //   let username = this.props.user.username;
  //   const newPost = {post: {user_id, title, body, username}};
  //   this.props.submitPost(newPost);
  //   this.setState({
  //     title: "",
  //     text: "",
  //     addModal: false
  //   });
  // }

  render() {
    return (
    <div className="mainWrapper">

      <h1>Hello from main.jsx!</h1>


    </div>

    );
  }
}

export default Main;
