import { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data'
import { IService } from '../../type'

type Data = {
  services: IService[]
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ services: services })
}
