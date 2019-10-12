import './index.scss';
import React from 'react';
import Quill from 'quill/dist/quill.min';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorOptions: {
        placeholder: 'Wake up, Neo...',
        theme: 'bubble'
      },
      editor: null,
      delta: null
    };
    console.log('Editor extends React.Component: ', props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.note){
      this.state.editor.setContents(nextProps.note.delta.ops, this.state.editor);
    }
  }
  componentDidMount() {
    const that = this;
    const editor = this.state.editor = new Quill('#editor', this.state.editorOptions);
    that.props.editor(editor);
    editor.setContents( that.props.note.delta.ops );
    editor.on('editor-change', function(eventName, ...args) {
      if (eventName === 'text-change') {
        const text = editor.getText();
        that.state.delta = editor.getContents();
        if(text.length > 3 ) { that.props.callback(that.state.delta, 3); }
      }
    });
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
