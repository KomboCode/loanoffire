import React, { useState, useContext, useEffect, useRef} from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { useNavigate } from 'react-router-dom';
import { faAdd, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AddLoans = () => {

    const navigate = useNavigate();
    const ref = useRef(null);
    const gef = useRef(null);
    const options = { maximumFractionDigits: 0 };
    

    const { 
           handleAddLoan, 
           suggest, 
           handleSuggest,
           gsug,
           handleGsuggest,
           handleDetails,
           loanSuccess,
           kopa,
        } = useContext(BorrowersContext);

        
    useEffect(() => {
        setName(kopa.name1 + " " + kopa.name2);
        setFirst(kopa.name1);
    }, [kopa.name1, kopa.name2]);

    const [ name, setName ] = useState("Choose Borrower or Search by name");
    const [ show, setShow ] = useState(false);
    const [ ona, setOna ] = useState(false);
    // const [ guarant, setGuarant ] = useState(false);
    const [ updatee, setUpdatee ] = useState(false);
    const [ sho, setSho ] = useState(false);
    const [ nao, setNao ] = useState(false);


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
    const [ dutime, setDutime ] = useState();
    const [ cycle, setCycle ] = useState("");
    const [ number, setNumber ] = useState(1);
    const [ status, setStatus ] = useState("");
    const [ loanTitle, setLoanTitle ] = useState("");
    // const [ desc, setDesc ] = useState("");
    const [ first, setFirst ] = useState("");
    const [ cash, setCash ] = useState("Cash");
    const [ interestPer, setInterestPer ] = useState(interest);
    const [ guarantor, setGuarantor ] = useState("Choose Guarantor or Search by name");
    const [ tinterest, setTinterest ] = useState("");



    
    const handleName = (one, two) => {
        setFirst(one);
        setName((name) => {
            const newName = one + " " + two;
            return newName;
        })
        setShow(false);
        setOna(false);
    }

    
    const handleGurantor = (one, two) => {
        setFirst(one);
        setGuarantor((guarantor) => {
            const newName = one + " " + two;
            return newName;
        })
        
        setSho(false);
        // setOna(false);
        setNao(false);
    }



    // console.log(product);

    const person = { loan, principal, release, first, 
    loanTitle, status, number, cycle, duration, dutime, perday, method,
    type, disbursed, product, cash, interest, interestPer, tinterest };


    const handleSubmit = (e) => {
        e.preventDefault();

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
        setUpdatee(true);

        if ( dutime === "Days") {
             days = duration * 1;
        } else if ( dutime === "Weeks") {
            days = duration * 7;
        } else if ( dutime === "Months") {
            days = duration * 30
        } else if ( dutime === "Years") {
            days = duration * 360;
        }

        var zidisha;
            
        
        if ( (perday === "Per day") ) {
             zidisha = days/1;
        } else if ( (perday === "Per Week") ) {
             zidisha = days/7;
        } else if ( (perday === "Per Month") ) {
             zidisha = days/30;
          
        } else if ( (perday === "Per Year") ) {
             zidisha = days/360;
        } 

        setInterestPer((interestPer) => {
            var newInterest = interest * zidisha;
            return newInterest;
        })

        console.log("from handle Cyle", interestPer);




        


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



    
    const handleChange = (value) => {
        setShow(true);
        handleSuggest(value);
    }

    
    const handleGhange = (value) => {
        setSho(true);
        handleGsuggest(value);
    }


    const handleRef = () => {
        setOna(true);
           setTimeout(() => {
                ref.current.focus();           
        }, 10 );

    }

    
    const handleGef = () => {
        setNao(true);
           setTimeout(() => {
                gef.current.focus();           
        }, 10 );

    }

    const handleInterest = (value) => {
        setInterest(value);
        if ( perday === "Per Loan") {
            setInterestPer(value);
        }
    }

    const handlePer = (value) => {
        setPerday(value);
        if ( method === "Compound Interest") {
            if ( value === "Per day") {
                setDutime("Days");
            }  else if ( value === "Per Week") {
                setDutime("Weeks");
            } else if ( value === "Per Month") {
                setDutime("Months");
            } else if ( value === "Per Year") {
                setDutime("Years");
            }
    
        }
      
    }

    const handleDuetime = (value) => {
        setDutime(value);
        if (method === "Compound Interest") {
            if ( value === "Days") {
                setPerday("Per day")
            } else if ( value === "Weeks") {
                setPerday("Per Week")
            } else if ( value === "Months") {
                setPerday("Per Month")
            } else if ( value === "Years") {
                setPerday("Per Year")
            } 
        }
    } 

    useEffect(() => {


        if ( method === "Flat rate") {
            
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
                
                var zidisha;
                
                
                if ( (perday === "Per day") ) {
                     zidisha = days/1;
                
                } else if ( (perday === "Per Week") ) {
                     zidisha = days/7;
                  
                } else if ( (perday === "Per Month") ) {
                     zidisha = days/30;
                   
                } else if ( (perday === "Per Year") ) {
                     zidisha = days/360;
                } 

                setInterestPer((interestPer) => {
                    var newInterest = interest * zidisha;
                    return newInterest;
                })

                setTinterest((tinterest) => {
                    var i = principal * interest/100;
                    var newi = i * zidisha;

                    if ( perday === "Per Loan") {
                        newi = i
                    }
                    return newi;
                })

        }  else if ( method === "Compound Interest") {
            setTinterest((tinterest) => {
                var amount = principal*(Math.pow(1+ interest/100, duration));
                var newi = amount - principal;
                return newi;
            })
        }  else if ( method === "Reducing Balance-Equal Installments") {

            
            var rate = interest/100;
            var vifa = (1 - (Math.pow(1 + rate, - number )))/rate;
            var payable = principal/vifa;
            var newInterest = principal * rate;
            var amountDue = parseInt(principal) + newInterest;
            var chapa = [];

                             
            for ( var i = 1; i < number; i++) {
                var reduceInterest;
                

                   
        
                var remain = amountDue - payable;
                amountDue = remain + newInterest;
                reduceInterest = remain * rate;
                chapa.push(reduceInterest);

                }

            var iyoo = 0;
            chapa.forEach((item) => {
                iyoo = iyoo + item;
            })
            console.log("Chappppppppppp", iyoo + newInterest);
            setTinterest((tinterest) => {
                var newTin = iyoo + newInterest;
                return newTin;
            });            
        
            }

              

    }, [duration, dutime, interest, perday, principal, method, cycle, number]);

    
    return (
        <div 
           className="addnewborrower addnewloan">
            {/* <h2>This is addLoan pop up</h2> */}
            <div className='whitee'>
                <div className='top'>
                    <h4>Add New Loan</h4>
                    <div className='right'>
                        <button 
                          className='format'
                          onClick={handleRef}
                          >
                        <FontAwesomeIcon 
                            // icon={faAdd}
                            icon={faAdd}
                            className='add'
                        /> 
                        Create New Borrower
                        </button>
                      
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                                                             
                        <div className='optiona'>
                            <p>Borrower Name</p>
                            <FontAwesomeIcon 
                                icon={faAngleDown}
                                className='flad'
                                onClick={() => setShow(!show)}
                        /> 
                        </div>
                        <div 
                           className='name'
                           onClick={handleRef}
                           style={ ona ? {
                            display: "none"
                           } : {
                            display: "block"
                           }}
                        >
                           <p>{name}</p>
                        </div>


                        <input  
                            className='input'
                            style={ ona ? {
                                display: "block"
                            } : {
                                display: "none"
                            } }
                            placeholder=''
                            onChange={(e) => handleChange(e.target.value)}
                            ref={ref}
                        />
                        <div 
                           className='suggestion'
                           style={ show ? null : {
                            display: "none"
                           } }
                           >
               
                            { suggest.map((item) => {
                                const { first, last, id  } = item;
                                return (
                                    <div key={id}>
                                        <p  
                                        className='suggest'
                                        onClick={() =>handleName(first, last) }
                                        >{first} {last}</p>
                                    </div>
                                )
                            }) }

                        </div>

                        <label>Principal Amount</label>
                        <input 
                        type='number'
                        placeholder='Principal Amount'
                        onChange={(e) => setPrincipal(e.target.value)}
                        required
                        />

                        <label>Loan Release Date</label>
                        <input 
                        type='date'
                        placeholder='dd/mm/yy'
                        onChange={(e) => setRelease(e.target.value)}
                        required
                        />

                        

                    <label>Interest Method</label>
                    <select 
                      onChange={ (e) => setMethod(e.target.value) }
                    >
                        <option>Flat rate</option>
                        <option>Reducing Balance-Equal Installments</option>
                        <option>Reducing Balance-Equal Principal</option>
                        <option>Interest-Only</option>
                        <option>Compound Interest</option>
                    </select>

                    <label>Interest Type</label>
                    <select 
                      onChange={ (e) => setType(e.target.value)}
                    >
                        <option>Percentage % Based Interest</option>
                        <option>Fixed Amount Per Cycle Interest</option>
                    </select>

                    <label>Interest Per</label>
                    <select 
                      className='per-day'
                      onChange={(e) => handlePer(e.target.value)}
                      value={perday}
                      required
                      >
                        <option></option>
                        { method === ("Compound Interest" || "Reducing Balance-Equal Installments") ? null :
                        <option>Per Loan</option>
                        }
                        <option>Per day</option>
                        <option>Per Week</option>
                        <option>Per Month</option>
                        <option>Per Year</option>
                    </select>

                    <label>Loan Interest %</label>
                    <input 
                    type='number'
                    placeholder='%'
                    required
                    max="1000"
                    step="0.01"
                    onChange={(e) => handleInterest(e.target.value)}

    
                    />


                    <div className='option'>
                        <p>Loan Duration</p>
                        <p className='days'>(Days, Weeks or Months)</p>
                    </div>
                    <div className='count'>
                        <div className='flex'>
                            <div 
                                className='plus'
                                onClick={() => setDuration((duration) => {
                                duration = duration + 1;
                                return duration;
                                })}
                            >+</div>
                            <div className='dura'>{duration}</div>
                            <div className='trans'>{duration}</div>
                            <div 
                                className='plus'
                                onClick={() => setDuration((duration) => {
                                duration = duration - 1;
                                return duration;
                            })}
                                >-</div>
                                
                        </div>
                        
                        
                    <select 
                       className='per-day'
                       onChange={(e) => handleDuetime(e.target.value)}
                       value={dutime}
                       required
                       >
                        <option></option>
                        <option>Days</option>
                        <option>Weeks</option>
                        <option>Months</option>
                        <option>Years</option>
                    </select>
                       
                    </div>
                   
                    <label>Repayment Cycle</label>
                    <select 
                       onChange={(e) => handleCycle(e.target.value)}
                       required
                       >
                        <option></option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Biweekly</option>
                        <option>Monthly</option>
                        <option>Bimonthly</option>
                        <option>Quarterly</option>
                        <option>Every 4 Months</option>
                        <option>Semi-Annual</option>
                        <option>Every 9 Months</option>
                        <option>Yearly</option>
                        <option>Lump Sum</option>

                    </select>

                    <label>Number of Repayments</label>
                    <div className='count no'>
                        <div className='flex'>
                        <div 
                           className='plus'
                           onClick={() => setNumber((number) => {
                            number = number + 1;
                            return number;
                           })}
                           >+</div>
                        <div  
                          className='dura'
                          style={ updatee ? {
                            color: "#4EBD76",
                            fontWeight: "bold"
                          } : null }
                          >{ Intl.NumberFormat("en-US",options).format(number)}</div>
                        <div 
                            className='plus'
                            onClick={() => setNumber((number) => {
                            number = number - 1;
                            return number;
                           })}
                            >-</div>
                        </div>
                        
                        <p 
                          className='updatee'
                          style={ updatee ? {
                            display: "block"
                          } : null }
                          >Automatically updated number of repayments to { Intl.NumberFormat("en-US",options).format(number)} days.</p>
                       
                    </div>


                    <label>Loan#</label>
                        <input  
                        value={loan}
                        placeholder='1000075'
                        onChange={(e) => setLoan(e.target.value)}
                        />

                                            
                        <div className='optional'>
                            <p>Loan Product</p>
                            <p>(Optional Field)</p>
                        </div>
                        <select onChange={(e) => setProduct(e.target.value)}>
                                <option>Business Loan</option>
                                <option>Overseas Worker Loan</option>
                                <option>Pensioner Loan</option>
                                <option>Personal Loan</option>
                                <option>Student Loan</option>
                            </select>


              
                    <div className='optional'>
                        <p>Disbursed By</p>
                        <p>(Optional Field)</p>
                    </div>
                    <select
                      onChange = { (e) => setDisbursed(e.target.value)} 
                    >
                        <option>Cash</option>
                        <option>Cheque</option>
                        <option>Wire Transfer</option>
                        <option>Online Transfer</option>
                    </select>
                  

                    <div className='optional'>
                        <p>Loan Status</p>
                        <p>(Optional Field)</p>
                    </div>  
                    <select 
                       className='per-day'
                       onChange={(e) => setStatus(e.target.value)}
                       >
                        <option>Processing</option>
                        <option>Open</option>
                        <option>Defaulted</option>
                        <option>----Credit Counseling</option>
                        <option>----Collection Agency</option>
                        <option>----Sequenstrate</option>
                        <option>----Debt Review</option>
                        <option>----Fraud</option>
                        <option>----Investigation</option>
                        <option>----Legal</option>
                        <option>----Write-Off</option>
                        <option>Denied</option>
                        <option>Not Taken Up</option>
                    </select>         

                                                      
                        <div className='optiona'>
                            <p>Guarantor Name</p>
                            
                            <FontAwesomeIcon 
                                icon={faAngleDown}
                                className='flad'
                                onClick={() => setSho(!sho)}
                        /> 
                        </div>
                        <div 
                           className='name'
                           onClick={handleGef}
                           style={ nao ? {
                            display: "none"
                           } : {
                            display: "block"
                           }}
                        >
                           <p>{guarantor}</p>
                        </div>


                        <input  
                            className='input'
                            style={ nao ? {
                                display: "block"
                            } : {
                                display: "none"
                            } }
                            placeholder=''
                            onChange={(e) => handleGhange(e.target.value)}
                            ref={gef}
                        />
                        <div 
                           className='suggestion'
                           style={ sho ? null : {
                            display: "none"
                           } }
                           >
               
                            { gsug.map((item) => {
                                const { first, last, id  } = item;
                                return (
                                    <div key={id}>
                                        <p  
                                        className='suggest'
                                        onClick={() =>handleGurantor(first, last) }
                                        >{first} {last}</p>
                                    </div>
                                )
                            }) }

                        </div>
            
            
                        <div className='optional'>
                            <p>Loan Title</p>
                            <p>(Optional Field)</p>
                        </div>  
                        <input  
                            onChange={(e) => setLoanTitle(e.target.value)}
                            />

                        <div className='optional'>
                            <p>Cash/Bank</p>
                            <p>(Optional Field)</p>
                        </div>  
                        <select onChange={(e) => setCash(e.target.value)}>
                            <option>Cash</option>
                        </select>

                        <button type='submit'>Add New Loan</button>

                </form>

            </div>
          
              
        </div>
    )
}

export default AddLoans;