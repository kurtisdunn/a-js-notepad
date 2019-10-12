import './index.scss';
import React from 'react';
const $ = window.$;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    console.log('Navbar extends React.Component: ', props);
    this.newNote = this.newNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }
  newNote(){
    this.props.newNote(1);
  }
  deleteNote(e){
    console.log(e.target);
    e.preventDefault();
    this.props.deleteNote(1);
  }
  toggleSidebar(){
    const wrapper = document.getElementById('wrapper')``
    wrapper.classList.toggle('toggled');
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{ padding: '0.20rem 1rem'}}>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.toggleSidebar()}><i className="fas fa-bars"></i></button>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.newNote()}><i className="fa fa-plus"></i></button>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={ (e) => this.deleteNote(e) }><i className="fa fa-trash"></i></button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Logout <span className="fa fa-sign-out-alt"></span></a>
          </li>
        </ul>
      </nav>
    );
  }

}
module.hot.accept();
