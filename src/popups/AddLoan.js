import React, { useState, useContext, useEffect} from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { Link, useNavigate } from 'react-router-dom';
import { faSortDown, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AddLoan = () => {

    const navigate = useNavigate();


    const { 
           handleAddLoan, 
           suggest, 
           handleSuggest,
           handleDetails,
           loanSuccess,
           kopa
        } = useContext(BorrowersContext);

        
    useEffect(() => {
        setName(kopa.name1 + " " + kopa.name2);
        setFirst(kopa.name1);
    }, [kopa.name1, kopa.name2]);

    const [ name, setName ] = useState("Choose Borrower or Search by name");
    const [ show, setShow ] = useState(false);
    const [ guarant, setGuarant ] = useState(false);


    // Contraints za add loan 

    const [ product, setProduct ] = useState("Business Loan");
    const [ loan, setLoan ] = useState("");
    const [ interest, setInterest ] = useState("");
    const [ disbursed, setDisbursed ] = useState("Cash");
    const [ principal, setPrincipal ] = useState("");
    const [ release, setRelease ] = useState("");
    const [ method, setMethod ] = useState("Flat rate");
    const [ type, setType ] = useState("Percentage % Based Interest");
    const [ perday, setPerday ] = useState("");
    const [ duration, setDuration ] = useState(1);
    const [ dutime, setDutime ] = useState("");
    const [ cycle, setCycle ] = useState("");
    const [ number, setNumber ] = useState(1);
    const [ status, setStatus ] = useState("");
    const [ loanTitle, setLoanTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ first, setFirst ] = useState("");
    const [ cash, setCash ] = useState("Cash");

    
    const handleName = (one, two) => {
        setFirst(one);
        setName((name) => {
            const newName = one + " " + two;
            return newName;
        })
        setShow(!show);
    }



    // console.log(product);

    const person = { loan, principal, release, first, desc, 
    loanTitle, status, number, cycle, duration, dutime, perday, method,
    type, disbursed, product, cash, interest };


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(borrower);
        handleAddLoan(person);
        handleDetails(first);
        navigate("/singleloan")
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
        
        setTimeout(() => {
            document.location.reload();            
        }, 100 );
        loanSuccess();
    }


    const handleCycle = (value) => {

        var days = 0;
        setCycle(value);

        if ( dutime === "Days") {
             days = duration * 1;
        } else if ( dutime === "Weeks") {
            days = duration * 7;
        } else if ( dutime === "Months") {
            days = duration * 30
        } else if ( dutime === "Years") {
            days = duration * 360;
        }

        console.log("Number of days", days);

        var numPay = 0;

        if ( value === "Daily") {
            setNumber((number) => {
                numPay = days / 1;
                return numPay;
            })
        }


        
        if ( value === "Weekly") {
            setNumber((number) => {
                numPay = days / 7;
                return numPay;
            })
        }

        
        if ( value === "Biweekly") {
            setNumber((number) => {
                numPay = days / 14;
                return numPay;
            })
        }

        
        if ( value === "Monthly") {
            setNumber((number) => {
                numPay = days / 30;
                return numPay;
            })
        }

        
        if ( value === "Bimonthly") {
            setNumber((number) => {
                numPay = days / 60;
                return numPay;
            })
        }


        
        if ( value === "Quarterly") {
            setNumber((number) => {
                numPay = days / 90;
                return numPay;
            })
        }

        
        
        if ( value === "Every 4 Months") {
            setNumber((number) => {
                numPay = days / 120;
                return numPay;
            })
        }

        
        
        if ( value === "Semi-Annual") {
            setNumber((number) => {
                numPay = days / 120;
                return numPay;
            })
        }

        
        
        if ( value === "Semi-Annual") {
            setNumber((number) => {
                numPay = days / 180;
                return numPay;
            })
        }

        
        if ( value === "Every 9 Months") {
            setNumber((number) => {
                numPay = days / 270;
                return numPay;
            })
        }

        
        if ( value === "Yearly") {
            setNumber((number) => {
                numPay = days / 360;
                return numPay;
            })
        }





    }



    return (
        <div className="addloan">
            {/* <h2>This is addLoan pop up</h2> */}
            <div className='top'>
                <h4>Add New Borrower</h4>
                <FontAwesomeIcon icon={faClose} className='close' />   
            </div>
            
            <form>
            <div 
                   className='field country'
                   onClick={() => setShow(!show)}
                   >
                    <div className='parallel'>
                        <label>Borrower</label>
                        <div>
                           <h4>
                            {name}
                           </h4>
                        </div>
                    </div>
                    {/* <RiArrowDownSFill className='down'/> */}
                    <FontAwesomeIcon icon={faSortDown} className='down' />
                </div>


            </form>
                   
        </div>
    )
}

export default AddLoan;