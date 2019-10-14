import moment from 'moment/min/moment.min';
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

  render(){

    return (
      <div>
        <Form method={ Authenticate }>
          <Input title={'Username'} name={'username'} validator={'required'} />
          <Input title={'Password'} name={'password'} type={'password'} validator={'required'} />
          <Button value={'Send!'} class={'btn-primary btn-lg float-right'} type={'submit'} />
        </Form>
      </div>
    );
  }
}

module.hot.accept();
