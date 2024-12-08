import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";




const NoRepayment = () => {

    const { 
        borrowers,
        handlePerson,
        handleMorant
     } = useContext(BorrowersContext);

    const navigate = useNavigate();

    
    var myList = [];

    for (var a = 0; a < borrowers.length; a++ ) {
        myList.push(borrowers[a].number);
        var myObj = {
            one: borrowers[a].number,
            two: borrowers[a].release,
            three: borrowers[a].principal,
            four: borrowers[a].unique,
            five: borrowers[a].due,
            six: borrowers[a].repayments,
            seven: borrowers[a].first,
            eight: borrowers[a].last,
            nine: borrowers[a].duration,
            ten: borrowers[a].interest
        }
        myList.push(myObj);
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

    

    return (
        <section className='view-borrowers'>

           <div className='white-bg'>
            <div className='up'>
                <div>
                    <h2>No Repayments</h2>
                    <p>
                    Loans that have not received any payments 
            since the start of the loan. You can also search for no payments
            made in the dates selected below
                    </p>
                </div>
                {/* <button>
                   + Filter no
                </button> */}
            </div>
            <table className="content-table">
                <thead>
                <tr>
                        {/* <th>Full Name</th> */}
                        <th>Name</th>
                        <th>Loan#</th>
                        <th>Principal</th>
                        <th>Due</th>
                        <th>Paid</th>
                        <th>PastDue</th>
                        <th>Amortization</th>
                        <th>PendingDue</th>
                        <th>Status</th>
                        <th>Action</th>                        
                    </tr>
                </thead>
                <tbody>
                  
                { borrowers.map((borrower, index) => {
                    
                    const {
                        first,
                        last,
                        principal,
                        unique,
                        interest,
                        repayments, 
                    } = borrower;

                    var inte = interest * principal/100;

                    var due = inte + parseInt(principal);

                    var ukwaju = 0;

                    if ( repayments === null  ) {

                    } else {
                        repayments.forEach((repay) => {
                            ukwaju = ukwaju + repay.amount
                        })
                    }
                    

                    console.log("NooooRepayment", due);
                    if ( borrower.repayments.length === 0 ) {
                        for ( var i = 0; i < 6; i++ ) {
                            return (
                                <tr>
            
                                    <td 
                                      className='uyaapa'
                                      onClick={() => handleLoan(borrower)}
                                      >
                                    <div className='photo-bg'>
                                        <img src='./images/8.png'/>
                                    </div>
                                    { first }  {last} 
                                    </td>
                                    <td>{unique}</td>
                                    <td>{principal}</td>
                                    <td>{due}</td>
                                    <td>{ukwaju}</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>
                                        <h4 className='inact'>Current</h4>
                                    </td>
                                    <td className='icons'>
                                        <FontAwesomeIcon icon={faPen} className='icon'/>
                                    </td>
                                    
                                </tr>
                                )
                                
                        }                            
                      

                    }

                  })}
                  

              

                </tbody>
            
            </table>
    
          
           </div>

        </section>
    )
}

export default NoRepayment;