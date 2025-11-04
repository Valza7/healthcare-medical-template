import { z } from "zod";

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContact: z.enum(["email", "phone"]),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Appointment booking validation schema
 */
export const appointmentBookingSchema = z.object({
  providerId: z.string().min(1, "Please select a provider"),
  serviceType: z.string().min(1, "Please select a service"),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string().min(1, "Please select a time"),
  reason: z.string().min(10, "Please provide a reason for visit (minimum 10 characters)"),
  isNewPatient: z.boolean(),
  insuranceProvider: z.string().optional(),
  notes: z.string().optional(),
});

export type AppointmentBookingData = z.infer<typeof appointmentBookingSchema>;

/**
 * Patient registration validation schema
 */
export const patientRegistrationSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  middleName: z.string().optional(),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"]),
  ssn: z.string().regex(/^\d{3}-\d{2}-\d{4}$/, "SSN must be in format XXX-XX-XXXX").optional(),

  // Contact Information
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),

  // Emergency Contact
  emergencyContactName: z.string().min(2, "Emergency contact name is required"),
  emergencyContactPhone: z.string().min(10, "Emergency contact phone is required"),
  emergencyContactRelationship: z.string().min(2, "Relationship is required"),

  // Insurance Information
  hasInsurance: z.boolean(),
  insuranceProvider: z.string().optional(),
  insurancePolicyNumber: z.string().optional(),
  insuranceGroupNumber: z.string().optional(),

  // Consent
  consentToTreatment: z.boolean().refine((val) => val === true, {
    message: "You must consent to treatment",
  }),
  consentToPrivacyPractices: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge the privacy practices",
  }),
  consentToElectronicCommunication: z.boolean(),
});

export type PatientRegistrationData = z.infer<typeof patientRegistrationSchema>;

/**
 * Secure message validation schema
 */
export const secureMessageSchema = z.object({
  recipientId: z.string().min(1, "Please select a recipient"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  priority: z.enum(["normal", "urgent"]),
  attachments: z.array(z.instanceof(File)).max(5, "Maximum 5 attachments allowed").optional(),
});

export type SecureMessageData = z.infer<typeof secureMessageSchema>;

/**
 * Medical history form validation schema
 */
export const medicalHistorySchema = z.object({
  // Current Medications
  currentMedications: z.array(
    z.object({
      name: z.string().min(1),
      dosage: z.string().min(1),
      frequency: z.string().min(1),
      prescribedBy: z.string().optional(),
    })
  ),

  // Allergies
  allergies: z.array(
    z.object({
      allergen: z.string().min(1),
      reaction: z.string().min(1),
      severity: z.enum(["mild", "moderate", "severe"]),
    })
  ),

  // Medical Conditions
  medicalConditions: z.array(z.string()),

  // Surgical History
  surgicalHistory: z.array(
    z.object({
      procedure: z.string().min(1),
      date: z.date(),
      hospital: z.string().optional(),
    })
  ),

  // Family History
  familyHistory: z.object({
    diabetes: z.boolean(),
    heartDisease: z.boolean(),
    cancer: z.boolean(),
    hypertension: z.boolean(),
    other: z.string().optional(),
  }),

  // Lifestyle
  lifestyle: z.object({
    smoker: z.boolean(),
    drinker: z.boolean(),
    exerciseFrequency: z.enum(["none", "occasional", "regular", "frequent"]),
  }),
});

export type MedicalHistoryData = z.infer<typeof medicalHistorySchema>;

/**
 * Prescription refill request validation schema
 */
export const prescriptionRefillSchema = z.object({
  medicationId: z.string().min(1, "Please select a medication"),
  pharmacyId: z.string().min(1, "Please select a pharmacy"),
  urgency: z.enum(["routine", "urgent"]),
  notes: z.string().optional(),
});

export type PrescriptionRefillData = z.infer<typeof prescriptionRefillSchema>;

/**
 * Profile update validation schema
 */
export const profileUpdateSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),
  preferredLanguage: z.string(),
  communicationPreferences: z.object({
    email: z.boolean(),
    sms: z.boolean(),
    phone: z.boolean(),
  }),
});

export type ProfileUpdateData = z.infer<typeof profileUpdateSchema>;

/**
 * Insurance verification schema
 */
export const insuranceVerificationSchema = z.object({
  provider: z.string().min(1, "Insurance provider is required"),
  policyNumber: z.string().min(1, "Policy number is required"),
  groupNumber: z.string().optional(),
  subscriberName: z.string().min(2, "Subscriber name is required"),
  subscriberDateOfBirth: z.date({
    required_error: "Subscriber date of birth is required",
  }),
  relationship: z.enum(["self", "spouse", "child", "other"]),
  effectiveDate: z.date().optional(),
  frontImageUrl: z.string().url().optional(),
  backImageUrl: z.string().url().optional(),
});

export type InsuranceVerificationData = z.infer<typeof insuranceVerificationSchema>;

/**
 * Consent form schema
 */
export const consentFormSchema = z.object({
  patientName: z.string().min(2, "Patient name is required"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  consentType: z.enum([
    "treatment",
    "privacy",
    "telehealth",
    "research",
    "photography",
    "release-of-information"
  ]),
  consentText: z.string().min(1),
  signature: z.string().min(1, "Signature is required"),
  signatureDate: z.date({
    required_error: "Signature date is required",
  }),
  witnessName: z.string().optional(),
  witnessSignature: z.string().optional(),
});

export type ConsentFormData = z.infer<typeof consentFormSchema>;

/**
 * Health tracking entry schema
 */
export const healthTrackingSchema = z.object({
  type: z.enum([
    "blood-pressure",
    "glucose",
    "weight",
    "temperature",
    "heart-rate",
    "oxygen-saturation"
  ]),
  value: z.string().min(1, "Value is required"),
  secondaryValue: z.string().optional(), // For blood pressure (diastolic)
  unit: z.string().min(1, "Unit is required"),
  notes: z.string().optional(),
  recordedAt: z.date(),
});

export type HealthTrackingData = z.infer<typeof healthTrackingSchema>;
