import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { BorrowersContext } from '../../contexts/BorrowersContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faEnvelope, faFilePdf, faReceipt } from '@fortawesome/free-solid-svg-icons';


const Repayments = () => {

    const navigate = useNavigate();
    const { person } = useContext(BorrowersContext);


    const { repayments } = person;
    // const { collect, by } = repayments[0];
    console.log("Repayment acha kufeli", repayments);


    var fall = [];
    var isa = moment().add(5, "day").format("DD/MM/YYYY");

    
    // const [ timer, setTimer ] = useState("");

    // const date = moment().format("DD/MM/YYYY");
    // const tomorrow = moment().add(5, "day").format("DD/MM/YYYY");
    // const muda = moment(timer).add(5, 'days').format("DD/MM/YYYY");


    for( var i = 1; i < 5; i++)  {

        isa = moment().add(i, "day").format("DD/MM/YYYY");
        fall.push(isa);
        console.log(fall);
    }

    const handleAdd = () => {
        navigate("/addrepayment");
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
        })
    }


    return (
        <div className='repayments'>
            <div className='buttons'>
                <div onClick={handleAdd}>Add Repayment</div>
                <div>Show/Hide Columns</div>
                <div>Bulk Delete</div>
            </div>

            <div className='bean'>
                <input placeholder='Search borrowers'/>
                <div className='show'>
                    <h4>Show</h4>
                    <div >
                        <h5>20</h5>
                    </div>
                    <h4>entries</h4>
                </div>
            </div>

            <table className='headers'>
                <thead>
                    <tr>
                        <th>Collection Date</th>
                        <th>Collected By</th>
                        <th>Method</th>
                        <th>Amount</th>
                        <th>Action</th>
                        <th>Receipt</th>
                    </tr>
                </thead>
                <tbody>
                    { repayments.map((repay) => {
                        const { amount, by, collect, index } = repay;
                        return (
                            <tr key={index}>
                                <td>{collect}</td>
                                <td>{by}</td>
                                <td>Cash</td>
                                <td>{amount}</td>
                                <td>
                                    <FontAwesomeIcon icon={faPen} className='icon'/>
                                    <FontAwesomeIcon icon={faTrashCan} className='icon'/>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faReceipt} className='icon'/>
                                    <FontAwesomeIcon icon={faFilePdf} className='icon'/>
                                    <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

{/* 

            <div className='titles'>
                <h4>Collection Date</h4>
                <div>
                  <FontAwesomeIcon icon={faArrowUpWideShort}/>
                  <h4>Collection Date</h4>
                </div>

                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort}/>
                    <h4>Method</h4>
                </div>

                
                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort}/>
                    <h4>Amount</h4>
                </div>

                
                <div>
                    <FontAwesomeIcon icon={faArrowUpWideShort}/>
                    <h4>Action</h4>
                </div>

                <h4>Receipt</h4>

            </div> */}

            

         
        </div>
    )
}

export default Repayments;