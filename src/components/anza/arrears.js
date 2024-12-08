import React, { useState } from 'react'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Arrears = ({ borrower, handleKausha }) => {

    const options = { maximumFractionDigits: 0 };


    const { first, repayments, number, release, cycle, interest,
    principal, due } = borrower;
    const [ weka, setWeka ] = useState();

    var today = new Date;

    var interestPerday =  interest * principal/100*1/number;
    var principalPerday = principal/number;
    var kwaSiku = interestPerday + principalPerday;


    var myDates = [];
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
        myDates.push(dayl);

    }



    var lipia = [];

    tars.forEach((date) => {
        // var bure = moment(today).isAfter(date);
        var bure = moment(today).isAfter(date);
        // console.log(date, bure);
        if ( bure === true ) {
            // var da = moment(date).format("DD/MM/YYYY")
            lipia.push(moment(date).format("DD/MM/YYYY"));

        } 
    })

    // var aha = lipia

    
    var sum = 0;

    repayments.forEach((pay) => {
        // sum = sum + pay.amount;
        sum = sum + parseInt(pay.amount);
    })

    var lia = moment(today).format("DD/MM/YYYY");

    var tumia = lipia.filter((date) => date !== lia );
    console.log("liaaaaaaaaa", tumia);

    var ilibidi = tumia.length  * kwaSiku;
    
    console.log(first, "Ili sasa tueze kuona", sum, "ilibidi alipe", ilibidi);

    if ( lipia.length < 1) {
        // console.log("foreach amana");
    } else {
                // var ambazo = new Date();
                var ambazo = moment(repayments[repayments.length - 1 ].collect).format("DD/MM/YYYY");
                var lipa = moment(lipia[lipia.length]).subtract(1, "day").format("DD/MM/YYYY");

               if ( sum < ilibidi ) {
            return (
                <tr>
                        <td 
                            className='uyaapa'
                            >
                        <div className='photo-bg'>
                            <img src='./images/8.png'/>
                        </div>
                        { first } { borrower.last }
                        </td>
                        <td>{borrower.principal}</td>
                        <td>{due}</td>
                        <td>{sum}</td>
                        <td>{Intl.NumberFormat("en-US",options).format(ilibidi)}.00</td>
                        <td>{Intl.NumberFormat("en-US",options).format(kwaSiku)}.00</td>
                        <td>{Intl.NumberFormat("en-US",options).format(due - sum)}.00</td>
                        <td>{ambazo}</td>
                        <td>
                            <h4 className='inact'>Loan Arrears</h4>
                        </td>
                        <td className='icons'>
                            <FontAwesomeIcon icon={faPen} className='icon'/>
                        </td>
                        
                    </tr>
            )
               }
    }



    
    // if ( repayments.length >= 1 ) {
            
    //     tars.forEach((tar) => {
    //         var yechu = moment(today).isAfter(tar);
    //         if ( yechu === true ) {
    //             var iyo = moment(tar).format("DD/MM/YYYY");
                
    //             lipia.push(iyo);
    //         }
        
    //     })
    // }


    // console.log("Ebu nizione",lipia); 
    // console.log("Ebu nizione", ty([])); 


    // console.log("missed repaysss", lipia[lipia.length - 1]);


    // repayments.forEach((repayment) => {

    //     if ( lipia.length > 0 ) {

    //         if ( lipia[lipia.length - 1] === repayment.collect ) {
    //         } else {
    //             handleKausha(first);
    //         }
    //     }


    // })

    // console.log(borrower.first, myDates);

    // for ( var i = 1; i < repayments.length; i++) {
    //     lipia.forEach((miss) => {
    //         if ( miss === repayments[i].collect) {
    //             console.log("iyaapa", miss);
    //         } else {
    //             console.log("hazijalipiwa hizi apa", miss);

    //         }
    //     })
    // }



}

export default Arrears;