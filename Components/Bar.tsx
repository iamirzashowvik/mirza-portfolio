import React, { FunctionComponent } from 'react'
import { ISkill } from '../type'
import { languages } from '../data'

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, name, level },
}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-700">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
      >
        <Icon className="w-4 h-4 mx-2" /> {name}
      </div>
    </div>
  )
}

export default Bar
