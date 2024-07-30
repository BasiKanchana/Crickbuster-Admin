import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Components/AppRouts';
import AddPackages from './Components/AddPackages';
import IntraIntercityForm from './Components/IntraIntercityForm';
import AddDoubleHeader from './Components/AddDoubleHeader';
// import FlightstableForm from './Components/FlightstableForm';
// import EnterEmailPassword from './Components/EnterEmailPassword'
// import ResetPasswordForm from './Components/ResetPasswordForm';
// import InquiryTable from './Components/InquiryTable';


function App() {
  return (
    <div>
      {/* <InquiryTable/> */}
      {/* <IntraIntercityForm/> */}
      <AppRoutes/>
      {/* <EnterEmailPassword/> */}
      {/* <ResetPasswordForm/> */}
      {/* <AddDoubleHeader/> */}
      {/* <StadiumForm/> */}
      {/* <Stadium/> */}
      {/* <AddPackages/> */}
      
    </div>
       
  );
}

export default App;
