import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Jumbotron,
    Spinner,
    Form,
    Button,
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import firebase from '../Firebase';

function Login() {
  const history = useHistory();
  const [creds, setCreds] = useState({ nickname: '' });
  const [showLoading, setShowLoading] = useState(false);
  const ref = firebase.database().ref('users/');

  const onChange = (e) => {
    e.persist();
    setCreds({...creds, [e.target.name]: e.target.value});
}

}

export default Login;