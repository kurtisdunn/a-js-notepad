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

    console.log('Editor extends React.Component: ', props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('UNSAFE_componentWillReceiveProps', nextProps.note[0]);
    this.state.editor.setContents( nextProps.note[0].delta.ops);

  }
  onKeyUp(){
    const editor = this.state.editor;
    const editorContainer = document.getElementById('editor');
    editorContainer.addEventListener('keyup', () => {
        this.props.callback(this.state.delta);
        this.state.delta = editor.getContents();
    });
  }
  componentDidMount() {
    const editor = this.state.editor = new Quill('#editor', this.state.options);
    editor.setContents( this.props.note[0].delta.ops );
    this.onKeyUp()
  }

  render() {
    return (
      <div className="editor container">
        <div id="editor"></div>
      </div>

    );
  }

}
module.hot.accept();
