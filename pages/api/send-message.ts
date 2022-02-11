import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import { FetchEvent } from 'next/dist/server/web/spec-compliant/fetch-event';
import { NextFetchEvent } from 'next/server';
interface ResponseData {
  error?: string | null;
}

interface RequestData {
  name: string;
  email: string;
  message: string;
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

const template = (
  email: string,
  name: string,
  message: string
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${message}</p>
              <br>
              </div>
              <img src="https://manuarora.in/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
             
              </div>
      </body>
      </html>`;

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  try {
    console.log(req.body);

    const { name, email, message } = req.body as RequestData;
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'dat.daovu@gmail.com', // Your email where you'll receive emails
      from: email, // your website email address here
      subject: `[Resume] - Message from ${name}`,
      html: template(email, name, message),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error from SendGrid' });
  }

  return res.status(200).json({ error: null });
};
