import { v } from "convex/values";
import { query, mutation } from "../_generated/server";

/**
 * Get user by Clerk ID
 */
export const getByClerkId = query({
  args: { clerkUserId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerk_user_id", (q) => q.eq("clerkUserId", args.clerkUserId))
      .first();
  },
});

/**
 * Create or update user from Clerk webhook
 */
export const upsertFromClerk = mutation({
  args: {
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
    profileImageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_user_id", (q) => q.eq("clerkUserId", args.clerkUserId))
      .first();

    const now = Date.now();

    if (existing) {
      await ctx.db.patch(existing._id, {
        ...args,
        updatedAt: now,
      });
      return existing._id;
    } else {
      return await ctx.db.insert("users", {
        ...args,
        isActive: true,
        mfaEnabled: false,
        createdAt: now,
        updatedAt: now,
      });
    }
  },
});
