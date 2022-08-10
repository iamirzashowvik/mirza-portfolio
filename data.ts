import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiFigma,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si'
import { IService, ISkill, IProject, Category } from './type'
import { SiFlutter } from 'react-icons/si'

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'handle database, server, api using <a href="https://nodejs.org/en/"><b>Express </b></a> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
      'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about: 'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:
      'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
  },
  {
    Icon: RiComputerLine,
    title: 'Whatever',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  },
]

export const languages: ISkill[] = [
  { name: 'Flutter', level: '80%', Icon: SiFlutter },
  {
    name: 'Javascript',
    level: '75%',
    Icon: SiJavascript,
  },
  { name: 'Typescript', level: '60%', Icon: SiTypescript },
  { name: 'React', level: '78%', Icon: SiReact },
  { name: 'Next.JS', level: '82%', Icon: SiNextdotjs },
  { name: 'Nest.JS', level: '50%', Icon: SiNestjs },
  { name: 'Express.JS', level: '60%', Icon: SiExpress },
]

export const tools: ISkill[] = [
  {
    name: 'MongoDB',
    level: '70%',
    Icon: SiMongodb,
  },
  { name: 'Tailwind', level: '80%', Icon: SiTailwindcss },
]

export const projects: IProject[] = [
  {
    name: 'Munchies Android App',
    description:
      'Munchies is an online e-commerce platform where you can get your necessary items delivered at your doorstep.From snacks to daily essentials; Munchies is the solution for your crazy late-night demands from 8pm to 6am. So, what are you waiting for?',
    image_path:
      'https://i.pinimg.com/564x/d5/d2/a3/d5d2a367bdca98a14cf1b721de83ba22.jpg',
    deployed_url:
      'https://play.google.com/store/apps/details?id=com.now.munchies.app',
    github_url: 'https://github.com/iamirzashowvik',
    category: ['flutter'],
    key_tags: ['GETX', 'MVC', 'Socket.io'],
  },
  {
    name: 'Munchies iOS App',
    description:
      'Munchies is an online e-commerce platform where you can get your necessary items delivered at your doorstep.From snacks to daily essentials; Munchies is the solution for your crazy late-night demands from 8pm to 6am. So, what are you waiting for?',

    image_path:
      'https://i.pinimg.com/originals/67/83/e2/6783e280ae025dc8948c1fae2b5d16b8.jpg',
    deployed_url:
      'https://apps.apple.com/us/app/munchies-late-night-delivery/id1596347788',
    github_url: 'https://github.com/iamirzashowvik',
    category: ['flutter'],
    key_tags: ['GETX', 'MVC', 'Socket.io'],
  },
  {
    name: 'Who is it? Web App',
    description:
      'This is the only picture-based phone book designed for the multi-tasking and multi-app generation.',
    image_path:
      'https://i.pinimg.com/564x/5f/63/53/5f635339973b1f6bc8941f5ce065a43d.jpg',
    deployed_url: 'https://react-tailwind-starter-project.vercel.app/',
    github_url:
      'https://github.com/iamirzashowvik/react-tailwind-starter-project',
    category: ['react'],
    key_tags: ['react', 'tailwind', 'typescript'],
  },
  {
    name: 'Who is it? Backend',
    description:
      'This is the only picture-based phone book designed for the multi-tasking and multi-app generation.',
    image_path:
      'https://i.pinimg.com/564x/5f/63/53/5f635339973b1f6bc8941f5ce065a43d.jpg',
    deployed_url: 'https://react-tailwind-starter-project.vercel.app/',
    github_url: 'https://github.com/iamirzashowvik/whoisit',
    category: ['node'],
    key_tags: ['express', 'heroku', 'typescript'],
  },
  {
    name: 'Petspital',
    description:
      "Your loving pet is sick & You don't know where to go, or what to do?This is the worst feeling!!!Here we are coming up with the most amazing solution.Presenting Petspital.✅Bangladesh's very first pet solution app is here.A proper care & treatment service for your pet. We will be providing the fastest solution and suggestions to your problem Like, ✅You can ask any question about your pet.🎥You can have video consultations about your issues. 💊You can get medicines for your pet and much other help that can be needed.🚑Emergency home visit.Don't get tensed & feel free to contact us when you're in need.✅",
    image_path:
      'https://i.pinimg.com/564x/cd/9d/7a/cd9d7a0e8a5e53350a69fb6366ad0229.jpg',
    deployed_url:
      'https://play.google.com/store/apps/details?id=app.petspital.user',
    github_url: 'https://github.com/iamirzashowvik',
    category: ['flutter'],
    key_tags: ['GETX', 'MVC', 'Agora.io', 'Telemedicine'],
  },
]
