import React, { useState, useMemo, useContext, useEffect } from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Cookies from "js-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faClose, faUpload } from '@fortawesome/free-solid-svg-icons';



const AddBorr = () => {

    const { handleAddBorrower, borrowers, borrowerSuccess,
    addl, addb, handlePopup } = useContext(BorrowersContext);
    const [ owner, setOwner ] = useState("");

    
    useEffect(() => {
        setUnique((unique) => {
            unique = borrowers.length + 1000045 + 1;
            return unique;
        })

        const localHouse = Cookies.get("house");
            if ( localHouse === null ) {
            console.log("No cookies")
            } else {
            setOwner(localHouse);
            }
            


    }, [borrowers.length]);


    const navigate = useNavigate();

    

    const options = useMemo(() => countryList().getData(), []);
    // const [ value, setValue ] = useState('');

    const [ country, setCountry ] = useState("");
    const [ first, setFirst ] = useState("");
    const [ last, setLast ] = useState("");
    const [ business, setBusiness ] = useState("");
    const [ unique, setUnique ] = useState("");
    const [ gender, setGender ] = useState("Male");
    const [ title, setTitle ] = useState("");
    const [ mobile, setMobile ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birth, setBirth ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ zipcode, setZipcode ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ work, setWork ] = useState("");
    const [ credit, setCredit ] = useState("");
    // const [ desc, setDesc ] = useState("");

    const borrower = { owner, country, first, last, mobile, unique,
    city, birth, email, credit,work, phone, zipcode, state,
 address, title, gender, business };

    borrower.principal = 300000;
    borrower.loan = "";
    borrower.principal = "";
    borrower.release = "";
    borrower.desc = "";
    borrower.loanTitle = "";
    borrower.status = "";
    borrower.number = "";
    borrower.cycle = "";
    borrower.duration = "";
    borrower.dutime = "";
    borrower.perday = "";
    borrower.method = "";
    borrower.type = "";
    borrower.disbursed = "";
    borrower.product = "";
    borrower.cash = "";
    borrower.interest = "";  
    borrower.repayments = [];


    // const obj = {  first, last, work, mobile, owner, country };

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log("from new leader", borrower);
        
        // const response = await fetch("/borrowers", {
        //     method: "POST",
        //     body: JSON.stringify(borrower),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
        // const json = await response.json();

            // console.log("new workout added", json);

            console.log(borrower);
            handleAddBorrower(borrower);
            navigate("/viewborrowers")
            window.scrollTo({
                top: 0,
                bahavior: 'smooth' 
            })
            borrowerSuccess();
            document.location.reload();  
                          
    }

       
    const changeHandler = value => {
        console.log("country", value)
        setCountry(value);
        console.log(country);
    }


    
    return (
        <div 
           className="addnewborrower">
            {/* <h2>This is addLoan pop up</h2> */}
            <div className='whitee'>
                <div  
                    className='top'>
                    <h4>Add New Borrower</h4>
                    <div className='right'>
                        <button className='format'>
                        <FontAwesomeIcon 
                            icon={faAdd} 
                            className='add'
                        /> 
                        Create New Format
                        </button>
                      
                    </div>
                </div>

                     
                <form onSubmit={handleSubmit}>
                
                    <label className='country' htmlFor ="country">Country</label>
                    <Select className='selector' options={options}  onChange={changeHandler}/>

                    <label>First Name</label>
                    <input 
                    placeholder='Enter first name only'
                    onChange={(e) => setFirst(e.target.value)}
                    required
                    />

                    <label>Middle / Last Name</label>
                    <input 
                    placeholder='Middle and Last Name'
                    onChange={(e) => setLast(e.target.value)}
                    required
                    />

                    

                    <label>Mobile</label>
                    <PhoneInput
                        international
                        placeholder="Enter phone number"
                        value={mobile}
                        onChange={setMobile}
                        countrySelectProps={{
                            unicodeFlags: true
                        }}
                        required
                    />

                    <label>Unique Number</label>
                    <input 
                        value={unique}
                        placeholder='1000063'
                        onChange={(e) => setUnique(e.target.value)}
                        />

                    <div className='optional'>
                        {/* <label>Gender</label> */}
                        <p>Gender</p>
                        <p>(Optional Field)</p>
                    </div>
                    <select
                    className='gender' 
                    onChange={(e) => setGender(e.target.value)}
                    >
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                                        
                    <div className='optional'>
                        <p>Email</p>
                        <p>(Optional Field)</p>
                    </div>
                    <input 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    <div className='optional'>
                        <p>Date of Birth</p>
                        <p>(Optional Field)</p>
                    </div>
                    <input 
                        type='date'
                        placeholder='dd/mm/yy'
                        onChange={(e) => setBirth(e.target.value)}
                        />

                    <div className='optional'>
                        <p>Address</p>
                        <p>(Optional Field)</p>
                    </div>
                    <input 
                        placeholder='Address'
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <div className='optional'>
                        <p>City</p>
                        <p>(Optional Field)</p>
                    </div>
                    <input 
                        placeholder='City'
                        onChange={(e) => setCity(e.target.value)}
                    />


                    <div className='optional'>
                        <p>Province / State</p>
                        <p>(Optional Field)</p>
                    </div>
                    <input 
                        placeholder='Province or State'
                        onChange={(e) => setState(e.target.value)}
                    />


                    <div className='optional'>
                        <p>Province / State</p>
                        <p>(Optional Field)</p>
                    </div>
                    <input 
                       placeholder='Zipcode'
                       onChange={(e) => setZipcode(e.target.value)}
                    />


                    <div className='optional'>
                        <p>Landline Phone</p>
                        <p>(Optional Field)</p>
                    </div>
                    <PhoneInput
                        international
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone}
                        countrySelectProps={{
                            unicodeFlags: true
                        }}
                    />


                    <div className='optional'>
                        <p>Working Status</p>
                        <p>(Optional Field)</p>
                    </div>
                    <select
                       className='gender' 
                       onChange={(e) => setWork(e.target.value)}
                    >
                        <option></option>
                        <option>Employee</option>
                        <option>Government Employee</option>
                        <option>Private Sector Employee</option>
                        <option>Owner</option>
                        <option>Student</option>
                        <option>Oversease Worker</option>
                        <option>Unemployed</option>
                    </select>


                    <div className='optional'>
                        <p>Credit Score</p>
                        <p>(Optional Field)</p>
                    </div>
                    <input 
                       placeholder='Credit Score'
                       onChange={(e) => setCredit(e.target.value)}
                       />


                    <div className='optional'>
                        <p>Borrower Photo</p>
                        <p>(Optional Field)</p>
                    </div>
                    <div className='bphoto'>
                        <div className='upload-bg'>
                            <img src='./images/8.png'/>
                        </div>
                        <div className='choose'>
                            <FontAwesomeIcon icon={faUpload} className='upload' />
                            <p>Choose image to upload</p>
                        </div>
                    </div>


                    <div className='optional'>
                        <p>Description</p>
                        <p>(Optional Field)</p>
                    </div>
                    <textarea></textarea>

                    <div className='optional'>
                        <p>Borrower Files</p>
                        <p>(Optional Field)</p>
                    </div>
                    <div className='bphoto'>
                        <div className='upload-bg'>
                            <img src='./images/7.png'/>
                        </div>
                        <div className='choose'>
                            <FontAwesomeIcon icon={faUpload} className='upload' />
                            <p>Drop Files Here</p>
                        </div>
                    </div>


                    <button type='submit'>Add New Borrower</button>
                    
                </form>
            
                
            </div>
            {/* <div className='right'>
                <button className='format'>Add New Schedule</button>
                <FontAwesomeIcon 
                        icon={faAdd} 
                        className='close'
                        /> 
            </div> */}
              
        </div>
    )
}

export default AddBorr;