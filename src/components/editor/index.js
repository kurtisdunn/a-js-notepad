import './index.scss';
import React from 'react';
import Quill from 'quill';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        placeholder: 'Wake up, Neo...',
        theme: 'bubble'
      },
      editor: null,
      delta: null
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    // this.newNote = this.newNote.bind(this);

    console.log('Editor extends React.Component: ', props);
  }
  componentDidUpdate(nextProps) {
    console.log("nextProps: ", nextProps);
    this.state
  // this.setState({
        this.state.editor.setContents((nextProps.selectedNote[0] > 0) ? nextProps.selectedNote[0].delta.ops : null);

}
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.selectedNote) {
  //     console.log(  this);
  //     // this.state.editor.setContents(nextProps.selectedNote[0].delta.ops);
  //     return {
  //       value: nextProps.selectedNote ? nextProps.selectedNote.content : null
  //     };
  //   }
  // }
  onKeyUp(){
    //Set up keyup event for creating a new note.
    const editor = this.state.editor;
    const editorContainer = document.getElementById('editor');
    editorContainer.addEventListener('keyup', () => {
        this.props.callback(this.state.delta);
        this.state.delta = editor.getContents();
        // console.log(this.state.delta)
    });
  }
  componentDidMount() {
    const editor = this.state.editor = new Quill('#editor', this.state.options);
    this.onKeyUp()
  }

  render() {
    return (
      <div>
        <div id="editor"></div>
      </div>

    );
  }

}
module.hot.accept();
