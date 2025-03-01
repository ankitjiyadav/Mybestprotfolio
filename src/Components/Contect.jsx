import React from 'react'

function Contect() {
  return (
    <>
    <div className='max-w-screen-2lx container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold'> Contect Me </h1>
        <br />
        <span>Pleasen fill out the form below to contect me </span>

        <div className='flex flex-col items-center justify-center mt-5'>
            <form action="" className='bg-slate-200 w-80 px-8 py-6 rounded-xl'>
                <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                <div>
                    <label className="block text-gray-700">Full Name
                        
                    </label>
                    <input className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nane"
                    type="text" 
                    placeholder='Enter Your fullname'
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Enter Your Emaill
                        
                    </label>
                    <input className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nane"
                    type="text" 
                    placeholder='Enter Your Email'
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Message
                        
                    </label>
                    <textarea className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nane"
                    type="text" 
                    placeholder='Type your message here'
                    />
                </div>
                <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contect