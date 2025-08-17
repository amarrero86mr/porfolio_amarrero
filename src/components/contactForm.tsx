// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('Enviando...');

    if (!executeRecaptcha) {
      setStatus('Error: reCAPTCHA no está cargado.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Generar el token de reCAPTCHA
      const recaptchaToken = await grecaptcha.enterprise.execute('6LdSJqgrAAAAAO2t5CVjDZ-YeIr0-eEygaqhJQQl', {action: 'LOGIN'});

      // Enviar el token y los datos a la API de Vercel
      const response = await axios.post('/api/contact', {
        recaptchaToken,
        from_name: name,
        from_email: email,
        message,
      });

      if (response.data.success) {
        setStatus('¡Mensaje enviado con éxito!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Error: ' + response.data.message);
      }
    } catch (err) {
      setStatus('Ocurrió un error. Intenta de nuevo más tarde.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contáctame</h2>
      <input
        type="text"
        placeholder="Tu Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Tu Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Tu Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;