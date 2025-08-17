import { useContext } from "react";
import ContactForm from "../components/contactForm";
import { DarkLightContext, type TDarkLightContext } from "../components/darklight.context";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const Contact = () => {
  const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
  const RECAPTCHA_SITE_KEY = "6LdSJqgrAAAAAO2t5CVjDZ-YeIr0-eEygaqhJQQl"

  return (
    <div className="mb-32">
      <div className='h-16 my-2'></div>
      <div>
        <h2>CONTACTs</h2>
      </div>
      <div
        className={`my-8 skillBox ${changeTheme}`}
      // style={changeTheme == 'lightTheme' ? { color: '#4D179A' } : { color: '#83CD29' }}
      >
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
          <ContactForm />
        </GoogleReCaptchaProvider>
      </div>
    </div>
  );
}
