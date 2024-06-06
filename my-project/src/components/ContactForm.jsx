import React, { useState } from 'react';
import emailjs from 'emailjs-com';



const FormField = ({ label, type, id, name, value, onChange, required }) => (
  <div style={{ marginBottom: '20px' }}>
    <label htmlFor={id} style={{ color: '#6A5ACD' }}>{label}:</label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          minHeight: '100px'
        }}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
        }}
      />
    )}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Sending the following data to EmailJS:', formData);

    emailjs.send('default_service', 'template_5ngvm32', formData, 'X-OVkkpwZHqQMbHbn')
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
        alert('¡El correo se ha enviado correctamente!');
        setFormData({
          nombre: '',
          email: '',
          mensaje: '',
        });
      })
      .catch((error) => {
        console.log('Error al enviar el correo:', error);
        alert('Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  return (
    <div style={{ paddingTop: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ textAlign: 'center', color: '#6A5ACD' }}>Contact me!</h3>
        <form className="form1" id="pushMail" onSubmit={handleSubmit}  style={{color: 'black'}}>
          <FormField
            label="Name"
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <FormField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <FormField 
            label="Message"
            type="textarea"
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />

          <div style={{ textAlign: 'center' }}>
            <input className="myBtn2" type="submit" value="Send" style={{ backgroundColor: '#6A5ACD', color: '#fff', borderRadius: '10px', padding: '10px 20px', border: 'none', cursor: 'pointer' }} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
