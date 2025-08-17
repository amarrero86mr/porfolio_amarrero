// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import emailjs from '@emailjs/browser';

// Estas variables se cargarán desde las variables de entorno de Vercel.
const RECAPTCHA_SECRET_KEY = process.env.VITE_RECAPTCHA_SECRET_KEY as string;
const EMAILJS_SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = process.env.VITE_EMAILJS_PUBLIC_KEY as string;

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { recaptchaToken, from_name, from_email, message } = req.body;

  if (!recaptchaToken || !from_name || !from_email || !message) {
    return res.status(400).json({ success: false, message: 'Missing form data.' });
  }

  try {
    // Validar el token de reCAPTCHA
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    const { success, score } = recaptchaResponse.data;

    if (!success || score < 0.5) {
      return res.status(401).json({
        success: false,
        message: 'reCAPTCHA verification failed. Score: ' + score,
      });
    }

    // Enviar el correo con EmailJS
    const templateParams = {
      from_name,
      from_email,
      message,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error in API route:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}