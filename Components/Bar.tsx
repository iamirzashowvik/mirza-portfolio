import { FunctionComponent } from 'react'

import { motion } from 'framer-motion'
import { ISkill } from '../type'
const Bar: FunctionComponent<{ value: ISkill }> = ({
  value: { Icon, level, name },
}) => {
  // const bar_width = `${level}%`

  // const variants = {
  // initial: {
  //   width: 0,
  // },
  // animate: {
  //   width: bar_width,
  //   transition: {
  //     duration: 0.4,
  //     type: 'spring',
  //     damping: 10, // value of the bounce
  //     stiffness: 100, //
  //   },
  // },
  // }

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-black-300">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
        style={{
          width: level,
        }}
        // variants={variants}
        // initial={}
        // animate="animate"
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  )
}
export default Bar
