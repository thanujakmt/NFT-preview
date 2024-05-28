
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div className=' bg-Very_dark_blue1 h-screen w-full flex justify-center items-center'>
        <div className=' bg-Very_dark_blue2 h-[650px] w-[400px] rounded-[20px] shadow-2xl'>
          <div className=' flex items-center justify-center py-5 cursor-pointer relative' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
            <div className=' hover:bg-Cyan h-[350px] w-[350px] rounded-[10px] absolute opacity-40 flex justify-center items-center'></div>
            {isHovered && (<img className="absolute" src="images/icon-view.svg" alt="View Icon" />)}
            <img src="images/image-equilibrium.jpg" className=' h-[350px] w-[350px] rounded-[10px]' alt="" />
          </div>
          <div className=' p-6'>
            <div className=' flex flex-col gap-4'>
              <h1 className=' text-White font-semibold text-2xl cursor-pointer hover:text-Cyan'>Equilibrium #3429</h1>
              <p className=' text-Soft_blue text-[1.2em]'>Our Equilibrium collection promotes balance and calm.</p>
              <div className=' flex pb-4 justify-between'>
                <div className=' flex justify-center items-center gap-2'>
                  <img src="images/icon-ethereum.svg" alt="" />
                  <div className=' flex-1 text-Cyan'>0.041 ETH</div>
                </div>
                <div className=' flex justify-center items-center gap-2'>
                  <img src="images/icon-clock.svg" alt="" />
                  <div className=' text-Soft_blue'>3 days left</div>
                </div>
              </div>
            </div>
            <hr />
            <div className=' flex py-4'>
              <div className=''>
                <img src="/images/image-avatar.png" className=' h-10 border border-white rounded-[50%]' alt="" />
              </div>
              <div className=' flex items-center justify-center px-5'>
                <p> <span className=' text-Soft_blue'>Creation of</span> <span className=' text-white cursor-pointer hover:text-Cyan'>Jules Wyvern</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App