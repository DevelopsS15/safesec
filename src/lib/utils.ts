import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CampusCodesType } from "./zod/schemas";

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

export const CampusBuildingAbbreviation: Record<CampusCodesType, string> = {
  A: "AB",
  C: "CH",
  CC: "CC",
  CEP: "CEP",
  H: "HO",
  M: "MI",
};
// https://www.ufv.ca/operations/floor-plans/#d.en.995793
// Building Codes as per start of SSRMEET_BLDG_CODE
