import './index.scss';
import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    console.log('Navbar extends React.Component: ', props);
    this.newNote = this.newNote.bind(this);
  }
  newNote(event, id){
    this.props.newNote(1);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{ padding: '0.20rem 1rem'}}>
        <div className="container">
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.newNote()}>New</button>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Logout <span className="fa fa-sign-out-alt"></span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}
module.hot.accept();
