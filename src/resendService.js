import axios from 'axios';

const PROXY_API_URL = 'http://localhost:5000/send-email'; // URL de tu servidor proxy

export const sendEmail = async (to, subject, html) => {
  const emailData = {
    to,
    subject,
    html
  };

  try {
    const response = await axios.post(PROXY_API_URL, emailData);
    return response.data;
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error.response ? error.response.data : error.message);
    throw error;
  }
};
