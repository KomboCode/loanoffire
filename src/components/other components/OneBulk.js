import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { BorrowersContext } from '../../contexts/BorrowersContext';


const Onebulk = ({ item, index }) => {

    const { repays, handleDrop, handleRudisha, handleEach  } = useContext(BorrowersContext);

    // console.log("from the context", repays);

    const [ suggest, setSuggest ] = useState([]);
    const [ onesha, setOnesha ] = useState("");


    // console.log("item item", repays);

    
    useEffect(() => {
        const localBorrowers = localStorage.getItem("borrowers");
        if ( localBorrowers == null ) {
            console.log("There are no local borrowers");
        } else {
            setSuggest(JSON.parse(localBorrowers));
        }

            
        // repays.forEach((repa) => {
        //     setOnesha(repa.name);
        // })


    }, []);

        
    useEffect(() => {
          
        repays.forEach((repa) => {
            if ( repa.index === index)
            setOnesha(repa.name);
        })


    }, [repays]);





    const [ amount, setAmount ] = useState("");
    const [ method, setMethod ] = useState("");
    const [ date, setDate ] = useState("");
    const [ by, setBy ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ cash, setCash ] = useState("");
    const [ jina, setJina ] = useState("");

    const [ name, setName ] = useState("Choose Borrower or Search by name");
    const [ show, setShow ] = useState(false);


    // console.log("sele mtihani mkubwa", suggest);
    var obj = {
        amount: amount,
        date: date,
        collect: date,
        index: index,
        jina: jina,
        first: jina
    }

    // useEffect(() => {
    //     handlePush(obj);
    // }, [obj]);

    useEffect(() => {
        handleEach(obj);
    }, [amount]);

    
    const handleSuggest = (value) => {
        console.log("Handle suggestion", value);
        setSuggest((suggest) => {
            const pata = suggest.filter((item) => item.first.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
            return pata;
        })
    }

    const handleAmount = (value) => {
        setAmount(value);
        handleEach(obj);
        console.log("handleAmount invoked");
        // handlePush(obj);
    } 

    const handleDate = (value) => {
        setDate(value);
        handleEach(obj);
        console.log("handleDate invoked");
        // handlePush(obj);
    }

    
    const handleName = (one, two) => {
        setJina(one);
        handleEach(obj);
        setName((name) => {
            const newName = one + " " + two;
            return newName;
        })
        handleRudisha();
    }

    // const handleDisplay = () => {}




    return (
        <div className='summer'>
               
               <div 
                   className='borrowers'
                   style={ onesha  ? {
                    display: "block"
                   } : null}
                   >
                
                <input  
                        placeholder=''
                        onChange={(e) => handleSuggest(e.target.value)}
                        />
                   { suggest.map((item) => {
                    const { first, last, id  } = item;
                    return (
                        <div key={id}>
                            <h4  
                               className='suggest'
                               onClick={() =>handleName(first, last) }
                               >{first} {last}</h4>
                        </div>
                    )
                   }) }
                </div>


                <div className="choose" key={index}>
                    <h4 className='count'>{item}</h4>
                    <div className="or" onClick={() => handleDrop(obj)}>
                        <h4>{name}</h4>
                        <FontAwesomeIcon icon={faSortDown} className='down' />
                    </div>
                    
                    
                    <input 
                    className='amount' 
                    required=""
                    placeholder="Amount"
                    onChange={(e) => handleAmount(e.target.value)}
                    />
                    <select 
                    className='cash'
                    onChange={(e) => setCash(e.target.value)}
                    >
                        <option>Cash</option>
                        <option>ATM</option>
                        <option>Cheque</option>
                        <option>Paypal</option>
                        <option>Online Transfer</option>
                    </select>
                    <input 
                    className='date'
                    required="" 
                    type="date"
                    onChange={(e) => handleDate(e.target.value)}
                    />
                    <select 
                    className='name'
                    onChange={(e) => setBy(e.target.value)}
                    >
                        <option>Issa Kombo  </option>
                    </select>
                    <input 
                        className='desc' 
                        placeholder="Description"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <select 
                        onChange={(e) => setCash(e.target.value)}
                    >
                        <option>Cash</option>
                    </select>
            </div>
        
        </div>
          
    )
}

export default Onebulk;
