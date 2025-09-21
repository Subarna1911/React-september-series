import React from 'react'
import { useState, useEffect } from 'react'
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
const ToggleMode = () => {

    const[isDarkMode, setIsDarkMode] = useState(
        ()=> localStorage.getItem("theme") === "dark"
    );

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

    }, [isDarkMode]);

    const toggleMode = ()=> {
        setIsDarkMode(!isDarkMode);
    }

  return (
    <div className={`flex justify-center items-center min-h-screen transition duration-500 ease-in-out ${isDarkMode?'dark:bg-gray-900 dark:text-white' : 'bg-gray-100 text-black'}`}>
        <div className='w-full min-w-screen-xl px-6'>
            <button className=" cursor-pointer p-3 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-800 transition" onClick={toggleMode}>{ isDarkMode ? <Moon/> : <Sun/> }</button>

        </div>

      
    </div>
  );
}

export default ToggleMode
