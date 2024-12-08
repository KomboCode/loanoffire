import React, { useState, useEffect} from 'react';
import Cookies from "js-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faGear, faBell, faReceipt, faSortDown, faPerson, faEllipsisVertical, faUserPlus, faSearch, faCamera, faCameraRotate, faCameraRetro, faCameraAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';


const Profile = () => {

    const [ borrower, setBorrower ] = useState([]);

       
    useEffect(() => {

        const fetchWorkout = async () => {

                
            const localHouse = Cookies.get("house");
            if ( localHouse === null ) {
            console.log("No cookies")
            } else {
            console.log("there are cookies")
            }

                    
            const response = await fetch('/customers/profile/' + localHouse );
            const json = await response.json();


            if(response.ok) {
                console.log("from loanondesk profile", json);
                setBorrower(json);
            }
        }
        fetchWorkout();


    }, []);


    const [ fileData, setFileData ] = useState();

    const fileHandler = (e) => {
        setFileData(e.target.files[0]);
        console.log("antidote", e.target.files[0]);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const { _id, email, username, password } = borrower;
        console.log("ebuuuu", fileData)

        const data = new FormData();
        data.append('image', fileData );
        data.append('_id', _id);
        data.append('email', email);
        data.append('username', username);
        data.append('password', password);

        for (const value of data.values()) {
            console.log("form data values", value);
        }

            // axios.post("http://localhost:4000/customers/upload/" + _id, data)
            // .then((result) => {
            // console.log("File sent successfully");
            // })
            // .catch((err) => {
            // console.log(err.message)
            // });

    
        
        // const response = await fetch("/customers/upload/" + _id, {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
        // const json = await response.json();

        // if (response.ok) {
        //     console.log("new workout added", json);
        // }

    
    }

    return (
        <div className="profile">
            <form onSubmit={handleSubmit}>
                <input 
                  type='file'
                  onChange={fileHandler}
                  />
            </form>
            <button type='submit' onClick={handleSubmit}>Upload picture</button>
            <div 
            className='upload'
            // onClick={handleRef}
            >
                <FontAwesomeIcon icon={faCamera} className='ellipsis' />
            </div>
        </div>
    )
}

export default Profile;