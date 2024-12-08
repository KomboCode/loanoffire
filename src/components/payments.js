import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
// import { faEdit, f } from '@fortawesome/free-regular-svg-icons';


const Payments = ({ item}) => {

    const options = { maximumFractionDigits: 0 };


    return (
        <tbody> 
        {
            item.map((pay, index) => {
                const { amount, by, collect, first, last, unique } = pay;
                return (
                    <tr key={index}>
                    <td className='uyaapa'>
                                    <div className='photo-bg'>
                                        <img src='./images/8.png' alt='profile pic'/>
                                    </div>
                                     {first} {last}
                                    </td>
                                    <td>{collect}</td>
                                    <td>{unique}</td>
                                    <td>{by}</td>
                                    <td>cash</td>
                                    <td>{Intl.NumberFormat("en-US",options).format(amount)}.00</td>
                                    <td>
                                        <h4 className='inact'>Repayment</h4>
                                    </td>
                                    <td className='icons'>
                                        <FontAwesomeIcon icon={faPen} className='icon'/>
                                    </td>
                    </tr>
                )
              
            })
        }
        </tbody>
    )
}

export default Payments;