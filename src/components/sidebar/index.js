import './index.scss';
import React from 'react';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes
    };
    console.log('Sidebar extends React.Component: ', props);
    this.selectedNote = this.selectedNote.bind(this);
  }
  newNote(){

  }
  selectedNote(event, id){
      this.props.selectedNote(id);
  }
  componentDidMount() {

  }
  render() {
    const notes = this.props.notes;
    return (
      <div>
        {this.props.notes.map(i => {
          return (<div className="note" key={i.id} onClick={(e) => this.selectedNote(e, i.id)}> {i.delta.ops[0].insert.substring(0, 30)} </div>);
        })}
      </div>
    );
  }

}
module.hot.accept();
