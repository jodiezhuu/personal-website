import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <h1 className='footer-subscription-heading'>
                    CONTACT INFO
                </h1>
                <div className='text'>
                <p className='contact'>
                    <a className='contact' href="https://www.linkedin.com/in/jodie-zhu-8a1827210/" target='_blank'>
                    <i class="fab fa-linkedin"></i>:jodie-zhu | </a>
                    <a className='contact' href='https://github.com/jodiezhuu' target='_blank'>
                    <i class="fab fa-github"></i>:jodiezhuu | </a>
                    <i class="fas fa-inbox"></i>
                    :jodiezhu12@gmail.com
                </p>
                </div>
            </section>
        </div>
    )
}

export default Footer
