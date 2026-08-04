'use server';

import nodemailer from 'nodemailer';
import { contactSchema, type ContactFormData, buyInquirySchema, type BuyInquiryFormData } from '@/lib/schemas';
import { siteConfig } from '@/lib/site-config';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const brandColor = '#7c3aed'; // violet-600
  const darkColor = '#0f172a'; // slate-950

  try {
    // Send the admin brief and customer confirmation concurrently so one
    // slow/failed send doesn't stall or block the other.
    const [adminResult, customerResult] = await Promise.allSettled([
      // 1. Send Technical Brief to Admin
      transporter.sendMail({
      from: `"Studio Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `[INQUIRY] ${data.service.toUpperCase()} - ${data.name}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
          <div style="background-color: ${darkColor}; padding: 40px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 4px; font-style: italic;">ThePhoneShop<span style="color: ${brandColor};">Express.</span></h1>
            <p style="color: #94a3b8; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; margin-top: 10px;">Technical Service Brief</p>
          </div>
          <div style="padding: 40px;">
            <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #f1f5f9;">
              <p style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Customer Profile</p>
              <h2 style="font-size: 24px; color: ${darkColor}; margin: 0; font-style: italic;">${data.name}</h2>
              <p style="font-size: 14px; color: #64748b; margin-top: 5px;">${data.email} | ${data.phone}</p>
            </div>
            
            <div style="margin-bottom: 30px;">
              <p style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Service Requested</p>
              <div style="background-color: #f8fafc; padding: 15px 25px; border-radius: 12px; border-left: 4px solid ${brandColor};">
                <p style="font-size: 16px; font-weight: bold; color: ${darkColor}; margin: 0;">${data.service}</p>
              </div>
            </div>

            <div style="margin-bottom: 30px;">
              <p style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Technical Details</p>
              <p style="font-size: 15px; color: #334155; line-height: 1.6; font-style: italic;">"${data.message}"</p>
            </div>

            <a href="tel:${data.phone}" style="display: block; width: 100%; background-color: ${brandColor}; color: #ffffff; text-align: center; padding: 18px; border-radius: 14px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 2px;">Initiate Contact</a>
          </div>
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
            <p style="font-size: 10px; color: #94a3b8; margin: 0;">Automated System | Professional Engineering Standards</p>
          </div>
        </div>
      `,
      }),

      // 2. Send Premium Confirmation to User
      transporter.sendMail({
      from: `"The Phone Shop Express" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: `Your Inquiry: ${data.service} - The Phone Shop Express`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #ffffff; padding: 60px 40px; text-align: center; border-bottom: 1px solid #f1f5f9;">
            <div style="width: 60px; height: 60px; background-color: ${brandColor}; border-radius: 18px; display: inline-block; margin-bottom: 25px; line-height: 60px;">
              <span style="color: #ffffff; font-size: 30px;">✓</span>
            </div>
            <h1 style="color: ${darkColor}; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 4px; font-style: italic;">ThePhoneShop<span style="color: ${brandColor};">Express.</span></h1>
            <h2 style="font-size: 32px; color: ${darkColor}; margin: 20px 0 10px 0; font-style: italic; letter-spacing: -1px;">Inquiry Received.</h2>
            <p style="font-size: 16px; color: #64748b; font-weight: 500;">Thank you for choosing Preston's leading technical studio.</p>
          </div>
          
          <div style="padding: 40px;">
            <p style="font-size: 15px; color: #334155; line-height: 1.6;">Hi ${data.name},</p>
            <p style="font-size: 15px; color: #334155; line-height: 1.6;">Our technical team has received your request regarding <strong>${data.service}</strong>. We are currently reviewing your details and a specialist will contact you shortly to provide a comprehensive diagnostic plan.</p>
            
            <div style="margin: 40px 0; padding: 30px; background-color: #f8fafc; border-radius: 20px; text-align: center;">
              <p style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;">Immediate Assistance</p>
              <p style="font-size: 24px; color: ${brandColor}; font-weight: bold; margin: 0; font-style: italic;">+44 7459 763380</p>
            </div>

            <p style="font-size: 13px; color: #94a3b8; line-height: 1.6; font-style: italic; text-align: center;">
              "Technical Excellence. Guaranteed Restoration."
            </p>
          </div>

          <div style="background-color: ${darkColor}; padding: 40px; text-align: center;">
            <p style="color: #ffffff; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;">The Technical Studio</p>
            <div style="color: #94a3b8; font-size: 11px;">
              Preston, United Kingdom<br>
              Mon - Sat | Professional Engineering
            </div>
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.05); margin: 30px 0;">
            <p style="color: #475569; font-size: 9px; text-transform: uppercase; letter-spacing: 1px;">© ${new Date().getFullYear()} ${siteConfig.name}. All Rights Reserved.</p>
          </div>
        </div>
      `,
      }),
    ]);

    if (adminResult.status === 'rejected') {
      console.error('Email error (admin brief):', adminResult.reason);
      return { success: false, error: 'Failed to send message. Please try again later.' };
    }

    if (customerResult.status === 'rejected') {
      console.error('Email error (customer confirmation):', customerResult.reason);
    }

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}

export async function sendBuyInquiryEmail(data: BuyInquiryFormData) {
  const result = buyInquirySchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const brandColor = '#7c3aed';
  const darkColor = '#0f172a';

  try {
    await transporter.sendMail({
      from: `"Studio Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `[BUY INQUIRY] ${data.name}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
          <div style="background-color: ${darkColor}; padding: 40px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 4px; font-style: italic;">ThePhoneShop<span style="color: ${brandColor};">Express.</span></h1>
            <p style="color: #94a3b8; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; margin-top: 10px;">Device Purchase Inquiry</p>
          </div>
          <div style="padding: 40px;">
            <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #f1f5f9;">
              <p style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Customer Profile</p>
              <h2 style="font-size: 24px; color: ${darkColor}; margin: 0; font-style: italic;">${data.name}</h2>
              <p style="font-size: 14px; color: #64748b; margin-top: 5px;">${data.phone}</p>
            </div>

            <div style="margin-bottom: 30px;">
              <p style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Delivery / Contact Address</p>
              <p style="font-size: 15px; color: #334155; line-height: 1.6;">${data.address}</p>
            </div>

            <div style="margin-bottom: 30px;">
              <p style="font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Device Details</p>
              <p style="font-size: 15px; color: #334155; line-height: 1.6; font-style: italic;">"${data.message}"</p>
            </div>

            <a href="tel:${data.phone}" style="display: block; width: 100%; background-color: ${brandColor}; color: #ffffff; text-align: center; padding: 18px; border-radius: 14px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 2px;">Initiate Contact</a>
          </div>
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
            <p style="font-size: 10px; color: #94a3b8; margin: 0;">Automated System | Professional Engineering Standards</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
