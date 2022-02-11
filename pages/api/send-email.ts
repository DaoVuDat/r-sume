import { NextApiRequest, NextApiResponse } from 'next';
interface Data {
  message: string;
}
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  return res.status(200).json({ message: 'Success' });
};
