import './index.scss';
import 'bootstrap';
import 'jquery';
import moment from 'moment/min/moment.min';
import React from 'react';
import ReactDOM from 'react-dom';

import Editor from './components/editor';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

import DeleteNote from './api/notes/delete';
import GetNotes from './api/notes/get';
import PostNote from './api/notes/post';
import PutNote from './api/notes/put';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App extends React.Component: ', props);
    this.state ={
      notes: null,
      note: null
    };
    this.editorCallback = this.editorCallback.bind(this);
    this.setEditor = this.setEditor.bind(this);
    this.sidebarCallback = this.sidebarCallback.bind(this);
    this.newNote = this.newNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }
  UNSAFE_componentWillMount(){
    const that = this;
    setTimeout(() => {
      GetNotes().then(r => that.setState({notes: r, note: r.slice(-1)[0]}));

    }, 700);

  }
  sidebarCallback(id) {
    this.setState({ note: this.state.notes.filter(r => r._id === id)[0] });
  }
  editorCallback(delta, count) {
    const that = this;
    const notes = this.state.notes;
    let note = this.state.note ? this.state.note : null;
    if(!that.state.note || !that.state.note === null){
      PostNote({delta: delta}).then(r => {
        this.state.note = r;
        let notes2 = [...notes, r];
        that.state.notes.push({r})
        that.setState({notes: notes2});
      });
    }
     if (count === 3 && note != null){
       console.log(note._id);
      PutNote(note._id, {delta: delta}).then(i => {
        note = i;
        var foundIndex = that.state.notes.findIndex(x => x._id == i._id);
        that.state.notes[foundIndex] = i;
      });
    }
  }
  setEditor(editor){
    this.setState({ editor: editor });
  }
  newNote(){
    this.state.note = null;
    this.state.editor.setContents([{ insert: '\n' }]);
  }
  removeNote(){
      const id = this.state.note._id;
      DeleteNote(id).then(r => {
        this.setState({note:null, notes: this.state.notes.filter(item => item._id !== id)});
      });
  }
  render(){

    return (
      <div>
        { this.state.notes ?

        (
        <div className="d-flex" id="wrapper">
          <div id="sidebar-wrapper">
            <Sidebar notes={ this.state.notes } selectedNote={ this.sidebarCallback } />
          </div>
          <div id="page-content-wrapper">
            <Navbar newNote={ this.newNote } deleteNote={ () => this.removeNote() }/>
            <Editor note={ this.state.note } callback={ this.editorCallback } editor={ this.setEditor } />
          </div>
        </div>)
      :
      <div style={{ width: '100%', textAlign: 'center'}}>
        <div className="fa-3x" style={{ paddingTop: '45vh'}}>
            <i className="fas fa-sync fa-spin"></i>
        </div>
      </div>
      }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
