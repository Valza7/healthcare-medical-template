import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Convex Database Schema for Healthcare Medical Platform
 *
 * IMPORTANT: This schema stores non-PHI and minimal PHI data.
 * Full Electronic Health Records (EHR) should integrate with certified systems.
 * All sensitive data should be encrypted at rest and in transit.
 */

export default defineSchema({
  // User Profiles (linked to Clerk authentication)
  users: defineTable({
    clerkUserId: v.string(),
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    role: v.union(
      v.literal("patient"),
      v.literal("doctor"),
      v.literal("nurse"),
      v.literal("staff"),
      v.literal("admin")
    ),
    phone: v.optional(v.string()),
    dateOfBirth: v.optional(v.string()),
    gender: v.optional(v.string()),
    preferredLanguage: v.optional(v.string()),
    profileImageUrl: v.optional(v.string()),
    isActive: v.boolean(),
    mfaEnabled: v.boolean(),
    lastLoginAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_clerk_user_id", ["clerkUserId"])
    .index("by_email", ["email"])
    .index("by_role", ["role"]),

  // Provider Profiles
  providers: defineTable({
    userId: v.id("users"),
    npiNumber: v.string(), // National Provider Identifier
    specialty: v.string(),
    subspecialties: v.array(v.string()),
    credentials: v.string(), // e.g., "MD, FACC"
    bio: v.string(),
    education: v.array(
      v.object({
        degree: v.string(),
        institution: v.string(),
        year: v.number(),
      })
    ),
    certifications: v.array(
      v.object({
        name: v.string(),
        issuedBy: v.string(),
        year: v.number(),
      })
    ),
    languages: v.array(v.string()),
    yearsOfExperience: v.number(),
    acceptingNewPatients: v.boolean(),
    availableForTelehealth: v.boolean(),
    officeLocations: v.array(v.id("locations")),
    insurancesAccepted: v.array(v.string()),
    rating: v.optional(v.number()),
    reviewCount: v.optional(v.number()),
  })
    .index("by_user_id", ["userId"])
    .index("by_specialty", ["specialty"])
    .index("by_accepting_patients", ["acceptingNewPatients"]),

  // Locations/Facilities
  locations: defineTable({
    name: v.string(),
    type: v.union(v.literal("main"), v.literal("satellite"), v.literal("urgent-care")),
    address: v.string(),
    city: v.string(),
    state: v.string(),
    zipCode: v.string(),
    phone: v.string(),
    fax: v.optional(v.string()),
    email: v.optional(v.string()),
    hoursOfOperation: v.object({
      monday: v.string(),
      tuesday: v.string(),
      wednesday: v.string(),
      thursday: v.string(),
      friday: v.string(),
      saturday: v.string(),
      sunday: v.string(),
    }),
    services: v.array(v.string()),
    accessibilityFeatures: v.array(v.string()),
    parkingInfo: v.optional(v.string()),
    publicTransportInfo: v.optional(v.string()),
    imageUrls: v.optional(v.array(v.string())),
    isActive: v.boolean(),
  }).index("by_type", ["type"]),

  // Appointments
  appointments: defineTable({
    patientId: v.id("users"),
    providerId: v.id("users"),
    locationId: v.id("locations"),
    appointmentType: v.string(),
    serviceType: v.string(),
    scheduledDate: v.number(),
    scheduledTime: v.string(),
    duration: v.number(), // in minutes
    status: v.union(
      v.literal("scheduled"),
      v.literal("confirmed"),
      v.literal("checked-in"),
      v.literal("in-progress"),
      v.literal("completed"),
      v.literal("cancelled"),
      v.literal("no-show")
    ),
    visitReason: v.string(),
    notes: v.optional(v.string()),
    isTelehealth: v.boolean(),
    telehealthLink: v.optional(v.string()),
    reminderSent: v.boolean(),
    confirmationSent: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
    cancelledAt: v.optional(v.number()),
    cancelledBy: v.optional(v.id("users")),
    cancellationReason: v.optional(v.string()),
  })
    .index("by_patient", ["patientId"])
    .index("by_provider", ["providerId"])
    .index("by_date", ["scheduledDate"])
    .index("by_status", ["status"]),

  // Secure Messages
  messages: defineTable({
    senderId: v.id("users"),
    recipientId: v.id("users"),
    subject: v.string(),
    body: v.string(),
    priority: v.union(v.literal("normal"), v.literal("urgent")),
    isRead: v.boolean(),
    readAt: v.optional(v.number()),
    threadId: v.optional(v.id("messages")), // For threading
    attachments: v.optional(
      v.array(
        v.object({
          name: v.string(),
          url: v.string(),
          type: v.string(),
          size: v.number(),
        })
      )
    ),
    createdAt: v.number(),
  })
    .index("by_sender", ["senderId"])
    .index("by_recipient", ["recipientId"])
    .index("by_thread", ["threadId"]),

  // Patient Forms (non-clinical)
  forms: defineTable({
    patientId: v.id("users"),
    formType: v.string(),
    formData: v.any(), // Store as JSON
    status: v.union(v.literal("draft"), v.literal("submitted"), v.literal("reviewed")),
    submittedAt: v.optional(v.number()),
    reviewedBy: v.optional(v.id("users")),
    reviewedAt: v.optional(v.number()),
    signature: v.optional(v.string()),
    signatureDate: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_patient", ["patientId"])
    .index("by_type", ["formType"])
    .index("by_status", ["status"]),

  // Insurance Information (encrypted)
  insurance: defineTable({
    patientId: v.id("users"),
    provider: v.string(),
    policyNumber: v.string(), // Should be encrypted
    groupNumber: v.optional(v.string()),
    subscriberName: v.string(),
    subscriberDateOfBirth: v.string(),
    relationship: v.string(),
    effectiveDate: v.optional(v.string()),
    isPrimary: v.boolean(),
    cardFrontUrl: v.optional(v.string()),
    cardBackUrl: v.optional(v.string()),
    verificationStatus: v.union(
      v.literal("pending"),
      v.literal("verified"),
      v.literal("rejected")
    ),
    verifiedAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_patient", ["patientId"]),

  // Prescriptions (metadata only, not clinical data)
  prescriptions: defineTable({
    patientId: v.id("users"),
    providerId: v.id("users"),
    medicationName: v.string(),
    dosage: v.string(),
    frequency: v.string(),
    quantity: v.number(),
    refills: v.number(),
    refillsRemaining: v.number(),
    prescribedDate: v.number(),
    expirationDate: v.number(),
    pharmacyId: v.optional(v.id("pharmacies")),
    status: v.union(
      v.literal("active"),
      v.literal("expired"),
      v.literal("discontinued")
    ),
    instructions: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_patient", ["patientId"])
    .index("by_status", ["status"]),

  // Pharmacies
  pharmacies: defineTable({
    name: v.string(),
    address: v.string(),
    city: v.string(),
    state: v.string(),
    zipCode: v.string(),
    phone: v.string(),
    fax: v.optional(v.string()),
    isPreferred: v.boolean(),
    is24Hours: v.boolean(),
    createdAt: v.number(),
  }),

  // Refill Requests
  refillRequests: defineTable({
    patientId: v.id("users"),
    prescriptionId: v.id("prescriptions"),
    pharmacyId: v.id("pharmacies"),
    urgency: v.union(v.literal("routine"), v.literal("urgent")),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("denied"),
      v.literal("sent-to-pharmacy")
    ),
    notes: v.optional(v.string()),
    reviewedBy: v.optional(v.id("users")),
    reviewedAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_patient", ["patientId"])
    .index("by_status", ["status"]),

  // Health Tracking Data
  healthTracking: defineTable({
    patientId: v.id("users"),
    type: v.string(), // "blood-pressure", "glucose", "weight", etc.
    value: v.string(),
    secondaryValue: v.optional(v.string()), // For blood pressure (diastolic)
    unit: v.string(),
    notes: v.optional(v.string()),
    recordedAt: v.number(),
    createdAt: v.number(),
  })
    .index("by_patient", ["patientId"])
    .index("by_type", ["type"])
    .index("by_date", ["recordedAt"]),

  // Blog Posts / Health Articles
  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    authorId: v.optional(v.id("users")), // Provider who wrote it
    category: v.string(),
    tags: v.array(v.string()),
    featuredImageUrl: v.optional(v.string()),
    isPublished: v.boolean(),
    publishedAt: v.optional(v.number()),
    medicallyReviewed: v.boolean(),
    reviewedBy: v.optional(v.id("users")),
    reviewedAt: v.optional(v.number()),
    viewCount: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_published", ["isPublished"]),

  // Consent Forms
  consents: defineTable({
    patientId: v.id("users"),
    consentType: v.string(),
    consentText: v.string(),
    agreed: v.boolean(),
    signature: v.string(),
    signatureDate: v.number(),
    ipAddress: v.optional(v.string()),
    witnessName: v.optional(v.string()),
    witnessSignature: v.optional(v.string()),
    expiresAt: v.optional(v.number()),
    revokedAt: v.optional(v.number()),
    createdAt: v.number(),
  })
    .index("by_patient", ["patientId"])
    .index("by_type", ["consentType"]),

  // Audit Logs (HIPAA requirement)
  auditLogs: defineTable({
    userId: v.id("users"),
    action: v.string(), // "view", "create", "update", "delete", "download", "print"
    resourceType: v.string(), // "appointment", "message", "medical-record", etc.
    resourceId: v.optional(v.string()),
    details: v.optional(v.string()),
    ipAddress: v.optional(v.string()),
    userAgent: v.optional(v.string()),
    timestamp: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_action", ["action"])
    .index("by_resource", ["resourceType"])
    .index("by_timestamp", ["timestamp"]),

  // System Settings
  settings: defineTable({
    key: v.string(),
    value: v.any(),
    updatedBy: v.id("users"),
    updatedAt: v.number(),
  }).index("by_key", ["key"]),
});
