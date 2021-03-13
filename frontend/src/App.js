import './App.css';
import './App.scss';
import {  
  useQuery,
  gql
} from '@apollo/client';

import React, { useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './components/shared/Navbar';
import Sidebar from './components/shared/Sidebar';
import SettingsPanel from './components/shared/SettingsPanel';
import Footer from './components/shared/Footer';
import { withTranslation } from "react-i18next";
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function App(props) {
  const [state,setState] = useState({
    isFullPageLayout: false
  });

  const isLoggedIn = useSelector(state => state.aReducer.isLoggedIn);
  const history = useHistory();
  const user = useSelector(state => state.aReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    onRouteChanged();  
        
    if(!isLoggedIn){
      history.push('/login');
    }

  },[props.location.pathname])


  

  const onRouteChanged = () => {
    console.log("ROUTE CHANGED");
    const { i18n } = props;
    const body = document.querySelector('body');
    if(props.location.pathname === '/layout/RtlLayout') {
      body.classList.add('rtl');
      i18n.changeLanguage('ar');
    }
    else {
      body.classList.remove('rtl')
      i18n.changeLanguage('en');
    }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      console.log(props.location)
      if (props.location.pathname === fullPageLayoutRoutes[i]) {
        setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }

  return (
      <div className="container-scroller">
        { !state.isFullPageLayout ? <Navbar/> : '' }
        <div className="container-fluid page-body-wrapper">
          { !state.isFullPageLayout ? <Sidebar/> : '' }
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes/>
              { !state.isFullPageLayout ? <SettingsPanel/> : '' }
            </div>
            { !state.isFullPageLayout ? <Footer/> : '' }
          </div>
        </div>
      </div>
    );


}

export default withTranslation()(withRouter(App));


