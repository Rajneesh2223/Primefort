import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'

function footer() {
  return (
    <section>
    <div className='h-5/6 bg-footer h-[500px]  flex space-x-28 space-y-40'>
        
        <div className='h-[200px]  w-[288px]  text-white mt-40 ml-20'>
        <a href="/">Your Logo</a>
        <br/>
        <span className='text-[px] align-center'>Primefort is a global provider of IT security solutions that solve real business issues. Our dedicated team of security engineers offers solutions to customers throughout the world for securing innovations</span>
        </div>
         
        <div className='h-48 w-48 hidden md:block  overflow-hidden text-white'>  
        <h1 className=' text-foohead text-[20px]'>Services</h1>
        <ul>
            <li>
                <span> Web Application Penetration Testing</span>
            </li>
            <li>
                <span> Mobile Application Penetration Testing </span>
            </li>
            <li>
                <span> Network Penetration Testing</span>
            </li>
            <li>
                <span>CLoud Security</span>
            </li>
            <li>
                <span>Compliance</span>
            </li>
            <li>
                <span>SOC</span>
            </li>
        </ul>

        </div>
        <div className='h-48 w-48 hidden md:block  overflow-hidden text-white'>
       
        <h1 className=' text-foohead text-[20px]    '>About US</h1>
        <ul>
            <li>
                <span>Our Story</span>
            </li>
            <li>
                <span> Our Journey </span>
            </li>
            <li>
                <span>Leadership Team</span>
            </li>
            <li>
                <span>Advisors</span>
            </li>
            <li>
                <span>Careers </span>
            </li>
            <li>
                <span>Awards</span>
            </li>
        </ul>
        </div>
        <div className='h-48 lg:48   w-48 md:w-48 text-white '>
        <a
            href="/contact"
            className=" text-foohead bg-footer mr-[50px] text-[20px] hover:text-gray-300 border-solid border-2 border-l-4 border-indigo-600 px-4 py-1"
          >
            Contact Us
          </a>
          <div className=' md:w-48 md:flex flex space-x-8 py-4 flex-start pt-8 '>
            <FaFacebookF className='text-foohead text-2xl hover:text-blue-800'/>
            <GrTwitter  className='text-foohead text-2xl hover:text-blue-800'/>
            <BsInstagram  className='text-foohead text-2xl hover:text-blue-800' />
          </div>
          <div>
            <h2 className='text-foohead py-1'>HEADQUARTERS</h2>
            <p>Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai, Chennai - 600002</p>
         </div>
         <div>
            <h2 className='text-foohead py-1'> Email</h2>
            <p>info@primefort.net</p>
         </div>


        </div>
       
        
        
    </div>
    </section>
  )
}

export default footer