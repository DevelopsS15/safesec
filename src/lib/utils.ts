import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortObjectByKeys(obj: unknown): unknown {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return obj; // Return non-object or null as-is
  }
  const _obj = obj as Record<string, unknown>;
  const sortedKeys = Object.keys(_obj).sort();
  const sortedObj: Record<string, unknown> = {};

  sortedKeys.forEach((key) => {
    sortedObj[key] = sortObjectByKeys(_obj[key]); // Recursively sort the value
  });

  return sortedObj;
}
