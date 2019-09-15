import './index.scss';
import 'bootstrap';
import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';

import Editor from './components/editor';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

import GetNotes from './api/notes/get'
import PostNote from './api/notes/post'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App extends React.Component: ', props);
    this.state ={
      notes: null,
      note: null
    }
    this.editorCallback = this.editorCallback.bind(this);
    this.sidebarCallback = this.sidebarCallback.bind(this);
    this.navbarCallBack = this.navbarCallBack.bind(this);
  }
  sidebarCallback(id) {
    console.log('sidebarCallback', this.state.notes.filter(r => r._id === id));
    this.setState({ note: this.state.notes.filter(r => r._id === id) });
  }
  UNSAFE_componentWillMount(){
    const that = this;
    GetNotes().then(r => that.setState({notes: r, note: r.slice(-1)}))
  }
  editorCallback(delta) {
    console.log(JSON.stringify(delta));

    // const selectedNoteId = this.state.selectedNoteId;
    // console.log('editorCallback.selectedNoteId: ', selectedNoteId);
    // if(selectedNoteId >= 0 ){
    //   console.log('if editorCallback.selectedNoteId: ', selectedNoteId);
    // }
  }
  navbarCallBack(newNote) {
    const that = this;

    // blank
    // NotesPost().then(r => that.setState({ notes: notes }))
    // this.setState({notes: notes});
  }
  render() {

    return (
      <div>
        { this.state.notes ?
      <div className="row">
        <div className='col col-auto sidebar'>
          <Sidebar notes={ this.state.notes } selectedNote={this.sidebarCallback}/>
        </div>
        <div className='col' style={{ padding: 0 }}>
          <Navbar newNote={ this.navbarCallBack }/>
          <Editor note={ this.state.note } callback={this.editorCallback} />
        </div>
      </div>
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
