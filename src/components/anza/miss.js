import React, { useState } from 'react'
import moment from 'moment';


const Missed = ({ borrower, handleKausha }) => {

    const { first, repayments, number, release, cycle } = borrower;
    const [ weka, setWeka ] = useState();

    var today = new Date;


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

    // myDates.forEach((date) => {
    //     // var bure = moment(today).isAfter(date);
    //     var bure = moment(date).isBefore(today);
    //     // console.log(date, bure);
    //     if ( bure === true ) {
    //         lipia.push(date);
    //     }
    // })

    
    if ( repayments.length >= 1 ) {
            
        tars.forEach((tar) => {
            var yechu = moment(today).isAfter(tar);
            if ( yechu === true ) {
                var iyo = moment(tar).format("DD/MM/YYYY");
                
                lipia.push(iyo);
            }
        
        })
    }


    // console.log("Ebu nizione",lipia); 
    // console.log("Ebu nizione", ty([])); 


    // console.log("missed repaysss", lipia[lipia.length - 1]);


    repayments.forEach((repayment) => {

        if ( lipia.length > 0 ) {

            if ( lipia[lipia.length - 1] === repayment.collect ) {
            } else {
                handleKausha(first);
            }
        }


    })

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



    return (
        <tbody>
            <td>{borrower.first}</td>
            <td>{borrower.principal}</td>
            <td>{borrower.interest}</td>
            <td>{number}</td>
            <td>{release}</td>
            <td>{cycle}</td>
            <td>joro</td>
            <td>joro</td>
            <td>joro</td>
            <td>joro</td>
            <td>joro</td>
        </tbody>
    )
}

export default Missed;