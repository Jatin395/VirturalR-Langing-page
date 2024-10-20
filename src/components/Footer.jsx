import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-dark text-white p-4 flex items-center justify-around flex-wrap h-96">

        <div className="flex flex-col gap-4">

          <div className="flex gap-2 mb-6">            
            <h1 className='text-4xl font-bold'>VirturalR</h1>
          </div>

          <h1>Copyright @ 2024 Nexcent itd.<br /> All rights reserved</h1>

          <div className="text-4xl mt-2">
          <i class="ri-facebook-line mr-1"></i>
          <i class="ri-instagram-line mr-3"></i>
          <i class="ri-twitter-line mr-3"></i>
          <i class="ri-whatsapp-line mr-1"></i>
          </div>

        </div>

        <div className="m-4 flex flex-col gap-4">
          <h1 className='text-xl'>Company</h1>
          <h2>About us</h2>
          <h2>Blog</h2>
          <h2>Contact us</h2>
          <h2>Pricing</h2>
        </div>

        <div className="m-4 flex flex-col gap-4">
          <h1 className='text-xl'>Support</h1>
          <h2>Help center</h2>
          <h2>Team of support</h2>
          <h2>legal</h2>
          <h2>Privacy policy</h2>

        </div>

        <div className="m-4 flex flex-col justify-start">
            <h1 className='text-xl mb-4'>Stay up date</h1>
            <div className="">
            <input type='text' className='h-12 rounded-md p-4 text-black' placeholder='Your email address'></input>
            <i class="ri-send-plane-fill text-2xl bg-white p-3 rounded-full text-black ml-4"></i>
            </div>
        </div>

      </div>
    </>
  )
}

export default Footer
