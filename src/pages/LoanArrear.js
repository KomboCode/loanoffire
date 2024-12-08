import React, { useContext, useEffect, useState } from 'react';
import Cookies from "js-cookie";
import { BorrowersContext } from '../contexts/BorrowersContext';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort, faCheck, faDeleteLeft, faEllipsis, faEllipsisH, faEllipsisVertical, faPen, faPlus, faRemove, faTrash, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import Missed from '../components/child components/missed';
import moment from 'moment';
import Arrears from '../components/anza/arrears';


const LoanArrear = () => {


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

            if ( (borrower.repayments.length > 0 )  && ( bure === true)   ) {
                wamelipa.push(borrower);
            }


        })




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


    var rando = false;


    return (
        <section className='view-borrowers missed-pay'>

           <div className='white-bg'>
            <div className='up'>
                <div>
                    <h2>Loan Arrears</h2>
                    <p>
                    Loans that are overdue and have not missed a repayment.
           once a loan becomes overdue, it will be marked as <span>Missed Repayment</span>
           status. If a part-payment has been received for the last collection
           date and loan is overdue and not expired, it will be converted into
           <span> Arrears</span> status.
                    </p>
                </div>
                <button>
                    View Repayments
                </button>
            </div>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        {/* <th>Loan#</th> */}
                        <th>Principal</th>
                        <th>Due</th>
                        <th>Paid</th>
                        <th>PastDue</th>
                        <th>Amortization</th>
                        <th>PendingDue</th>
                        <th>DaysPast</th>
                        {/* <th>LastPayment</th> */}
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
                                    <Arrears
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

export default LoanArrear;