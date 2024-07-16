import { z } from "zod";

export const CampusCodes = ["A", "CEP", "C", "CC", "H", "M"] as const;
export type CampusCodesType = "A" | "CEP" | "C" | "CC" | "H" | "M";
export const TSRestRouteServerErrorSchema = z
  .string()
  .describe("If there is a non-sensitive error message, return it")
  .default("Unexpected Server Error");
