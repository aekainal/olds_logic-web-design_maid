import React from 'react'
import user_img from './../assets/img/user.png'

export default function Contact() {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-end'>
            <h2 className='title'>Contact</h2>
            <p>We speak the following languages: <div className='text-violet-700'>French, English</div>Please contact us in these languages.</p>
            <div className='flex flex-col mx-auto border p-10 mt-10 rounded-2xl shadow-xl'>
              <div className='flex flex-col lg:flex-row lg:gap-20 mb-10'>
                <div className='flex flex-col'>
                  <h2 className='text-xl mb-2'>Firstname:</h2>
                  <div className='flex flex-row items-center'>
                    <div className='border-y border-l p-3 rounded-l-xl'><img alt='' className='w-4' src={user_img} /></div>
                    <input type='text' className='border p-2 rounded-r-xl' placeHolder='Firstname ...' />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <h2 className='text-xl mb-2 mt-2 lg:mt-0'>Lastname:</h2>
                  <div className='flex flex-row items-center'>
                    <div className='border-y border-l p-3 rounded-l-xl'><img alt='' className='w-4' src={user_img} /></div>
                    <input type='text' className='border p-2 rounded-r-xl' placeHolder='Lastname ...' />
                  </div>
                </div>
              </div>
              <div className='mb-10'>
                <h2 className='text-xl mb-2'>E-mail:</h2>
                <div className='flex flex-row items-center'>
                  <div className='border-y border-l py-2 px-3 rounded-l-xl'>@</div>
                <input type='email' className='border p-2 lg:w-[400px] rounded-r-xl' placeHolder='Email ...' />
                </div>
              </div>
              <div>
                <h2 className='text-xl mb-2'>Message:</h2>
                <textarea className='border w-[65vw] lg:w-[700px]' />
              </div>
              <div className='w-full flex flex-row justify-end mt-10'><button className='px-3 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-full'>CONTACT</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
