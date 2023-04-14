import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/61e79073-50cf-4f7b-9a23-73290e6f7dca/d0322828-6d63-4f5f-92fb-30f492e7cca4/IN-en-20230410-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form className='w-full flex flex-col py-4'>
                  <input className='p-3 my-2 bg-gray-500 rounded' type="email" placeholder='Email' autoComplete='email' />
                  <input className='p-3 my-2 bg-gray-500 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                </form>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
