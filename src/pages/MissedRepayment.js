import React, { useContext, useEffect, useState } from 'react';
import Cookies from "js-cookie";
import { BorrowersContext } from '../contexts/BorrowersContext';
import { useNavigate } from 'react-router-dom';
import Missed from '../components/child components/missed';
import moment from 'moment';


const MissedRepayment = () => {


    var today = new Date;
    
    const { 
         borrowers, 
         handlePerson,
         handleDelete, 
         bsuccess,
         handleMorant,
         } = useContext(BorrowersContext);

         const [ ipo, setIpo ] = useState(true);
        //  const [ kausha, setKausha ] = useState(true);


        var wamelipa = [];

        borrowers.forEach((borrower) => {

            const { dutime, duration } = borrower;

            var days = 0;
    
            if ( dutime === "Days") {
                 days = duration * 1;
            } else if ( dutime === "Weeks") {
                days = duration * 7;
            } else if ( dutime === "Months") {
                days = duration * 30
            } else if ( dutime === "Years") {
                days = duration * 360;
            }
            
            
            var d = new Date(borrower.release);
            d.setDate(d.getDate() + days);

            var bure = moment(today).isBefore(d);

            console.log(d, "is after today", bure );
            if ( (borrower.repayments.length > 0 )  && ( bure === true)   ) {
                wamelipa.push(borrower);
            }
        })


        // console.log("wameliapa", wamelipa);




    // const [ borrowers, setBorrowers ] = useState([]);
    
    useEffect(() => {

    }, [])

    const navigate = useNavigate();


    const handleSavings = (value) => {
        navigate("/viewdetail");
        handlePerson(value);
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
    }

    
    const handleLoan = (value) => {
        navigate("/singleloan");
        handlePerson(value);
        Cookies.set("morant", JSON.stringify(value));
        handleMorant(value);
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
    }
    var list = [];


    const handleKausha = (value) => {
      setIpo(true);
    }

    console.log("from M R", list);

    var rando = false;


    return (
        <section className='view-borrowers missed-pay'>

           <div className='white-bg'>
            <div className='up'>
                <div>
                    <h2>Missed Repayments</h2>
                    <p>
                    Loans that are overdue and have not received any payment
           for the last collection date. If you enter a part-payment for the 
           last collection date for a loan, it will be marked as <span>Arrears</span>
            status instead.
                    </p>
                </div>
                <button>
                    View Repayments
                </button>
            </div>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Borrower Name</th>
                        <th>Principal</th>
                        <th>Due</th>
                        <th>Paid</th>
                        <th>Amortization</th>
                        <th>PendingDue</th>
                        <th>LastPayment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        wamelipa.map((borrower) => {
                            const { principal, cycle, number, release, repayments } = borrower;


                            if ( principal === "" ) {
                            return null;
                            } else  {
                                return (
                                <Missed
                                    borrower={borrower}
                                    handleKausha={handleKausha}
                                />
                            )
                            } 


                        
                        })
                    }

                </tbody>

                { ipo ? null : 
                    <p className='nodata'>No Loan Found</p>
                 }

                 { ipo ? null :

                 
                <tbody>
                    <tr className='missed'>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>

                    </tr>
                    


                </tbody>
             
                 }

            </table>
    
          
           </div>

        </section>
    )
}

export default MissedRepayment;