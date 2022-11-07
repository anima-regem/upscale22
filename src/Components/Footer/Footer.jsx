import '../Footer/Footer.css'
import React, {useState} from 'react'

import instagramLogo from '../../assets/icons/instagram.svg'
import linkedinLogo from '../../assets/icons/linkedin.svg'
import logoCopy from '../../assets/icons/logo_u.svg'

const Footer = () => {
    const [copySuccess, setCopySuccess] = useState('')

    const copy = async text => {
        try {
            await navigator.clipboard.writeText(text)
            setCopySuccess('Copied!')
        } catch (e) {
            setCopySuccess('Failed')
        }
    }


    return (
        <>
            <footer className='section footer__container'>
                <section className='footer__useful-links'>
                    <h4>USEFUL LINKS</h4>
                    <ul className='footer__list_container'>
                        <li className='footer__useful__link'>
                            <a className='footer__link'
                               href="https://www.instagram.com/ieeesbgecpkd/?igshid=YmMyMTA2M2Y%3D">
                                @ieeesbgecpkd
                            </a>
                        </li>
                        <li className='footer__useful__link'>
                            <a className='footer__link' href="https://linkedin.com/company/ieeesbgecpkd">
                                ieeesbgecpkd
                            </a>
                        </li>
                        <li className='footer__useful__link'>
                            <a className='footer__link' href="https://ieee.org">IEEE</a>
                        </li>
                    </ul>
                </section>
                <section className='section footer__contact'>
                    <h4>CONTACT US</h4>
                    <ul className='footer__link__container'>
                        <li>
                            <a className='footer__link' href="tel:+919495951143">Sanju: +91 9495951143</a>
                        </li>
                        <li>
                            <a className='footer__link' href="tel:+919895645290">Thamna: +91 9895645290</a>
                        </li>
                        <li>
                            <a className='footer__link' href="mailto:ieee@gecskp.ac.in">Email: ieee@gecskp.ac.in</a>
                        </li>
                    </ul>
                </section>
                <section className='section footer__about'>
                    <h4>ABOUT IEEE SB GEC PKD</h4>
                    <p>
                        The IEEE Student Branch of Government Engineering College Palakkad, We work for providing an
                        ideal platform for young minds to nourish their technical skills as an engineer by providing a
                        technical home.The SB has has actively working IAS , ComSoc and Computer Society and also WiE
                        affinity group
                    </p>
                </section>
                <section className='section footer__end'>
                    <p>
                        Copyright &copy; 2022 IEEE SB GECPKD. All Rights Reserved
                    </p>
                    <div className='footer__logo'>
                        <a className='clip' onClick={() => copy('page_link_here')}>
                            <img src={logoCopy} alt="logo_u"/>
                        </a>
                        <a href="https://www.instagram.com/ieeesbgecpkd/" target='_blank'>
                            <img src={instagramLogo} alt="instagram_logo"/>
                        </a>
                        <a href="https://linkedin.com/company/ieeesbgecpkd" target='_blank'>
                            <img src={linkedinLogo} alt="linkedin_logo"/>
                        </a>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer