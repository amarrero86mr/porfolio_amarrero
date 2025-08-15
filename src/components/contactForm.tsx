import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// ⚠️ Cambia por tu clave de reCAPTCHA de Google
const RECAPTCHA_SITE_KEY = import.meta.env.KEYPUBLIC ;

interface ContactFormProps {
  skills: string[];
}

const ContactForm: React.FC<ContactFormProps> = ({ skills }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botField: "", // Honeypot
    captchaToken: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token: string | null) => {
    setFormData({
      ...formData,
      captchaToken: token || "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Bloquear si es un bot (honeypot o captcha vacío)
    if (formData.botField || !formData.captchaToken) {
      alert("Error de validación.");
      return;
    }

    // 🔹 Aquí conectarías con EmailJS, FormSubmit o tu backend propio
    console.log("Datos del formulario:", {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      skills,
    });

    alert("Formulario enviado correctamente!");
    setFormData({ name: "", email: "", message: "", botField: "", captchaToken: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Contacto</h2>

      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Mensaje</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* Honeypot oculto */}
      <input
        type="text"
        name="botField"
        value={formData.botField}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Skills seleccionadas */}
      {skills.length > 0 && (
        <div style={{ margin: "10px 0" }}>
          <strong>Skills:</strong> {skills.join(", ")}
        </div>
      )}

      {/* reCAPTCHA */}
      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={handleCaptchaChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};
export default ContactForm;