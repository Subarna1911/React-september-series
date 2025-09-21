import React from 'react'
import { useState } from 'react'

const DrakMode = () => {

    const[isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode (){
        setIsDarkMode(!isDarkMode);
    }

  return (
    <div className={`flex justify-center items-center min-h-screen transition-colors duration-300 
    ${isDarkMode?'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className='w-full max-w-screen-xl p-6'>
            <h1 className="text-center text-3xl font-bold py-4">Dark Mode Toggle</h1>
             <div className='flex justify-center items-center space-x-4'>
               <span className='text-lg'>Light</span>
               <label className='relative inline-block w-16 h-8  cursor-pointer'>
                <input type="checkbox" checked = {isDarkMode} onChange={toggleDarkMode}/>
                <span className={`absolute inset-0 rounded-full transition ${isDarkMode?'bg-blue-500' : 'bg-gray-300'}`}></span>
                <span className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full  transition- transform duration-300  ${isDarkMode ? 'translate-x-8' : 'translate-x-0'}`}></span>
               </label>
               <span className='text-lg'>Dark</span>

              
             </div> 

              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur unde, veniam beatae sapiente est blanditiis maiores delectus eveniet nam totam repellendus corporis quos. Asperiores exercitationem tenetur officiis vitae laboriosam veniam explicabo assumenda saepe, perspiciatis perferendis labore, at nam repellat, autem pariatur voluptatem.</p>
               </div>

        </div>

    </div>
   
  )
}

export default DrakMode

