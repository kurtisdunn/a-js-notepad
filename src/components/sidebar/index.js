import './index.scss';
import React from 'react';

const notes = [];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    console.log('Sidebar extends React.Component: ', props);
  }
  newNote(){

  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        {notes.map(i => {
          return <div className="note" key={i.id} onClick={() => this.selectedNote(i)} > {i.content.substring(0, 30)} </div>;
        })}
      </div>
    );
  }

}
module.hot.accept();
