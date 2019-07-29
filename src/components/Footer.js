import React from 'react'
import '../footer.css'

const Footer = () => {
    return(
        <div id="section-4">

            <div className='footer'>
            <div>
                    <p>© coders.group</p>
                    
                </div>
                <div>
                    <p>follow us on:</p>
                    <ul className='footerNav'>
                        <li><a href='#'>a</a></li>
                        <li><a href='#'>a</a></li>
                        <li><a href='#'>a</a></li>
                    </ul>
                </div>
                <div>
                    <p>contact us</p>
                        <p>phone: +4473618128372</p>
                        <p> email: office@coders.group</p>
                </div>
            </div>
        </div>
    )
}

export default Footer