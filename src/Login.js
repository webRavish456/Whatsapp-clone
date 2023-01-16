import React from 'react'
import Messenger from './Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './AccountProvider';

const Login = () => {

    const clientId="651863082976-om5d8r132rksclhu4uhcs90vdqepaqte.apps.googleusercontent.com";
  return (
     <div>
     <GoogleOAuthProvider clientId={clientId}>
       <AccountProvider>
       <Messenger/>
       </AccountProvider>
       
     </GoogleOAuthProvider>
       
     </div>
  )
}

export default Login