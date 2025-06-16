import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Resend } from 'resend';
import { EmailTemplate } from './Resend.js'; // Asegúrate de que este archivo tenga la extensión .jsx o .js

const app = express();
const resend = new Resend('re_7UkPnFPr_NicFzqCiTRm6dKf21mC5n2a9'); // Asegúrate de que la clave sea correcta

app.post('/send-email', async (req, res) => {
  try {
    const emailContent = renderToString(<EmailTemplate firstName="John" />);
    
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['agustinortizn14@resend.dev'],
      subject: 'Hello world',
      html: emailContent, // Utiliza la propiedad html para el contenido renderizado
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
