import { v } from "convex/values";
import { query, mutation } from "../_generated/server";

/**
 * Get upcoming appointments for a patient
 */
export const getUpcoming = query({
  args: { patientId: v.id("users") },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db
      .query("appointments")
      .withIndex("by_patient", (q) => q.eq("patientId", args.patientId))
      .filter((q) => q.gte(q.field("scheduledDate"), now))
      .collect();
  },
});

/**
 * Get provider's appointments for a date
 */
export const getProviderSchedule = query({
  args: {
    providerId: v.id("users"),
    date: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("appointments")
      .withIndex("by_provider", (q) => q.eq("providerId", args.providerId))
      .filter((q) => q.eq(q.field("scheduledDate"), args.date))
      .collect();
  },
});

/**
 * Create appointment with audit log
 */
export const create = mutation({
  args: {
    patientId: v.id("users"),
    providerId: v.id("users"),
    locationId: v.id("locations"),
    appointmentType: v.string(),
    serviceType: v.string(),
    scheduledDate: v.number(),
    scheduledTime: v.string(),
    duration: v.number(),
    visitReason: v.string(),
    isTelehealth: v.boolean(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    const appointmentId = await ctx.db.insert("appointments", {
      ...args,
      status: "scheduled",
      reminderSent: false,
      confirmationSent: false,
      createdAt: now,
      updatedAt: now,
    });

    // Create audit log
    await ctx.db.insert("auditLogs", {
      userId: args.patientId,
      action: "create",
      resourceType: "appointment",
      resourceId: appointmentId,
      details: "Appointment created",
      timestamp: now,
    });

    return appointmentId;
  },
});
