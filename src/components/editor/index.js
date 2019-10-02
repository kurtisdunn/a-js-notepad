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
      this.state.editor.setContents( nextProps.note[0].delta.ops);
    }

  }
  componentDidMount() {
    const that = this;
    const editor = this.state.editor = new Quill('#editor', this.state.editorOptions);
    editor.setContents( this.props.note[0].delta.ops );

    editor.on('editor-change', function(eventName, ...args) {
      if (eventName === 'text-change') {
         that.state.delta = editor.getContents();
         that.props.callback(that.state.delta);
      }
    });
    that.props.editor(editor);
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
