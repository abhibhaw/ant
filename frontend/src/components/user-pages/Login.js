import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Alert from '@material-ui/lab/Alert';
import Logo from '../../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/admin/Actions';

function Login(props){
    const [state, setState] = useState({
      email: '',
      password: '',
      keepMeSignedIn: false,
      emailInvalid: false,
      passwordInvalid: false,
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const aReducer = useSelector(state => state.aReducer);

    // SUBMITTING THE SIGN IN FORM
    const signIn = (event) => {
      event.preventDefault();
      let uError = false;
      let pError = false;
      // VALIDATE
      if(state.email == '')
        uError = true;
      if(state.password == '') 
        pError = true;
      
      if(!(pError || uError)) {
        // Submit form 
        dispatch(login(state.email,state.password, history));

      } else {
        setState({
          ...state,
          emailInvalid: uError,
          passwordInvalid: pError
        });

        setTimeout(() => {
          setState({
            ...state,
            emailInvalid: false,
            passwordInvalid: false
          });
        },5000);
      }
    }

    const handleOnChange = (event) => {
      setState({
        ...state,
        emailInvalid: false,
        passwordInvalid: false,
        [event.target.name]: event.target.value
      });
    }

   

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12 ">
              {/* ALERT START */}
                { aReducer.error != '' && <Alert severity="error" className="mb-5"><h6>{ aReducer.error }</h6></Alert> }
              {/* END OF ERROR ALERT */}
              <div className="auth-form-light text-left py-5 px-2 px-sm-5 text-center shadow">
                <div className="brand-logo w-100 text-center d-none d-sm-block" style={{marginTop: '-100px'}}>
                  <img src={Logo} alt="logo" className="img-fluid" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text px-3"><i className="fa fa-user"></i></span>
                      </div>
                    <Form.Control 
                      value={state.email} 
                      isInvalid={state.emailInvalid} 
                      required 
                      type="email" 
                      placeholder="Email" 
                      size="lg" 
                      className="h-auto"
                      name="email"
                      onChange={handleOnChange}
                      />
                    <Form.Control.Feedback type="invalid">
                          Email should not be empty.
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text px-3"><i className="fa fa-lock"></i></span>
                        </div>
                      <Form.Control 
                        value={state.password} 
                        required 
                        isInvalid={state.passwordInvalid} 
                        type="password" 
                        placeholder="Password" 
                        size="lg" 
                        className="h-auto"
                        name="password"
                        onChange={handleOnChange}
                        />
                      <Form.Control.Feedback type="invalid">
                          Password should not be empty.
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                  <div className="my-0 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" value={state.keepMeSignedIn} onChange={handleOnChange} name="keepMeSignedIn" className="form-check-input text-danger "/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button type="submit" onClick={signIn} className="btn btn-block btn-danger btn-sm font-weight-medium auth-form-btn">SIGN IN</button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
}

export default Login
