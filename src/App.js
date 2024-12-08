import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AddBorrower from './pages/AddBorrower';
import { BorrowersContext } from './contexts/BorrowersContext';
import ViewBorrowers from './pages/ViewBorrowers';
import ViewLoans from './pages/ViewLoan';
import ViewDetail from './pages/viewDetail';
import ViewGuarantors from './pages/ViewGuarantors';
import AddGuarantor from './pages/AddGuarantor';
import SingleLoan from './pages/SingleLoan';
import AddRepayment from './pages/AddRepayment';
import ViewRepayment from './pages/viewrepayment';
import AddBulkRepayments from './pages/AddBulkRepayments';
import DueLoans from './components/child components/DueLoans';
import MissedRepayments from './pages/MissedRepayments';
import PastMaturity from './pages/PastMaturity';
import NooRepayments from './pages/NooRepayments';
import LoanArrears from './pages/LoanArrears';
import OneMonthLate from './pages/OneMonthLate';
import ThreeMonthLate from './pages/ThreeMonthLate';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import { UsersContext } from './contexts/UsersContext';
import Login from './pages/login';
import Profile from './pages/profile';
// import AddBorrowers from './popups/AddBorrowers';
import AddBorr from './pages/AddBorr';
import AddLoans from './pages/AddLoan';
import DueLoan from './pages/DueLoan';
import NoRepayment from './pages/NoRepayment';
import PaMaturity from './pages/PaMaturity';
import MissedRepayment from './pages/MissedRepayment';
import LoanArrear from './pages/LoanArrear';
import Home from './pages/Home';
import Excel from './pages/UploadExcel';


export default function App () {

  const { login } = useContext(UsersContext);
  const { addb } = useContext(BorrowersContext);

  

  return (

    <section>

       { login ?

        <div>
              <div  
                  className='popups'
                  style={
                    addb ? {
                      opacity: 1,
                      width: "100%",
                      transform: "translateY(0px)",
                    } : {
                      opacity: 0,
                      width: "0px",
                      transition: "600ms"
                    }
                  }
                  >
                
                {/* <AddBorrowers addb={addb}/> */}
                {/* { addl ? <AddLoanPopup/> : null } */}

              </div>
          <Navbar/>
            <div className='content-app'>
            <Sidebar/>
            
              <Routes>
                <Route path="/viewborrowers" element={<ViewBorrowers/>} />
                <Route path="/addborrower" element={<AddBorrower/>} />
                <Route path='/viewloans' element={<ViewLoans/>} />
                {/* <Route exact path='/' element={<HomeBrancha/> } /> */}
                <Route path='/viewdetail' element={<ViewDetail/>} />
                <Route path='/viewguarantors' element={<ViewGuarantors/>} />
                <Route path='/addguarantor' element={<AddGuarantor/>} />
                <Route path='/singleloan' element={<SingleLoan/> } />
                <Route path='/addrepayment' element={<AddRepayment/>} />
                <Route path='/viewrepayment' element={<ViewRepayment/>} />
                <Route path='/addbulkrepayments' element={<AddBulkRepayments/>}/>
                <Route path='/dueloans' element={<DueLoans/>}/>
                <Route path='/missedrepayments' element={<MissedRepayments/>} />
                <Route path='/pastmaturity' element={<PastMaturity/>} />
                <Route path='/noorepayments' element={<NooRepayments/>} />
                <Route path='/loanarrears' element={<LoanArrears/>} />
                <Route path='/onemonthlate' element={<OneMonthLate/>} />
                <Route path='/threemonthlate' element={<ThreeMonthLate/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/addborr' element={<AddBorr/>} />
                <Route path='/addloa' element={<AddLoans/>} />
                <Route path='/dueloan' element={<DueLoan/>} />
                <Route path='/norepayment' element={<NoRepayment/>} />
                <Route path='/pamaturity' element={<PaMaturity/>} /> 
                <Route path='/missedrepayment' element={<MissedRepayment/>} />
                <Route path='/loanarrear' element={<LoanArrear/>} />
                <Route path='/excel' element={<Excel/>} />
                <Route exact path='/' element={<Home/>} />
              </Routes>     
            </div>
       </div>

       :
       <div className='landing'>
          <Routes>
            <Route exact path='/' element={<LandingPage/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
       </div> 
        }
      
      
      
    </section>
  )
}
