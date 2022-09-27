import React, { useState } from 'react';
import './App.css';
import bg from './img/bg.png'
import { FaExclamation } from 'react-icons/fa';


// email placeholder
let emailValue = 'Email Address'

function App() {

  // text input states
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // error message states
  const [errorName, setErrorName] = useState('')
  const [errorLastName, setErrorLastName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')


  // submit handler function
  const handleSubmit = (event) => {
    event.preventDefault()

    // checking if firstname is empty 
    if (name.trim().length === 0) {
      // displaying warning message
      setErrorName('First name cannot be empty')
      // remove warning after 5sec
      setInterval(() => {
        setErrorName('')
      }, 5000)
    }

    // checking if lastname is empty
    if (lastname.trim().length === 0) {
      // displaying warning message
      setErrorLastName('last name cannot be empty')
      // remove warning after 5sec
      setInterval(() => {
        setErrorLastName('')
      }, 5000)
    }

    // // checking if email is empty
    if (email.trim().length === 0) {
      // displaying warning message
      setErrorEmail('looks like this not an email')
      emailValue = "email@example/com"
      // remove warning after 5sec
      setInterval(() => {
        setErrorEmail('')
        emailValue = 'Email Address'
      }, 5000)
    }

    // checking if password is empty
    if (password.trim().length === 0) {
      // displaying warning message
      setErrorPassword('password cannot be empty')
      // remove warning after 5sec
      setInterval(() => {
        setErrorPassword('')
      }, 5000)
    }



  }


  return (
    // container
    <div className="text-center flex justify-center items-center md:h-screen md:w-screen " id='container'>

      {/* main body container */}
      <div className='flex flex-col justify-center items-center py-[70px]  px-4 space-y-5 md:px-0 md:mt-0 md:h-screen md:w-screen md:space-x-10 md:flex-row ' id='main-container'>

        {/* header text container */}
        <div className='text-center w-full font-bold text-white md:text-left md:w-[40%] '>
          <div className='w-[100%] flex items-center justify-center md:block'>
            {/* title */}
            <h1 className='text-3xl w-[80%] md:text-5xl md:w-[80%] '>Learn to code  by  watching others</h1>
          </div>
          {/* text body */}
          <div className='my-5  '>
            <p>see how experienced developers solve problems in real-time.</p>
            <p>Watching scripted tutorials is great, but understanding how </p>
            <p>developers think is invaluable</p>
          </div>
        </div>

        {/* form container */}
        <div className='w-[100%] md:w-[40%] ' >

          {/* service price */}
          <div className='py-4 text-white mb-5 rounded-md shadow-md' style={{ backgroundColor: 'hsl(248, 32%, 49%)' }}>
            <p className='font-bold'>Try it free 7 days <span className='font-normal'>then $20/mo. thereafter</span></p>
          </div>


          {/* form */}
          <form className='bg-white md:p-4 shadow-md rounded-md p-4' onSubmit={handleSubmit}>

            {/* firstname */}
            <div className=' w-[100%] my-5 '>
              {/* display style base on form state */}
              <div className={errorName.length > 0 ? 'flex border-2 rounded-md border-red-600' : 'flex border-2 rounded-md'}>
                {/* input tag */}
                <input type="text" className='w-[100%] h-12 px-4 outline-none' placeholder='First Name' onChange={(text) => setName(text.target.value)} />
                {/* display error icon base on form state */}
                {
                  errorName.length > 0 ? (<FaExclamation color='red' className='mt-5' />) : <></>
                }
              </div>
              {/* display error message */}
              <p className='text-right text-sm italic capitalize text-red-500 pt-2'>{errorName}</p>
            </div>




            <div className=' w-[100%] my-5 '>
              <div className={errorLastName.length > 0 ? 'flex border-2 rounded-md border-red-600' : 'flex border-2 rounded-md'}>
                <input type="text" className='w-[100%] h-12 px-4' placeholder='Last Name' onChange={(text) => setLastName(text.target.value)} />
                {
                  errorLastName.length > 0 ? (<FaExclamation color='red' className='mt-5' />) : <></>
                }
              </div>
              <p className='text-right text-sm italic capitalize text-red-500 pt-2'>{errorLastName}</p>
            </div>



            <div className=' w-[100%] my-5 '>
              <div className={errorEmail.length > 0 ? 'flex border-2 rounded-md border-red-600' : 'flex border-2 rounded-md'}>
                <input type="email" className='w-[100%] h-12 px-4' placeholder={emailValue} onChange={(text) => setEmail(text.target.value)} />
                {
                  errorEmail.length > 0 ? (<FaExclamation color='red' className='mt-5' />) : <></>
                }
              </div>
              <p className='text-right text-sm italic capitalize text-red-500 pt-2'>{errorEmail}</p>
            </div>




            <div className=' w-[100%] my-5 '>
              <div className={errorPassword.length > 0 ? 'flex border-2 rounded-md border-red-600' : 'flex border-2 rounded-md'}>
                <input type="password" className='w-[100%] h-12 px-4' placeholder='Password' onChange={(text) => setPassword(text.target.value)} />
                {
                  errorPassword.length > 0 ? (<FaExclamation color='red' className='mt-5' />) : <></>
                }
              </div>
              <p className='text-right text-sm italic capitalize text-red-500 pt-2'>{errorPassword}</p>
            </div>



            <div>
              <button type='submit' className='uppercase text-white w-full py-4 ' style={{ backgroundColor: 'hsl(154, 59%, 51%)' }}>claim your free trial</button>

              <p className='text-sm my-2'>By clicking the button, you are agreeing o our <span style={{ color: 'hsl(0, 100%, 74%)' }}>Terms and services</span></p>
            </div>

          </form>
        </div>


      </div>
    </div>
  );
}

export default App;
