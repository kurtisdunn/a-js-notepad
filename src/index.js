import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap';
import Editor from './components/editor';
import Sidebar from './components/sidebar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('TextArea extends React.Component: ', props);
  }
  componentDidMount(){
  }
  render() {
    return (
      <div className="row">
        <div className='col col-sm-2 sidebar'>
          <Sidebar />
        </div>
        <div className='col-sm-10 editor'>
          <Editor selectedNote={ this.state ? this.state.selectedNote : null  } />
        </div>

      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
