import React, { useContext, useEffect, useState } from 'react';
import Cookies from "js-cookie";
import { BorrowersContext } from '../contexts/BorrowersContext';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort, faCheck, faDeleteLeft, faEllipsis, faEllipsisH, faEllipsisVertical, faPen, faPlus, faRemove, faTrash, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
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

        //  const [ ipo, setIpo ] = useState(true);
         const [ kausha, setKausha ] = useState(true);




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
        list.push(value);

        if ( list.length > 0 ) {
            setKausha(true);
        }
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
                        <th>Name</th>
                        <th>Loan#</th>
                        <th>Principal</th>
                        <th>Due</th>
                        <th>Paid</th>
                        <th>PastDue</th>
                        <th>Amortization</th>
                        <th>PendingDue</th>
                        <th>DaysPast</th>
                        <th>LastPayment</th>
                        <th>Status</th>
                    </tr>
                </thead>

                {
                    borrowers.map((borrower) => {
                        const { principal, cycle, number, release, repayments } = borrower;
                                                
                        var tars = [];

                        for ( var m = 1; m <number; m++ ) {

                            var kalu = m;


                            if ( cycle === "Weekly") {
                                kalu = m * 7;
                            } else   if ( cycle === "Biweekly") {
                                kalu = m * 14;
                            } else   if ( cycle === "Monthly") {
                                kalu = m * 30;
                            } else  if ( cycle === "Bimonthly") {
                                kalu = m * 60;
                            }  else   if ( cycle === "Quarterly") {
                                kalu = m * 90;
                            }  else   if ( cycle === "Every 4 Months") {
                                kalu = m * 120;
                            }  else   if ( cycle === "Semi-Annual") {
                                kalu = m * 180;
                            }  else   if ( cycle === "Every 9 Months") {
                                kalu = m * 270;
                            }  else   if ( cycle === "Yearly") {
                                kalu = m * 360;
                            }  


                            var d = new Date(release);
                            d.setDate(d.getDate() + kalu);
                            tars.push(d);

                            var dayl = moment(release).add(kalu, "day").format("DD/MM/YYYY");

                        }

                        var lipia = [];



                        if ( repayments.length >= 1 ) {
            
                            tars.forEach((tar) => {
                                var yechu = moment(today).isAfter(tar);
                                if ( yechu === true ) {
                                    var iyo = moment(tar).format("DD/MM/YYYY");
                                    
                                    lipia.push(iyo);
                                }
                            
                            })
                        }

                        console.log("from m isse isa", kausha);


{/* 
                        repayments.forEach((repayment) => {

                            if ( lipia.length > 0 ) {

                            }

                        }) */}

{/* 
                        if ( lipia.length > 0 ) {
                          return null;
                        } else if (kausha === true) {
                            return (
                            <Missed
                                borrower={borrower}
                                handleKausha={handleKausha}
                            />
                        )
                        } */}

                        if (lipia[lipia.length - 1 ] === repayments[repayments.length - 1]) {
                            console.log("Iyaaaaaaaaaaaapa");
                        } else {
                            console.log("amnaaaaaaaaaaaa");
                        }


                      
                    })
                }

                { rando ? null : 
                    <p className='nodata'>No Loan Found</p>
                 }

                 { rando ? null :

                 
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