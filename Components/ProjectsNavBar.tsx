import React, { FunctionComponent } from 'react'
import { Category } from '../type'

const ProjectsNavBar: FunctionComponent<{
  hanldeFilter: Function
  active: string
}> = (props) => {
  return (
    <div className="flex space-x-3 overflow-x-auto list-none justify-items-start">
      <NavItemP {...props} value="all" key="all" />
      <NavItemP value="flutter" {...props} key="flutter" />
      <NavItemP value="react" {...props} key="react" />
      <NavItemP value="node" {...props} key="node" />
      <NavItemP value="mongo" {...props} key="mongo" />
    </div>
  )
}

const NavItemP: FunctionComponent<{
  value: Category | 'all'
  hanldeFilter: Function
  active: string
}> = ({ value, hanldeFilter, active }) => {
  let className = 'capitalize cursor-pointer hover:text-green'
  if (active === value) className += ' text-green'

  return (
    <li className={className} onClick={() => hanldeFilter(value)}>
      {value}
    </li>
  )
}

export default ProjectsNavBar
