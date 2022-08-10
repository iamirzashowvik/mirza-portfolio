import React from 'react'
import {
  FaGoogle,
  FaLinkedin,
  FaStackOverflow,
  FaYoutube,
} from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Bar from '../Components/Bar'
import { languages, tools } from '../data'
const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education & exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <div className="flex space-x-2 font-semibold">
              Self Taught Engineering BY <FaYoutube className="w-6 h-6" />
              <FaGoogle className="w-6 h-6" />{' '}
              <FaStackOverflow className="w-6 h-6" />
              <FaLinkedin className="w-6 h-6" /> (2020-Present)
            </div>
            <p className="my-3">
              I am currently learning System Design, Design Pattern, Software
              Architecture.
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
            <div className="flex space-x-2 font-semibold">
              <a href="https://munchies.com.bd" className="hover:text-green">
                Munchies.com.bd
              </a>
            </div>
            <p className="my-3"></p>
          </div>
        </div>
      </div>
      {/* laguage & tools */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div>
            {languages.map((language) => (
              <Bar value={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">others Technologies</h5>
          <div>
            {tools.map((language) => (
              <Bar value={language} key={language.name} />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Resume
