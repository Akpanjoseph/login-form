
import './App.css';
import bg from './img/bg.png'
import { FaExclamation } from 'react-icons/fa';

function App() {
  return (
    <div className="text-center flex justify-center items-center h-screen w-screen " id='container'>
      <div className='flex justify-center items-center h-screen w-screen space-x-10' id='main-container'>

        <div className='text-left w-[40%] font-bold text-white'>
          <h1 className='text-5xl w-[80%]'>Learn to code  by  watching others</h1>

          <div className='my-5'>

            <p>see how experienced developers solve problems in real-time.</p>
            <p>Watching scripted tutorials is great, but understanding how </p>
            <p>developers think is invaluable</p>
          </div>
        </div>

        <div className=' w-[40%] ' >

          <div className='py-4 text-white mb-5 rounded-md shadow-md' style={{ backgroundColor: 'hsl(248, 32%, 49%)' }}>
            <p className='font-bold'>Try it free 7 days <span className='font-normal'>then $20/mo. thereafter</span></p>
          </div>
          <form className='bg-white p-4 shadow-md rounded-md '>

            <div className=' w-[100%] my-5 '>
              <div className='flex border-2 rounded-md'>
                <input type="text" className='w-[100%] h-12 px-4 outline-none' required placeholder='First Name' />
                <FaExclamation color='red' className='mt-5' />
              </div>
              <p className='text-right text-sm italic'>First Name cannot be blank </p>
            </div>
          
             
            

            <div className='border-2 rounded-md w-[100%]  my-5 '>
              <input type="text" className='w-[100%] h-12 px-4' required placeholder='Last Name' />
            </div>

            <div className='border-2 rounded-md w-[100%]  my-5 '>
              <input type="email" className='w-[100%] h-12 px-4' required placeholder='Email Address' />
            </div>

            <div className='border-2 rounded-md w-[100%]  my-5 '>
              <input type="password" className='w-[100%] h-12 px-4' required placeholder='Password' />
            </div>

            <div>
              <button className='uppercase text-white w-full py-4 ' style={{ backgroundColor: 'hsl(154, 59%, 51%)' }}>claim your free trial</button>

              <p className='text-sm my-2'>By clicking the button, you are agreeing o our <span style={{ color: 'hsl(0, 100%, 74%)' }}>Terms and services</span></p>
            </div>

          </form>
        </div>


      </div>
    </div>
  );
}

export default App;
