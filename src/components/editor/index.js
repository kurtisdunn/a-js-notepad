import './index.scss';
import React from 'react';
import Quill from 'quill';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    console.log('Editor extends React.Component: ', props);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedNote) {
      return {
        value: nextProps.selectedNote ? nextProps.selectedNote.content : null
      };
    }
  }

  componentDidMount() {
    var options = {
      debug: 'info',
      // modules: {
      //   toolbar: '#toolbar'
      // },
      placeholder: 'Wake up, Neo...',
      theme: 'bubble'
    };
    var editor = new Quill('#editor', options);
  }

  render() {
    return (
      <div>
        <div id="toolbar"></div>
        <div id="editor"></div>
      </div>
      
    );
  }

}
module.hot.accept();
