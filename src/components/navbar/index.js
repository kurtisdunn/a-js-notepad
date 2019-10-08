import './index.scss';
import React from 'react';

const $ = window.$;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    console.log('Navbar extends React.Component: ', props);
    this.newNote = this.newNote.bind(this);
  }
  newNote(event, id){
    this.props.newNote(1);
  }
  toggleSidebar(){
    const wrapper = document.getElementById('wrapper')
    console.log(wrapper);// Using a class instead, see note below.
    wrapper.classList.toggle('toggled');

  }
  componentDidMount(){

  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top" style={{ padding: '0.20rem 1rem'}}>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.toggleSidebar()}><i className="fas fa-bars"></i></button>
        &nbsp;&nbsp;
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.newNote()}>New</button>
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
