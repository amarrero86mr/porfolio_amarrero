import { useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SkillContext, type TSkillContext } from "./skills.contexty";
import { DarkLightContext, type TDarkLightContext } from "./darklight.context";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const captchat = useRef(null);
  const form = useRef(null);
  const { skillSelected } = useContext<TSkillContext>(SkillContext)
  const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const isRobot = () => {
    if (captchat.current !== null) {
      console.log(captchat)
      emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string });
    }
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (captchat.current !== null) {
      emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string });
    }
    emailjs
      .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
         form.current || '', {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className={`my-8 ${changeTheme}`}>


      <form ref={form} className="form" onSubmit={(e)=>sendEmail(e)}>

        <input
          type="text"
          name="nombre"
          id="name"
          placeholder="_tu Nombre"
          onChange={(e) => setName(e.currentTarget.value)} />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="_tu Email"
          onChange={(e) => setEmail(e.currentTarget.value)} />
        <div>

          <input
            className="h-30"
            type="textarea"
            name="message"
            id="message"
            placeholder="_tu Mensage"
            onChange={(e) => setMessage(e.currentTarget.value)} />
        </div>
        <label id='skills'> Skills selected:
          <input type="text" name='skills' id='skills' value={skillSelected.join(', ')} />
        </label>

        <ReCAPTCHA
          ref={captchat}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={isRobot}
        >

        </ReCAPTCHA>

        <button type="submit" value='Submit'>_enviar</button>
      </form>
    </div>
  )
};

export default ContactForm;