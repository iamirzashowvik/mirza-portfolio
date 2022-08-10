import React from 'react'
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
      <img
        src="https://i.pinimg.com/564x/ef/74/d6/ef74d669f28a82e09d6bee61d1f03aef.jpg"
        alt="user avater"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kausan">
        <span className="text-green">Mirza</span> Showvik
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300">
        Full Stack Developer
      </p>
      <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300">
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons*/}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="https://www.facebook.com/iamirzashowvik/">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/mirzashowvik/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/iamirzashowvik">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address*/}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-300"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Dhaka, Bangladesh</span>
        </div>
        <p className="my-2 ">showvikmirza@gmail.com</p>
        <p className="my-2 ">+8801710427095</p>
      </div>
      {/* Email button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto:showvikmirza@gmail.com')}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        onClick={changeTheme}
      >
        Toogle Theme
      </button>
    </div>
  )
}

export default Sidebar
