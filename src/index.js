import './index.scss';
import 'bootstrap';
import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';

import Editor from './components/editor';
import Sidebar from './components/sidebar';

var notes = [
  {"id":0,"delta":{"ops":[{"attributes":{"background":"#181a1b","color":"#e8e6e3"},"insert":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "},{"attributes":{"header":2},"insert":"\n"},{"attributes":{"background":"#181a1b","color":"#e8e6e3"},"insert":"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"insert":"\n\n"},{"attributes":{"background":"#181a1b","color":"#e8e6e3"},"insert":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. "},{"insert":"\n\n"},{"attributes":{"background":"#181a1b","color":"#e8e6e3"},"insert":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"insert":"\n"}]},"timestamp":"2019-09-12T19:02:52+10:00"},
  {"id":1,"delta":{"ops":[{"attributes":{"background":"#181a1b","color":"#e8e6e3"},"insert":"\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\""},{"insert":"\n"}]},"timestamp":"2019-09-12T19:05:44+10:00"}
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App extends React.Component: ', props);
    this.state ={
      notes: notes,
      note: null
    }
    this.editorCallback = this.editorCallback.bind(this);
    this.sidebarCallback = this.sidebarCallback.bind(this);
    this.newNote = this.newNote.bind(this);
  }
  sidebarCallback(id) {
    this.setState({ note: notes.filter(r => r.id === id) });
  }
  editorCallback(delta) {
    console.log(delta);

    // const selectedNoteId = this.state.selectedNoteId;
    // console.log('editorCallback.selectedNoteId: ', selectedNoteId);
    // if(selectedNoteId >= 0 ){
    //   console.log('if editorCallback.selectedNoteId: ', selectedNoteId);
    // }
  }
  newNote(delta){

  }
  render() {
    return (
      <div className="row">
        <div className='col col-sm-3 sidebar'>
          <Sidebar notes={ notes } selectedNote={this.sidebarCallback}/>
        </div>
        <div className='col-sm-9 editor'>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <button className="btn btn-outline-success" type="button">New</button>
          </form>
        </nav>
          <Editor note={ this.state.note ? this.state.note : notes.slice(-1)} callback={this.editorCallback} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
