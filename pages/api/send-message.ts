import type { NextApiRequest, NextApiResponse } from 'next';
import { init, send } from 'emailjs-com';
interface ResponseData {
  error?: string | null;
}

interface RequestData {
  name: string;
  email: string;
  message: string;
}

init(process.env.EMAILJS_USER_ID!);

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    console.log(req.body);
    const { name, email, message } = req.body;
    const result = await send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        name,
        email,
        message,
      },
      process.env.EMAILJS_USER_ID
    );
    console.log(result.text);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error from SendGrid' });
  }

  return res.status(200).json({ error: null });
}
