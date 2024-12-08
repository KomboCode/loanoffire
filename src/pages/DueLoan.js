import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import Updue from '../components/child components/updue';


const DueLoan = () => {

    const { borrowers } = useContext(BorrowersContext);
    console.log(borrowers);

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


    return (
        <section className='view-borrowers'>

           <div className='white-bg'>
            <div className='up'>
                <div>
                    <h2>Due Loans</h2>
                    <p>
                    Open loans tha have due schedule dates between selected dates.
                     You can use this page to see loans due today.
                    </p>
                </div>
                <button>
                   Filter Due Loans
                </button>
            </div>
            <table className="content-table">
                <thead>
                    <tr>
                        {/* <th>Full Name</th> */}
                        <th>Name</th>
                        <th>Principal</th>
                        <th>Due</th>
                        <th>Paid</th>
                        <th>PastDue</th>
                        <th>Amortization</th>
                        <th>PendingDue</th>
                        <th>NextDue</th>
                        <th>Status</th>
                        <th>Action</th>                        
                    </tr>
                </thead>

                <tbody>
                

                { myList.map((item, index) => {
                    for ( var i = 0; i < 8; i++ ) {
                        return (
                            <Updue item={item}
                                index={i}
                            />
                    )
                    }
                  
                  })}
                  


{/*                 
                    { borrowers.map((borrower, index) => {
                        const { first, last, mobile, unique, id } = borrower;
                        var no = index + 1;
                       
                        return (
                            <tr>
                                <td>{no}</td>
                                <td className='uyaapa'>
                                <div className='photo-bg'>
                                    <img src='./images/8.png'/>
                                </div>
                                { first } { last }
                                </td>
                                <td>{unique}</td>
                                <td>{mobile}</td>
                                <td>500,000.00</td>
                                <td>670,000.00</td>
                                <td>
                                    <h4 className='inact'>Inactive</h4>
                                </td>
                                <td className='icons'>
                                    <FontAwesomeIcon icon={faPen} className='icon'/>
                                    <FontAwesomeIcon icon={faEllipsisH} className='dots'/>
                                    <FontAwesomeIcon icon={faTrashCan} className='delete'/>
                                </td>
                                
                            </tr>
                                
                        )
                    })} */}

                  

                </tbody>
            
            </table>
    
          
           </div>

           {/* <h1>View Borrowers<span>Help</span></h1>
           <div 
              className='borrower-added'
              style={ bsuccess ? {
                display: "flex"
              } : null }
              >
              <FontAwesomeIcon icon={faCheck} className='icon'/>
              <h4>Borrower has been updated</h4>
           </div>  
           <div className='yellow'>
            <h4>Advanced Search: <span>Click here to show</span></h4>
           </div>
           <div className='export'>
            <div className='first'>
                <h4>Export Data for this page</h4>
            </div>
            <div className='two'>
                <div><h4>Export Data for all pages</h4></div>
                <div><h4>Show/Hide Columns</h4></div>
            </div>
           </div>
           <div className='people'>
            <div className='filter'>
                <input placeholder='Search borrowers'/>
                <div className='show'>
                    <h4>Show</h4>
                    <div>
                        <h5>20</h5>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <h4>entries</h4>
                </div>
            </div>

            <div className='view'>
                <h4>View</h4>

                <div className='full-name'>
                    <FontAwesomeIcon icon={faArrowUpWideShort}  className='icon'/>
                    <h4>Full Name</h4>
                </div>

                
                <div className='business'>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Business</h4>
                </div>

                
                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Unique#</h4>
                </div>

                
                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Mobile</h4>
                </div>

                
                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Email</h4>
                </div>

                
                
                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Total Paid</h4>
                </div>

                
                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Open Loans Balance</h4>
                </div>

                
                
                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort} className='icon'/>
                    <h4>Status</h4>
                </div>

                
                
                <div className='action'>
                    <h4>Actions</h4>
                </div>

            </div>

            <div 
               className='no-found'
               style={ borrowers.length !== 0 ? {
                display: "none"
               } : null }
               >
                <div className='no-data'>
                    <h4>No data found </h4>
                    <Link to="/addborrower"> Click here to Add Borrower</Link>
                </div>
                <div className='silver'>
                    <div>
                        <h4>0.00</h4>
                        <h4>0.00</h4>
                    </div>
                </div>

                <h4 className='showing'>Showing 0 to 0 of 0 entries</h4>
            </div>


            { borrowers.map((borrower) => {
                const { first, last, mobile, unique, id } = borrower;
                return (
                    <div className='person' key={id}>
                        <div className='saving'>
                            <div 
                               className='loan green'
                               onClick={() =>handleLoan(borrower)}
                               >Loans</div>
                            <div 
                               className='loan blue'
                               onClick={() =>handleSavings(borrower)}

                               >Savings</div>
                        </div>

                        <h4 className='first-name'>{first} {last}</h4>
                        <h4 className='unique'>{unique}</h4>
                        <h4 className='mobile'>{mobile}</h4>
                        <h4 className='total'>0</h4>
                        <h4 className='open'>650,000.00</h4>
                        <h4 className='maturity'>Past Maturity</h4>
                        <div className='edit'>
                            <div>
                                <FontAwesomeIcon icon={faPen} className='icon'/>
                            </div>
                            <div>
                              
                                <FontAwesomeIcon 
                                   icon={faXmark} 
                                   className='icon'
                                   onClick={() => handleDelete(id)}
                                   />

                            </div>
                        </div>

                    </div>
                )
            }).reverse()}

           </div>
            */}
        </section>
    )
}

export default DueLoan;