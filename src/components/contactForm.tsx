import React, { useContext, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { SkillContext, type TSkillContext } from './skills.contexty';

const RECAPTCHA_SECRET_KEY = import.meta.env.VITE_RECAPTCHA_SECRET_KEY; // ¡ADVERTENCIA! No hagas esto en producción.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm: React.FC = () => {
  const { skillSelected } = useContext<TSkillContext>(SkillContext)
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!executeRecaptcha) {
      setError('reCAPTCHA no está cargado. Intenta de nuevo.');
      return;
    }

    try {
      // 1. Generar el token de reCAPTCHA
      const recaptchaToken = await executeRecaptcha('form_submission');
      

      // 2. Validar el token de reCAPTCHA directamente con la API de Google
      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
      );

      
      const { success, score } = recaptchaResponse.data;
      console.log(success, score)
      
      // 3. Verificar si la validación de reCAPTCHA fue exitosa
      if (!success || score < 0.5) {
        setError('Verificación de reCAPTCHA fallida. Por favor, intenta de nuevo.');
        return;
      }

      // 4. Si la validación es exitosa, enviar el email con EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: 'Usuario', message: 'Hola, esto es un mensaje de prueba.', email: 'emailpepto.com', skills: skillSelected.join(', '),
        },
        EMAILJS_PUBLIC_KEY
      );

      setMessage('Formulario enviado con éxito y reCAPTCHA verificado.');
      setError('');

    } catch (err) {
      setError('Ocurrió un error al enviar el formulario.');
      setMessage('');
      console.error(err);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Send an e-mail</h2>
      <button type="submit">Enviar</button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ContactForm;