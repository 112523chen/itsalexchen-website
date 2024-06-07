"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { env } from "./env";

// Get the PostHog key from the environment

const key = env.NEXT_PUBLIC_POSTHOG_KEY;
const host = env.NEXT_PUBLIC_POSTHOG_HOST;

if (!key) {
  throw new Error("PostHog key is not set");
}

if (!host) {
  throw new Error("PostHog host is not set");
}

if (typeof window !== "undefined" && env.NEXT_PUBLIC_APP_ENV === "production") {
  posthog.init(key, {
    api_host: host,
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
