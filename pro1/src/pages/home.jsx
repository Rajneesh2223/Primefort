import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import './styles.css';

function Home() {
  return (
    <section>
      <div className='bg-blue-400 h-screen flex flex-col items-center justify-center p-auto'>
        <div className='w-5/6 h-auto p-8 flex flex-col md:flex-row bg-first'>
          <div className='w-full bg-first py-4 px-4'>
            <h1 className='text-white text-lg md:text-2xl'>GET IN TOUCH</h1>
            <h2 className='text-white mt-2 md:mt-4'>Reach out to us. We can make something awesome together</h2>
            <div className='mt-4 md:mt-8'>
              <div className='flex items-center'>
                <MdOutlineMailOutline className="text-blue-500 text-2xl" />
                <span className='text-2 ml-2 md:ml-4 align-center text-white'>info@primefort.net</span>
              </div>
              <div className='flex items-center mt-2 md:mt-4'>
                <HiOutlineLocationMarker className="text-blue-500 text-2xl" />
                <span className='text-2 ml-2 md:ml-4 text-white mt-1 md:mt-5'>
                  Raheja Towers, Unit, 812, <br />
                  Alpha wing, No, 177 Anna Salai,<br /> Chennai - 600002
                </span>
              </div>
            </div>
          </div>

          <div className='w-full outline outline-offset-8 outline-1 outline-blue-400 bg-back'>
            <form action='' method='get' className='form-example px-4 py-4 md:px-8 md:py-8'>
              <div className='form-example py-2 md:py-4'>
                <label for='name'>Enter your name: </label>
                <br />
                <input className='w-full bg-back p-2 md:p-3 border-b-2 md:border-b-4 border-indigo-600' type='text' name='name' id='name' required />
              </div>
              <div className='form-example py-2 md:py-4'>
                <label for='email'>Enter your email: </label>
                <br />
                <input className='w-full bg-back p-2 md:p-3 border-b-2 md:border-b-4 border-indigo-600' type='email' name='email' id='email' required />
              </div>
              <div className='form-example py-2 md:py-4'>
                <label for='subject'>Subject </label>
                <br />
                <input className='w-full bg-back p-2 md:p-3 border-b-2 md:border-b-4 border-indigo-600' type='text' name='subject' id='subject' required />
              </div>
              <div className='form-example py-2 md:py-4'>
                <label for='message'>MESSAGE </label>
                <br />
                <textarea className='w-full h-20 md:h-36 bg-back p-2 md:p-3 border-b-2 md:border-b-4 border-indigo-600' name='message' id='message' required />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
