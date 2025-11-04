# Complete Setup Guide

This guide will walk you through setting up the Healthcare Medical Template from scratch to production deployment.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Clerk Authentication](#clerk-authentication)
4. [Convex Database](#convex-database)
5. [Email Configuration](#email-configuration)
6. [SMS Configuration](#sms-configuration)
7. [File Storage](#file-storage)
8. [Payment Processing](#payment-processing)
9. [Telehealth Setup](#telehealth-setup)
10. [Customization](#customization)
11. [Testing](#testing)
12. [Deployment](#deployment)
13. [Post-Deployment](#post-deployment)

## Prerequisites

### Required Software
- **Node.js**: Version 18.17.0 or higher
- **npm** or **yarn**: Latest version
- **Git**: Latest version
- **Code Editor**: VS Code recommended

### Required Accounts
- **Clerk**: For authentication (https://clerk.com)
- **Convex**: For database (https://convex.dev)
- **Vercel**: For hosting (https://vercel.com) or alternative HIPAA-compliant host
- **Email Service**: HIPAA-compliant provider (e.g., Paubox)
- **SMS Service**: HIPAA-compliant provider (e.g., Twilio with BAA)

### Knowledge Requirements
- Basic React/Next.js knowledge
- Understanding of HIPAA requirements
- Healthcare compliance awareness

## Initial Setup

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd healthcare-medical-template
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 15+
- React 19
- Clerk for authentication
- Convex for database
- Tailwind CSS for styling
- shadcn/ui components
- And more...

### Step 3: Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

We'll fill in these values in the following sections.

## Clerk Authentication

Clerk provides secure authentication with built-in MFA support.

### Step 1: Create Clerk Application

1. Go to https://clerk.com and sign up
2. Create a new application
3. Choose authentication methods:
   - ✅ Email + Password (required)
   - ✅ Magic Links (optional)
   - ✅ OAuth (Google, Microsoft, etc. - optional)

### Step 2: Configure Multi-Factor Authentication

⚠️ **CRITICAL for HIPAA**: MFA must be enforced

1. In Clerk Dashboard → Authentication
2. Enable "Multi-factor"
3. Choose methods:
   - ✅ SMS Code (recommended)
   - ✅ Authenticator App (recommended)
   - ✅ Backup Codes (recommended)
4. Set MFA to "Required" for all users

### Step 3: Configure User Metadata

We use metadata to store user roles.

1. In Clerk Dashboard → Users
2. Go to "Metadata"
3. Add custom fields:
   ```json
   {
     "role": "patient" // or "doctor", "nurse", "staff", "admin"
   }
   ```

### Step 4: Get API Keys

1. In Clerk Dashboard → API Keys
2. Copy your keys
3. Add to `.env`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### Step 5: Configure Redirects

In `.env`:

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/patient-portal/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/patient-portal/dashboard
```

### Step 6: Request BAA

⚠️ **CRITICAL**: Contact Clerk to sign a Business Associate Agreement

1. Email: support@clerk.com
2. Subject: "HIPAA BAA Request"
3. Wait for BAA to be signed before handling PHI

## Convex Database

Convex provides a real-time database with TypeScript support.

### Step 1: Create Convex Account

1. Go to https://convex.dev and sign up
2. Connect your GitHub account (optional)

### Step 2: Create New Project

1. Click "Create Project"
2. Name your project (e.g., "healthcare-medical-practice")
3. Choose region (closest to your users)

### Step 3: Initialize Convex

```bash
npx convex dev
```

This will:
- Set up your Convex project
- Deploy the schema
- Create a development deployment
- Generate configuration files

### Step 4: Get Deployment URL

After initialization, you'll see:
```
Deployment URL: https://[your-deployment].convex.cloud
```

Add to `.env`:
```env
CONVEX_DEPLOYMENT=dev:...
NEXT_PUBLIC_CONVEX_URL=https://....convex.cloud
```

### Step 5: Configure Encryption

⚠️ **CRITICAL for HIPAA**: Enable encryption at rest

1. In Convex Dashboard → Settings
2. Enable "Encryption at Rest"
3. Configure encryption keys

### Step 6: Request BAA

⚠️ **CRITICAL**: Contact Convex to sign a Business Associate Agreement

1. Contact Convex support
2. Request HIPAA BAA
3. Wait for BAA before handling PHI

## Email Configuration

You need a HIPAA-compliant email service.

### Recommended: Paubox

Paubox is a HIPAA-compliant email service.

1. Sign up at https://www.paubox.com
2. Choose plan (Small Practice or higher)
3. Sign BAA with Paubox
4. Get API credentials
5. Add to `.env`:

```env
EMAIL_PROVIDER=paubox
EMAIL_API_KEY=your_api_key
EMAIL_FROM_ADDRESS=noreply@yourdomain.com
EMAIL_FROM_NAME=HealthCare Medical Practice
```

### Alternative: MailHippo, Hushmail

Follow similar process with your chosen provider.

### Email Templates

Email templates are in `/lib/email/templates/`. Customize as needed.

## SMS Configuration

For appointment reminders and two-factor authentication.

### Using Twilio

1. Sign up at https://www.twilio.com
2. Verify your phone number
3. Get a Twilio phone number
4. Sign BAA with Twilio (required for HIPAA)
5. Get credentials:
   - Account SID
   - Auth Token
   - Phone Number
6. Add to `.env`:

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1234567890
```

### Important SMS Limitations

⚠️ **CRITICAL**: SMS cannot contain detailed PHI

Acceptable SMS content:
- ✅ "You have an appointment tomorrow at 2 PM"
- ✅ "Your prescription is ready for pickup"
- ❌ "Your blood pressure results are high"
- ❌ "You tested positive for [condition]"

## File Storage

For storing insurance cards, medical documents, etc.

### Using AWS S3

1. Create AWS account
2. Sign BAA with AWS
3. Create S3 bucket:
   ```bash
   aws s3 mb s3://healthcare-medical-documents
   ```
4. Enable encryption:
   ```bash
   aws s3api put-bucket-encryption \
     --bucket healthcare-medical-documents \
     --server-side-encryption-configuration \
     '{"Rules": [{"ApplyServerSideEncryptionByDefault": {"SSEAlgorithm": "AES256"}}]}'
   ```
5. Configure CORS and access policies
6. Add to `.env`:

```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_S3_BUCKET=healthcare-medical-documents
AWS_S3_ENCRYPTION=AES256
```

## Payment Processing

For billing and payments.

### Using Stripe

1. Create Stripe account at https://stripe.com
2. Enable HIPAA features (Enterprise plan required)
3. Sign BAA with Stripe
4. Get API keys (Developers → API keys)
5. Add to `.env`:

```env
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### Configure Webhooks

1. In Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events:
   - payment_intent.succeeded
   - payment_intent.failed
   - invoice.payment_succeeded
4. Get webhook secret
5. Add to `.env`:

```env
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Telehealth Setup

For video consultations.

### Using Twilio Video

1. Create Twilio account (if not already done)
2. Enable Twilio Video
3. Sign BAA with Twilio
4. Get credentials:
   - API Key
   - API Secret
5. Add to `.env`:

```env
TELEHEALTH_PROVIDER=twilio
TWILIO_VIDEO_API_KEY=your_api_key
TWILIO_VIDEO_API_SECRET=your_api_secret
TWILIO_VIDEO_ACCOUNT_SID=your_account_sid
```

### Alternative: Zoom Healthcare API

1. Sign up for Zoom Healthcare plan
2. Create app in Zoom Marketplace
3. Get API credentials
4. Sign BAA with Zoom
5. Configure OAuth

## Customization

### Branding

#### 1. Update Site Name

In `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Practice Name",
    template: "%s | Your Practice Name",
  },
  description: "Your practice description...",
};
```

#### 2. Update Logo

Replace logo in:
- `/components/layout/header.tsx`
- `/components/layout/footer.tsx`

Or use a custom logo:
```tsx
<Image src="/logo.png" alt="Practice Logo" width={150} height={50} />
```

#### 3. Update Colors

In `tailwind.config.ts`, update color palette:
```typescript
colors: {
  primary: {
    DEFAULT: "hsl(your-color)",
    // ...
  },
}
```

#### 4. Update Fonts

In `app/layout.tsx`:
```typescript
const customFont = YourFont({
  subsets: ["latin"],
  variable: "--font-custom",
});
```

### Content

#### 1. Update Provider Information

Edit `/convex/functions/providers.ts` or add via admin dashboard.

#### 2. Update Services

Edit service pages in `/app/(public)/services/`

#### 3. Update Locations

Edit `/app/(public)/locations/page.tsx`

#### 4. Update Insurance

Edit `/app/(public)/insurance/page.tsx`

### Features

Enable/disable features in `.env`:
```env
NEXT_PUBLIC_FEATURE_TELEHEALTH_ENABLED=true
NEXT_PUBLIC_FEATURE_ONLINE_PAYMENTS_ENABLED=true
NEXT_PUBLIC_FEATURE_PRESCRIPTION_REFILLS_ENABLED=true
NEXT_PUBLIC_FEATURE_HEALTH_TRACKING_ENABLED=true
```

## Testing

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Security Testing

1. **Dependency Audit**:
   ```bash
   npm audit
   ```

2. **Security Headers Test**:
   Visit https://securityheaders.com

3. **SSL Test**:
   Visit https://www.ssllabs.com/ssltest/

### Accessibility Testing

1. **Lighthouse**:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run accessibility audit

2. **axe DevTools**:
   - Install axe extension
   - Run accessibility scan

### Load Testing

Use tools like:
- Apache JMeter
- Gatling
- Artillery

Test critical flows:
- Login
- Appointment booking
- Medical records access

## Deployment

### Pre-Deployment Checklist

- [ ] All BAAs signed
- [ ] Legal review completed
- [ ] Security assessment completed
- [ ] Environment variables configured
- [ ] MFA enforced
- [ ] Audit logging enabled
- [ ] Backup procedures established
- [ ] Incident response plan documented
- [ ] Staff training completed

### Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   npm run build
   vercel --prod
   ```

4. **Configure Environment Variables**:
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Add all variables from `.env`
   - ⚠️ Mark sensitive variables as "Sensitive"

5. **Configure Domain**:
   - Add custom domain
   - Configure DNS
   - Enable SSL

### Alternative: AWS

For maximum control and HIPAA compliance:

1. Use AWS Amplify or EC2
2. Configure VPC
3. Enable CloudWatch logging
4. Set up WAF
5. Configure backup to S3

## Post-Deployment

### Monitoring

1. **Set up Uptime Monitoring**:
   - Use UptimeRobot, Pingdom, or similar
   - Monitor all critical endpoints

2. **Set up Error Tracking**:
   - Configure Sentry (with PHI scrubbing)
   - Set up alerts

3. **Set up Log Monitoring**:
   - Use AWS CloudWatch, Datadog, or similar
   - Set up alerts for suspicious activity

### Security

1. **Enable WAF**:
   - Block common attacks
   - Rate limiting
   - Geo-blocking if needed

2. **Regular Security Scans**:
   - Weekly vulnerability scans
   - Monthly penetration testing
   - Quarterly security audits

3. **SSL/TLS**:
   - Ensure certificate is valid
   - Enable HSTS
   - Use TLS 1.3

### Compliance

1. **Audit Log Reviews**:
   - Weekly review of audit logs
   - Look for suspicious activity
   - Document reviews

2. **Access Reviews**:
   - Quarterly review of user access
   - Remove unnecessary permissions
   - Document reviews

3. **Policy Updates**:
   - Review policies annually
   - Update as needed
   - Train staff on changes

### Maintenance

1. **Regular Updates**:
   - Weekly dependency updates
   - Monthly security patches
   - Quarterly major updates

2. **Backup Testing**:
   - Monthly backup restoration test
   - Document test results

3. **Disaster Recovery Drills**:
   - Quarterly DR drills
   - Document results
   - Update DR plan

## Support

If you need help:

1. **Technical Issues**:
   - Check documentation
   - Review error logs
   - Contact vendor support

2. **Compliance Questions**:
   - Consult with compliance officer
   - Contact healthcare attorney
   - Reach out to HHS if needed

3. **Security Concerns**:
   - Contact security team immediately
   - Follow incident response plan
   - Document everything

## Conclusion

Setting up a HIPAA-compliant healthcare system is a significant undertaking. Take your time, follow best practices, and don't hesitate to seek professional help when needed.

Remember:
- **Security first** - Never compromise on security
- **Compliance is ongoing** - It's not a one-time task
- **Document everything** - For audits and accountability
- **Train your team** - Technology is only part of the solution

---

**Need Help?**

Consider hiring:
- Healthcare IT consultants
- HIPAA compliance specialists
- Security professionals
- Healthcare attorneys

**Never deploy to production without proper legal and security review.**
