import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faDollar, faFileAlt, faPeopleCarryBox, faPeopleGroup, faPeopleLine, faPlus, faScaleBalanced, faUser, faUserPlus, faUsers   } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <section className="home-page">
            <div className="white-bg">

                <div className="single">
                    <FontAwesomeIcon icon={faPeopleLine} className='fill'/>
                    <p>Borrowers</p>
                    <div className='down'>
                        <h5>All </h5>
                        <h5>Borrowers in Total</h5>
                    </div>
                    <div className='down'>
                        <h4>104</h4>
                        <h4>Borrowers</h4>
                    </div>
                </div>

                
                <div className="single">
                    <FontAwesomeIcon icon={faPeopleCarryBox} className='fill2'/>
                    <p>Principal</p>
                    <div className='down'>
                        <h5>Principal</h5>
                        <h5>In Total</h5>
                    </div>
                    <div className='down'>
                        <h4>22,200,000</h4>
                        <h4>Tsh /=</h4>
                    </div>
                </div>


                <div className="single">
                    <FontAwesomeIcon icon={faCoins} className='fill1'/>
                    <p>Paid</p>
                    <div className='down'>
                        <h5>All</h5>
                        <h5>Payments Total</h5>
                    </div>
                    <div className='down'>
                        <h4>7,120,000</h4>
                        <h4>Tsh/=</h4>
                    </div>
                </div>


                
                <div className="single">
                    <FontAwesomeIcon icon={faScaleBalanced} className='fill23'/>
                    <p>Total Outstanding</p>
                    <div className='down'>
                        <h5>Open</h5>
                        <h5>Loan</h5>
                    </div>
                    <div className='down'>
                        <h4 className='scale'>21,200,000</h4>
                        <h4 className='scale'>Tsh /=</h4>
                    </div>
                </div>

                
                <div className="single">
                    <FontAwesomeIcon icon={faScaleBalanced} className='fill23'/>
                    <p>Principal Outstanding</p>
                    <div className='down'>
                        <h5>Open</h5>
                        <h5>Loan</h5>
                    </div>
                    <div className='down'>
                        <h4 className='scale'>11,244,000</h4>
                        <h4 className='scale'>Tsh /=</h4>
                    </div>
                </div>

                
                <div className="single">
                    <FontAwesomeIcon icon={faScaleBalanced} className='fill23'/>
                    <p>Due Outstanding</p>
                    <div className='down'>
                        <h5>Open</h5>
                        <h5>Loan</h5>
                    </div>
                    <div className='down'>
                        <h4 className='scale'>17,200,000</h4>
                        <h4 className='scale'>Tsh /=</h4>
                    </div>
                </div>

                
                <div className="single">
                    <FontAwesomeIcon icon={faScaleBalanced} className='fill23'/>
                    <p>Fees Outstanding</p>
                    <div className='down'>
                        <h5>Open</h5>
                        <h5>Loan</h5>
                    </div>
                    <div className='down'>
                        <h4 className='scale'>3,700,000</h4>
                        <h4 className='scale'>Tsh /=</h4>
                    </div>
                </div>

                
                <div className="single">
                    <FontAwesomeIcon icon={faScaleBalanced} className='fill23'/>
                    <p>Penalty Outstanding</p>
                    <div className='down'>
                        <h5>Open</h5>
                        <h5>Loan</h5>
                    </div>
                    <div className='down'>
                        <h4 className='scale'>1,870,000</h4>
                        <h4 className='scale'>Tsh /=</h4>
                    </div>
                </div>

                

                <div className="single">
                    <h1 className='pee'>P</h1>
                    {/* <FontAwesomeIcon icon={faUser} className='fill1'/> */}
                    <p>Processing Loan</p>
                    <div className='down'>
                        <h5>Total</h5>
                        <h5>Released</h5>
                    </div>
                    <div className='down green'>
                        <h4>74</h4>
                        <h4>This Month</h4>
                    </div>
                </div>

                
                <div className="single">
                    <h1 className='pee'>O</h1>
                    {/* <FontAwesomeIcon icon={faUser} className='fill1'/> */}
                    <p>Processing Loan</p>
                    <div className='down'>
                        <h5>Total</h5>
                        <h5>Released</h5>
                    </div>
                    <div className='down green'>
                        <h4>74</h4>
                        <h4>This Month</h4>
                    </div>
                </div>



                <div className="single">
                    <h1 className='pee'>F</h1>
                    {/* <FontAwesomeIcon icon={faUser} className='fill1'/> */}
                    <p>Processing Loan</p>
                    <div className='down'>
                        <h5>Total</h5>
                        <h5>Released</h5>
                    </div>
                    <div className='down green'>
                        <h4>74</h4>
                        <h4>This Month</h4>
                    </div>
                </div>


                <div className="single">
                    <h1 className='pee'>R</h1>
                    {/* <FontAwesomeIcon icon={faUser} className='fill1'/> */}
                    <p>Processing Loan</p>
                    <div className='down'>
                        <h5>Total</h5>
                        <h5>Released</h5>
                    </div>
                    <div className='down green'>
                        <h4>74</h4>
                        <h4>This Month</h4>
                    </div>
                </div>


                <div className="single">
                    <h1 className='pee'>DF</h1>
                    {/* <FontAwesomeIcon icon={faUser} className='fill1'/> */}
                    <p>Processing Loan</p>
                    <div className='down'>
                        <h5>Total</h5>
                        <h5>Released</h5>
                    </div>
                    <div className='down green'>
                        <h4>74</h4>
                        <h4>This Month</h4>
                    </div>
                </div>



                <div className="single">
                    <h1 className='pee'>Dn</h1>
                    {/* <FontAwesomeIcon icon={faUser} className='fill1'/> */}
                    <p>Processing Loan</p>
                    <div className='down'>
                        <h5>Total</h5>
                        <h5>Released</h5>
                    </div>
                    <div className='down green'>
                        <h4>74</h4>
                        <h4>This Month</h4>
                    </div>
                </div>



                <div className="single">
                    <h1 className='pee'>N</h1>
                    {/* <FontAwesomeIcon icon={faUser} className='fill1'/> */}
                    <p>Processing Loan</p>
                    <div className='down'>
                        <h5>Total</h5>
                        <h5>Released</h5>
                    </div>
                    <div className='down green'>
                        <h4>74</h4>
                        <h4>This Month</h4>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Home;