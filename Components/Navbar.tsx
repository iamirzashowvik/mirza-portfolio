import React, { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import { useRouter } from 'next/router'
const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('About')

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === '/') {
      setActiveItem('About')
    }

    if (pathname === '/Projects') {
      setActiveItem('Projects')
    }

    if (pathname === '/Resume') {
      setActiveItem('Resume')
    }
  }, [])

  const NavItem: FunctionComponent<{
    route: string
    name: string
    activeItem: string
    setActiveItem: Function
  }> = ({ route, name, activeItem, setActiveItem }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className='hover:text-green'> {name}</span>{' '}
        </a>
      </Link>
    ) : null
  }

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className="flex space-x-3 text-xl font-bold border-b-4 border-green text-green md:text-2xl">{activeItem}</span>
      <div className='flex space-x-5 text-lg'>
        <NavItem
          activeItem={activeItem}
          route="/"
          name="About"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          route="/Projects"
          name="Projects"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          route="/Resume"
          name="Resume"
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  )
}

export default Navbar
