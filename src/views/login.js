import './login.scss';
import React from 'react';

import Authenticate from '../api/user/authenticate';
import Button from '../components/button';
import Form from '../components/form';
import Input from '../components/input';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log('App extends React.Component: ', props);
  }
  componentDidMount(){

  }
  render(){
    console.log('state', this.state);
    return (
      <div className="login">
        <Form method={ Authenticate }>
          <Input title={'Username'} name={'username'} validator={'required'} />
          <Input title={'Password'} name={'password'} type={'password'} validator={'required'} />
          <Button class={'btn-primary btn-lg float-right'} value={'Send'} type={'submit'} />
        </Form>
      </div>
    );
  }
}

module.hot.accept();
