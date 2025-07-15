import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { useClerk } from '@clerk/clerk-react'

const CallToAction = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  const { openSignIn } = useClerk();

  const handleGetStarted = () => {
    if (!userData) {
      openSignIn();
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    navigate('/course-list');
  };

  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='md:text-4xl text-xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600' onClick={handleGetStarted}>Get started</button>
        <button className='flex items-center gap-2' onClick={handleLearnMore}>
          Learn more
          <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  )
}

export default CallToAction