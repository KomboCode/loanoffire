import { useContext, useEffect, useState } from 'react';
import Onebulk from '../components/other components/OneBulk';
import { BorrowersContext } from '../contexts/BorrowersContext';


const AddBulkRepayments = () => {

    const { handleChukua, bulkRepayments } = useContext(BorrowersContext);


    var myList = [];
    const [ repays, setRepays ] = useState([]);


        for ( var i = 1; i <= 30; i++ ) {
            var opora = [ i, false ];
                myList.push(opora);
        } 
    

    // var repays = [];

   
    useEffect(() => {
        for(var a = 0; a <= myList.length; a++) {
            var obj = {
                index: a,
                amount: "",
                reme: "Cash",
                by: "Issa Kombo",
                collect: "",
                date: "",
                name: false,
                jina: "",
                first: ""
            }
            setRepays((repays) => {
                repays.push(obj);
                return repays;
            })
        }

        handleChukua(repays);

    }, []);

    const handleEach = (obj) => {
        repays.forEach((repay) => {
            if ( repay.index === obj.index ) {
                repay.amount = obj.amount;
                repay.date = obj.date;
            }
        })

    }

    const handleDrop = (obj) => {
        setRepays((repays) => {
            var newRepays = [...repays];
            newRepays.forEach((repay) => {
                if ( repay.index === obj.index ) {
                    console.log("siiapa jmn", repay.name);
                    repay.name = true;
                }

            })
            return newRepays;
        })

        console.log("mbona inaleta moja asee",obj.index);

    }

    const handleShow = () => {
        console.log("handleshow invoked");
    }


    // useEffect(() => {
    //     console.log("izi pa repays", repays);
    // }, [repays]);

    // console.log("myLIst", myList)


    const handleSubmit = (e) => {
        e.preventDefault();
        bulkRepayments();
    }


    return (
        <div className="add-bulk">
            <h1>Add Bulk Repayments</h1>
            <div className="bulk">
                <p className="click">You can use this page to add bulk repayments.
                 Please be carefully that you select the right loan. 
                 You can enter as many rows as you like
                 To make this page fullscreen, <span>Click here.</span></p>

                 <div className="data">
                    <div className='header'>
                        <h4>Row</h4>
                        <h4>Loan</h4>
                        <h4>Amount</h4>
                        <h4>Method</h4>
                        <h4>Collection Date</h4>
                        <h4>Collection By</h4>
                        <h4>Description (optional)</h4>
                        <h4>Accounting: Cash/Bank</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {myList.map((item, index) => {
                            return (
                                <Onebulk
                                    key={index}
                                    item={item}
                                    index={index}
                                    repays={repays}
                                    handleDrop={handleDrop}
                                />
                            )
                        })}
                        <button type='submit'>Submit All Repayments</button>
                    </form>
                 </div>
            </div>



        </div>
    )
}

export default AddBulkRepayments;