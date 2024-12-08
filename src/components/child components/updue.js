import moment from 'moment';
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { BorrowersContext } from '../../contexts/BorrowersContext';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";




const Updue = ({ item, index }) => {

    const navigate = useNavigate();

    const { handleMorant, handlePerson } = useContext(BorrowersContext);

    const { one, two, three, four, five, six, seven, eight, nine, ten } = item;
    const [ ipo, setIpo ] = useState(false);
    const [ past, setPast ] = useState();
    const [ pastDue, setPastDue ] = useState("-");

    const options = { maximumFractionDigits: 0 };




    var interest = ten * three / 100;
    var due = interest + parseInt(three);

    var interestPerDay = due/one;

    console.log("repayment ipo", typeof(three));


    var paid = 0;
    var kila = five/nine;

    if ( six == null ) {
    } else {
        six.forEach((repay) => {
            paid = paid + parseInt(repay.amount)
        })

    }


    var myData = [];

    var today = moment(day).format("DD/MM/YYYY");
    // var gau = moment(two).add(11, "day").format("DD/MM/YYYY");
    var jana = moment(day).subtract(1, "day").format("DD/MM/YYYY");




    var ukwaju = 0;

    for ( var i = 1; i < one; i++) {
        var day = moment(two).add(i, "day").format("DD/MM/YYYY");

            
        if ( six == null ) {
        } else {
            six.forEach((repay) => {
                if ( day ===  moment(repay.collect).format("DD/MM/YYYY") ) {
                    ukwaju = ukwaju - repay.amount
                }
            })

        }

        ukwaju = ukwaju + kila;

        var myObj = {
            leo: day,
            maokoto: ukwaju,

        }
        myData.push(myObj);
    }


    useEffect(() => {
        myData.forEach((obj) => {
            if ( obj.leo === today ) {
                setIpo(true);
                setPast(obj.maokoto);
            } if ( obj.leo === jana) {
                setPastDue(obj.maokoto);
            }
        })
    });


    
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


    var no = index + 1;
 


    if ( ipo) {

        return (
            <tr>
    
            {/* { ipo ?  */}
                {/* <tr> */}
                                    <td 
                                      className='uyaapa'
                                      onClick={() => handleLoan(item)}
                                    >
                                    <div className='photo-bg'>
                                        <img src='./images/8.png'/>
                                    </div>
                                      {seven} {eight}
                                    </td>
                                    <td>{Intl.NumberFormat("en-US",options).format(three)}</td>
                                    <td>{Intl.NumberFormat("en-US",options).format(due)}</td>
                                    <td>{Intl.NumberFormat("en-US",options).format(paid)}</td>
                                    <td>{pastDue}</td>
                                    <td>{Intl.NumberFormat("en-US",options).format(interestPerDay)}</td>
                                    <td>{Intl.NumberFormat("en-US",options).format(past)}</td>
                                    <td>{today}</td>
                                    {/* <td>{paid}</td> */}
                                    <td>
                                        <h4 className='inact'>Due Today</h4>
                                    </td>
                                    <td className='icons'>
                                        <FontAwesomeIcon icon={faPen} className='icon'/>
                                    </td>
                                    
                                {/* </tr> */}
             {/* : null } */}
    
    
            </tr>
        )
    }
        
    }
  

export default Updue;