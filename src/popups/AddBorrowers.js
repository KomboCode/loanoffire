import React, { useState, useMemo, useContext, useEffect } from 'react';
import { BorrowersContext } from '../contexts/BorrowersContext';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Cookies from "js-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';



const AddBorrowers = () => {

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
           className="addloan"
           style={
              addb ? {
                height: "870px",
                padding: "30px 60px",
                margin: "60px 130px",
                marginRight: "40px",
                marginLeft: "270px",
                opacity: 1
              } : {
                height: "0px",
                // margin: "60px 730px",
              }
           }
           >
            {/* <h2>This is addLoan pop up</h2> */}
            <div  
               className='top'
               style={
                addb ? {
                    opacity: 1
                } : null
               }
               >
                <h4>Add New Borrower</h4>
                <FontAwesomeIcon 
                   icon={faClose} 
                   className='close'
                   onClick={() => handlePopup("close")} 
                   />   
            </div>
            
            <form>
                
                        <label className='country' htmlFor ="country">Country</label>
                        <Select className='selector' options={options}  onChange={changeHandler}/>

                        <label>First Name</label>
                        <input 
                        placeholder='Enter first name only'
                        onChange={(e) => setFirst(e.target.value)}
                        />

                        <label>Middle / Last Name</label>
                        <input 
                        placeholder='Middle and Last Name'
                        onChange={(e) => setLast(e.target.value)}
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
                        />

                        <label>Unique Number</label>
                        <input 
                            value={unique}
                            placeholder='1000063'
                            onChange={(e) => setUnique(e.target.value)}
                            />

                        <label>Gender</label>
                        <select
                        className='gender' 
                        onChange={(e) => setGender(e.target.value)}
                        >
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                        <button type='submit'>Add New Borrower</button>
            </form>
                   
        </div>
    )
}

export default AddBorrowers;