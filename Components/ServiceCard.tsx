import React, { FunctionComponent } from 'react'
import { services } from '../data'
import { IService } from '../type'

const ServiceCard: FunctionComponent<{ services: IService }> = ({
  services: { Icon, about, title },
}) => {
  const createMarkUp = () => {
    return {
      __html: about,
    }
  }
  return (
    <div className="flex items-center p-2 space-x-4 dark:bg-dark-300">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <div className="font-bold">{title}</div>
        <p dangerouslySetInnerHTML={createMarkUp()}></p>
      </div>
    </div>
  )
}

export default ServiceCard
