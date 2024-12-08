import { useContext } from "react";
import Cookies from "js-cookie";
import { BorrowersContext } from "../contexts/BorrowersContext";
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";




const PaMaturity = () => {    

    const options = { maximumFractionDigits: 0 };

    const navigate = useNavigate();

    const { 
        borrowers,
        handleMorant,
        handlePerson 
    } = useContext(BorrowersContext);
    // var today = moment().format("YY-MM-DD");
    var date = new Date();

    var dv = new Date();
    dv.setDate(dv.getDate() + 5);
    var blist = [];


    borrowers.forEach((borrower) => {

        var d = new Date(borrower.release);
        d.setDate(d.getDate() + borrower.duration);

        // var maturity = moment(borrower.release).add(borrower.duration, "day").format("DD/MM/YYYY");
        var bure = moment(date).isAfter(d);

        if ( bure === true ) {
            blist.push(borrower);
        }

                 
    })

    
    
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
                    <h2>Past Maturity Date</h2>
                    <p>
                    Loans that are past the maturity date and 
                    have not been fully paid.                    </p>
                </div>
                <button>
                   + Add New Schedule
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
                        {/* <th>Amortization</th> */}
                        <th>PendingDue</th>
                        <th>DaysPast</th>
                        <th>Last Payments</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  
                { borrowers.map((borrower) => {
                                    const { first, last, principal, repayments, 
                                    interest, unique, release, number,
                                     duration, id } = borrower;
                                            
                                    var d = new Date(release);
                                    d.setDate(d.getDate() + duration);
                                    var bure = moment(date).isAfter(d);


                                    var timeD = Math.abs(d - date );
                                    const days = Math.ceil(timeD / (1000 * 60 * 60 * 24 ));


                                    var pSum = 0;

                                    repayments.forEach((pay) => {
                                        const { amount } = pay;
                                        pSum = (parseInt(amount)) + pSum;
                                    })

                                    var amo = ((interest * principal/100)/ number) + (principal/number);


                                    if ( bure === true ) {

                                        return (
                    <tr>
    
                            <td 
                             className='uyaapa'
                             onClick={() => handleLoan(borrower)}
                             >
                            <div className='photo-bg'>
                                <img src='./images/8.png'/>
                            </div>
                           {first} {last}
                            </td>
                            <td>{principal}</td>
                            <td>{(interest * principal/100) + parseInt(principal)}</td>
                            <td>{pSum}</td>
                            <td>{((interest * principal/100) + parseInt(principal)) - pSum}</td>
                            {/* <td>{Intl.NumberFormat("en-US",options).format(amo)}</td> */}

                            <td>{((interest * principal/100) + parseInt(principal)) - pSum}</td>
                            <td>{days}</td>
                            <td>{pSum}</td>
                            <td>
                                <h4 className='inact'>Maturity</h4>
                            </td>
                            <td className='icons'>
                                <FontAwesomeIcon icon={faPen} className='icon'/>
                            </td>
                            
                    </tr>
    
                                    )
                                    } 
                                    
                                })}
                                
                  
{/* 
                    <tr>
                        <td>2</td>
                        <td className='uyaapa'>
                            <div className='photo-bg'>
                                <img src='./images/person2.jpg'/>
                           </div>
                            Sally Abdully Omary
                        </td>
                        <td>100052</td>
                        <td>+255 693 944 943</td>
                        <td>0</td>
                        <td>990,000.00</td>
                        <td>
                            <h4 className='active'>Active</h4>
                        </td>
                        <td className='icons'>
                            <FontAwesomeIcon icon={faPen} className='icon'/>
                            <FontAwesomeIcon icon={faEllipsisH} className='dots'/>
                            <FontAwesomeIcon icon={faTrashCan} className='delete'/>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td className='uyaapa'>
                            <div className='photo-bg'>
                                <img src='./images/person3.jpg'/>
                            </div>
                            Nick Jonas Kandolo
                        </td>
                        <td>100053</td>
                        <td>+255 693 944 943</td>
                        <td>0</td>
                        <td>130,000.00</td>
                        <td>
                            <h4 className='inact'>Current</h4>
                        </td>
                        <td className='icons'>
                            <FontAwesomeIcon icon={faPen} className='icon'/>
                            <FontAwesomeIcon icon={faEllipsisH} className='dots'/>
                            <FontAwesomeIcon icon={faTrashCan} className='delete'/>
                        </td>
                    </tr> */}

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

export default PaMaturity;