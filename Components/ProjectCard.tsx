import React, { FunctionComponent, useState } from 'react'
import { IProject } from '../type'
import { SiGithub, SiLivechat } from 'react-icons/si'
import { CgMediaLive } from 'react-icons/cg'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_tags,
  },
}) => {
  const [state, setState] = useState(true)
  const changeState = () => {
    setState(state ? false : true)
  }
  return (
    <div className="overflow-hidden bg-gray-200 rounded-2xl dark:bg-dark-300">
      {state ? (
        <div onClick={changeState} className="">
          <Image
            src={image_path}
            alt={name}
            height="150px"
            width="200px"
            layout="responsive"
            objectFit="fill"
          />
          <div className="flex justify-center">{name}</div>
        </div>
      ) : (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto px-4 py-4 text-black bg-gray-100 rounded-xl md:grid-cols-2 dark:bg-dark-100">
          <div>
            <Image
              src={image_path}
              alt={name}
              // height={200}
              // width={200}
              // layout="fill"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex justify-around px-4 py-2 space-x-3 text-lg bg-gray-200 item-center dark:bg-dark-200 dark:text-white"
              >
                <SiGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex justify-around px-4 py-2 space-x-3 text-lg bg-gray-200 item-center dark:bg-dark-200 dark:text-white"
              >
                <CgMediaLive />
                <span>Live</span>
              </a>
            </div>
          </div>
          <div className="px-4">
            <h5 className="dark:text-white ">{name}</h5>
            <h4 className="dark:text-white">{description}</h4>
            <div className="py-4">
              {key_tags.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 mr-2 bg-gray-400 dark:bg-gray-300 dark:text-dark-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={changeState}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
