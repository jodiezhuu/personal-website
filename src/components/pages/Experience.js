import React from 'react';
import '../../App.css';
import './Experience.css'
import Footer from '../Footer';

export default function Experience() {
    return(
        <>
        <h1 className='experience'>EXPERIENCE</h1>
        <h1 className='header3'>INFORMAL RESUME</h1>
        <h2 className='header4'>Here's a list of my previous summer internships, programs, etc.</h2>
        
    <div className="format">
        <div className='column1'>
            <h3 className='lawfirm'>JonesCo. IP Law Firm</h3>
            <h4 className='jobtitle'>Office Clerk</h4>
            <h5 className='datetime'>Toronto, ON</h5>
            <h5 className='datetime'>July 2019-September 2019</h5>
                <li className='lawfirmdesc'>Inputted contact information of international lawyers using Microsoft OneNote to increase networking efficiency in the firm;</li>
                <li className='lawfirmdesc'>Used business cards to build a personal profile of 500+ lawyers into Microsoft Sharepoint and Outlook;</li>
                <li className='lawfirmdesc'>Organized 900+ printed emails involving patents, licensing, trademark law, franchising, and trade secret projects into alphabetical and chronological order.</li>
        </div>
        <div className='column2'>
            <h3 className='lawfirm'>Yale Young Global Scholars</h3>
            <h4 className='jobtitle'>Student</h4>
            <h5 className='datetime'>New Haven, CT</h5>
            <h5 className='datetime'>July 2019</h5>
                <li className='yygsdesc'>Attended a two-week Politics, Law, and Economics enrichment program for outstanding high school students from over 130 countries;</li>
                <li className='yygsdesc'>Created and presented a capstone project on Abortion Laws in the 21st Century for professors at Yale University;</li>
                <li className='yygsdesc'>Received the Yale Young Global Scholars Certificate of Completion.</li>
        </div>
    </div>

    <Footer />
        </>);
}
