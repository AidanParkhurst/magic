# EmailJS Setup Guide

Your form is now configured to send emails using EmailJS. Follow these steps to complete the setup:

## 1. Create an EmailJS Account
- Go to https://www.emailjs.com
- Sign up for a free account
- Verify your email

## 2. Set Up Email Service
- In the EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose **Gmail** as the service
- Follow the authentication steps to connect your Gmail account (aidanparkhurst@gmail.com)
- Copy the **Service ID** (will look like `service_xxxxx`)

## 3. Create Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Configure it as follows:

### Template Settings:
- **Template Name**: `template_instant_quote` (exact name)
- **To Email**: `{{toEmail}}`
- **Subject**: `New Quote Request from {{fullName}}`
- **HTML Content**:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: 'Times New Roman', serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
      }
      .container {
        background-color: #ffffff;
        max-width: 600px;
        margin: 20px auto;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        margin-bottom: 30px;
        border-bottom: 2px solid #3a4a5e;
        padding-bottom: 20px;
      }
      h1 {
        color: #3a4a5e;
        font-family: 'Forum', serif;
        font-size: 28px;
        margin: 0;
      }
      .content {
        color: #3a4a5e;
        line-height: 1.6;
      }
      .info-grid {
        display: block;
        margin: 20px 0;
      }
      .info-row {
        display: flex;
        padding: 12px 0;
        border-bottom: 1px solid #e0e0e0;
      }
      .info-label {
        font-weight: bold;
        width: 180px;
        color: #5a6a7e;
      }
      .info-value {
        flex: 1;
        word-break: break-word;
      }
      .cta-box {
        background-color: #f9f9f9;
        border-left: 4px solid #3a4a5e;
        padding: 15px;
        margin: 20px 0;
      }
      .footer {
        text-align: center;
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #e0e0e0;
        color: #5a6a7e;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>✨ New Quote Request</h1>
      </div>

      <div class="content">
        <p>Hello,</p>

        <p>You have received a new quote request from your website. Here are the details:</p>

        <div class="info-grid">
          <div class="info-row">
            <span class="info-label">Name:</span>
            <span class="info-value">{{fullName}}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Email:</span>
            <span class="info-value"><a href="mailto:{{email}}">{{email}}</a></span>
          </div>
          <div class="info-row">
            <span class="info-label">Phone:</span>
            <span class="info-value">{{phone}}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Organization/Event:</span>
            <span class="info-value">{{organization}}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Event Type:</span>
            <span class="info-value">{{eventType}}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Event Date:</span>
            <span class="info-value">{{date}}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Experience Type:</span>
            <span class="info-value">{{experience}}</span>
          </div>
        </div>

        <div class="cta-box">
          <strong>Next Steps:</strong> Follow up with this lead to discuss their event details and provide a personalized quote.
        </div>

        <p>Best regards,<br><strong>Your Magic Website</strong></p>
      </div>

      <div class="footer">
        <p>This is an automated message from your website's quote system.</p>
      </div>
    </div>
  </body>
</html>
```

## 4. Update Public Key in Code
The current public key in QuoteSection.svelte is:
```javascript
emailjs.init('f2F4t-bK7vLmN9pQrStU');
```

**You MUST replace this** with your own public key:
- Go to **Account** in EmailJS dashboard
- Copy your **Public Key**
- Update the `emailjs.init()` call in `src/components/QuoteSection.svelte`

## 5. Update Service ID
The current service ID in QuoteSection.svelte is:
```javascript
emailjs.send('service_magic_quotes', 'template_instant_quote', formData)
```

**Replace `service_magic_quotes`** with your actual Service ID from step 2.

## Testing
- Fill out the form on your website
- Click "Get Quote"
- You should receive an email at aidanparkhurst@gmail.com with the form data

## Free Tier Limits
EmailJS free tier allows:
- 200 emails/month
- Sufficient for a small booking inquiry system

## Troubleshooting
- Check browser console for errors (F12 → Console)
- Verify Service ID and Public Key are correct
- Ensure Gmail account is properly authenticated
- Check EmailJS dashboard activity logs
