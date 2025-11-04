# Healthcare Medical Practice Template

A premium, production-ready healthcare/medical practice website built with Next.js 15+, featuring a HIPAA-aware architecture, comprehensive patient portal, appointment booking system, and telehealth integration readiness.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38bdf8)

## ⚠️ CRITICAL COMPLIANCE DISCLAIMER

**This template provides the foundation for a HIPAA-compliant system but does NOT guarantee full compliance.**

Full HIPAA compliance requires:
- ✅ Business Associate Agreements (BAAs) with ALL service providers
- ✅ Comprehensive security policies and procedures
- ✅ Staff HIPAA training
- ✅ Regular risk assessments
- ✅ Incident response plans
- ✅ Legal review
- ✅ Regular security audits

**DO NOT deploy this system in production with real Protected Health Information (PHI) without:**
1. Legal counsel review
2. HIPAA compliance officer approval
3. Security assessment by qualified professionals
4. Signed BAAs from all vendors (Vercel, Clerk, Convex, email/SMS providers, etc.)

## 🏥 Features

### Patient Experience
- **Modern Homepage** - Trust-building design with clear calls-to-action
- **Service Pages** - Comprehensive information about medical services
- **Provider Directory** - Searchable, filterable provider profiles
- **Online Appointment Booking** - Multi-step wizard with smart scheduling
- **Patient Portal** - Secure access to health information
  - Medical records viewer
  - Appointment management
  - Secure messaging with providers
  - Prescription refill requests
  - Health tracking (vitals, measurements)
  - Billing and payments
  - Family account management
- **Telehealth Ready** - Infrastructure for video consultations
- **Mobile-First Design** - Optimized for all devices
- **Accessibility** - WCAG 2.1 AA+ compliant

### Provider & Admin Tools
- **Provider Portal** - Manage schedule, patients, messages
- **Admin Dashboard** - Comprehensive practice management
- **Appointment Management** - Smart scheduling with conflict detection
- **Secure Messaging** - HIPAA-compliant communication
- **Audit Logging** - Complete access logs for compliance

### Security & Compliance
- **HIPAA-Aware Architecture** - Built with healthcare regulations in mind
- **Multi-Factor Authentication** - Required for all users
- **Role-Based Access Control** - Granular permissions system
- **Encryption** - Data encrypted at rest and in transit
- **Security Headers** - CSP, HSTS, and more
- **Audit Trails** - Comprehensive logging of PHI access
- **Session Management** - Automatic timeout, secure cookies
- **Input Validation** - Protection against XSS, SQL injection

### Technical Excellence
- **Next.js 15+** - Latest App Router with React Server Components
- **TypeScript** - Strict mode for type safety
- **Tailwind CSS** - Utility-first styling with custom healthcare design system
- **shadcn/ui** - Beautiful, accessible components
- **Clerk** - Enterprise authentication with MFA
- **Convex** - Real-time database with TypeScript schemas
- **Zod** - Runtime type validation
- **React Hook Form** - Performant form handling

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthcare-medical-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:
   - Clerk (authentication)
   - Convex (database)
   - Email service (HIPAA-compliant)
   - SMS service (HIPAA-compliant)
   - Other services as needed

   **⚠️ IMPORTANT:** Ensure all service providers have signed BAAs before handling PHI.

4. **Set up Convex**
   ```bash
   npx convex dev
   ```

5. **Set up Clerk**
   - Create a Clerk account at https://clerk.com
   - Create a new application
   - Enable Multi-Factor Authentication in settings
   - Configure user metadata for roles
   - Add your Clerk keys to `.env`

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
healthcare-medical-template/
├── app/                          # Next.js App Router
│   ├── (public)/                # Public pages (no auth required)
│   │   ├── about/
│   │   ├── services/
│   │   ├── providers/
│   │   ├── appointments/
│   │   ├── insurance/
│   │   ├── locations/
│   │   ├── blog/
│   │   └── contact/
│   ├── (auth)/                  # Protected pages (auth required)
│   │   ├── patient-portal/
│   │   ├── provider-portal/
│   │   ├── admin/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── api/                     # API routes
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
├── components/                  # React components
│   ├── ui/                     # shadcn/ui components
│   ├── forms/                  # Form components
│   ├── appointments/           # Appointment-related
│   ├── providers/              # Provider-related
│   ├── patient-portal/         # Patient portal components
│   ├── admin/                  # Admin components
│   ├── layout/                 # Layout components (header, footer)
│   └── shared/                 # Shared components
├── lib/                        # Utility functions
│   ├── utils.ts               # General utilities
│   ├── auth/                  # Authentication helpers
│   ├── validation/            # Zod schemas
│   ├── security/              # Security utilities
│   └── audit/                 # Audit logging
├── convex/                     # Convex backend
│   ├── schema.ts              # Database schema
│   └── functions/             # Convex functions
├── docs/                       # Documentation
│   ├── compliance/            # HIPAA compliance docs
│   ├── security/              # Security documentation
│   ├── setup/                 # Setup guides
│   ├── integration/           # Integration guides
│   └── user-guides/           # User guides
├── public/                     # Static assets
│   └── images/
├── middleware.ts               # Auth middleware
├── next.config.ts             # Next.js config
├── tailwind.config.ts         # Tailwind config
└── package.json
```

## 🔐 Security Features

### Authentication & Authorization
- Multi-factor authentication (MFA) required
- Role-based access control (RBAC)
- Session timeout (15 minutes default)
- Secure password requirements
- Account lockout after failed attempts

### Data Protection
- TLS 1.3 for data in transit
- Encryption at rest (database level)
- No PHI in URLs or logs
- Secure session management
- CSRF protection
- XSS prevention

### Compliance
- Audit logging for all PHI access
- User activity tracking
- Failed login attempt logging
- Data retention policies
- Secure data disposal procedures

### Infrastructure
- Security headers (CSP, HSTS, X-Frame-Options, etc.)
- Rate limiting
- Input validation and sanitization
- SQL injection prevention
- Regular security updates

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests (when implemented)
npm test
```

## 📦 Deployment

### Vercel (Recommended)

1. **Ensure BAA is in place**
   - Contact Vercel sales for HIPAA-compliant hosting
   - Sign Business Associate Agreement

2. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

3. **Set environment variables in Vercel dashboard**

4. **Configure security**
   - Enable HTTPS only
   - Set up custom domain
   - Configure DNS
   - Enable security headers

### Production Checklist

Before deploying to production:

- [ ] Legal review completed
- [ ] BAAs signed with all vendors
- [ ] Security assessment completed
- [ ] Staff HIPAA training completed
- [ ] Incident response plan documented
- [ ] Data backup procedures established
- [ ] Disaster recovery plan tested
- [ ] Privacy policies updated
- [ ] Terms and conditions reviewed
- [ ] Consent forms legally reviewed
- [ ] MFA enforced for all users
- [ ] Audit logging enabled
- [ ] Session timeout configured
- [ ] Rate limiting enabled
- [ ] Error tracking configured (with PHI scrubbing)
- [ ] Monitoring and alerting set up
- [ ] SSL certificate valid
- [ ] Security headers verified
- [ ] Penetration testing completed

## 📚 Documentation

Comprehensive documentation is available in the `/docs` directory:

- **[HIPAA Compliance Guide](./docs/compliance/HIPAA_GUIDE.md)** - Complete HIPAA compliance checklist
- **[Security Guide](./docs/security/SECURITY_GUIDE.md)** - Security best practices
- **[Setup Guide](./docs/setup/SETUP_GUIDE.md)** - Detailed setup instructions
- **[Integration Guides](./docs/integration/)** - EHR, e-prescribing, telehealth integration
- **[User Guides](./docs/user-guides/)** - For patients, providers, and admins

## 🔧 Customization

### Branding

1. Update colors in `tailwind.config.ts`
2. Replace logo in components
3. Update metadata in `app/layout.tsx`
4. Customize email templates
5. Update footer information

### Content

1. Edit page content in `app/` directory
2. Update provider profiles
3. Customize service descriptions
4. Add your location information
5. Update insurance providers accepted

### Features

Enable/disable features via environment variables:
```env
NEXT_PUBLIC_FEATURE_TELEHEALTH_ENABLED=true
NEXT_PUBLIC_FEATURE_ONLINE_PAYMENTS_ENABLED=true
NEXT_PUBLIC_FEATURE_PRESCRIPTION_REFILLS_ENABLED=true
```

## 🤝 Support

For questions or issues:
- Review the documentation in `/docs`
- Check the HIPAA compliance guide
- Consult with legal/compliance professionals
- Contact healthcare IT security consultants

## ⚖️ License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Important Disclaimers

1. **Not Medical Advice**: This software is a platform template and does not provide medical advice.

2. **Compliance Responsibility**: The user is solely responsible for ensuring HIPAA compliance. This template provides tools and best practices but does not guarantee compliance.

3. **Legal Review Required**: All policies, forms, and consent documents must be reviewed by qualified legal professionals.

4. **Security Assessment**: A professional security assessment is required before handling real PHI.

5. **Vendor BAAs Required**: Business Associate Agreements must be in place with all service providers before production use.

6. **No Warranty**: This software is provided "as is" without warranty of any kind.

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [Convex](https://convex.dev/)
- [Zod](https://zod.dev/)
- [Lucide Icons](https://lucide.dev/)

---

**Built with ❤️ for healthcare professionals who deserve better technology.**

**Remember: Patient privacy and data security are not optional. Always prioritize compliance and security over features.**
