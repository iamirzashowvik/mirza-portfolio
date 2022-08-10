import { GetServerSideProps, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import { services } from '../data'
import { IService } from '../type'

const index = () => {
  console.log('CLIENT', services)

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Hi, I am Mirza is from Dhaka working as a Software Engineer at Munchies.
        I have about 2 years of experience with Flutter, Express.js, and Nest.js
        with a focus on micro-services and dev-Ops.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wider">What I offer?</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              className="bg-gray-200 rounded-lg lg:col-span-1"
              key={service.title}
            >
              <ServiceCard services={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (context: GetServerSideProps) => {
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   console.log('server', services)
//   return {
//     props: {
//       services: data.services,
//     },
//   }
// }

// export const getStaticProps = async (context: GetStaticProps) => {
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   console.log('gsp', services)
//   return {
//     props: {
//       services: data.services,
//     },
//   }
// }
