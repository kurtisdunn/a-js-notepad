import './index.scss';
import React from 'react';

const placeholder = '';

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    console.log('TextArea extends React.Component: ', props);
  }
  static getDerivedStateFromProps(nextProps, prevState){
  if(nextProps.selectedNote){
    return {
      value: nextProps.selectedNote ? nextProps.selectedNote.content : null
    };
  }




  }
  handleOnChange(e){
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <textarea autoFocus placeholder='wake up Neo...' defaultValue={ this.state.value } onChange={(e) => this.handleOnChange(e)} ></textarea>
    );
  }
}

module.hot.accept();
