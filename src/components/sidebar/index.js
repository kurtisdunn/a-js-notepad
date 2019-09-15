import './index.scss';
import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes.reverse()
    };
    console.log('Sidebar extends React.Component: ', props);
    this.selectedNote = this.selectedNote.bind(this);
  }
  selectedNote(event, id){
    this.props.selectedNote(id);
  }

  render() {
    const notes = this.props.notes;
    return (
      <div>
      <nav className="navbar navbar-dark bg-dark">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </nav>
        {this.props.notes.map(i => {
          return (<div className="note" key={i._id} onClick={(e) => this.selectedNote(e, i._id)}> {i.delta.ops[0].insert.substring(0, 90)} </div>);
        })}
      </div>
    );
  }

}
module.hot.accept();
