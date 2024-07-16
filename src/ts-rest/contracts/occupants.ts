import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { CampusCodes, TSRestRouteServerErrorSchema } from "~/lib/zod/schemas";

const c = initContract();
export const occupantsContract = c.router({
  getOccupantsByLocation: {
    method: "GET",
    path: "/occupants",
    responses: {
      200: z.record(
        z.string(),
        z.record(
          z.string().refine((value) => new RegExp(/^\d+$/).test(value), {
            message: "Key is not a numerical value",
          }),
          z.number(),
        ),
      ),
      500: TSRestRouteServerErrorSchema,
      401: z.null(),
    },
    query: z.object({
      campus: z.enum(CampusCodes),
      building: z.string().min(1).max(6).optional(),
    }),
  },
  getOccupantsForTimetable: {
    method: "POST",
    path: "/occupants/timetable",
    responses: {
      200: z
        .union([
          z
            .record(
              z.string(),
              z
                .record(
                  z.string(),
                  z
                    .record(
                      z
                        .string()
                        .refine((value) => new RegExp(/^\d+$/).test(value), {
                          message: "Key is not a numerical value",
                        }),
                      z.number(),
                    )
                    .optional(),
                )
                .optional(),
            )
            .optional(),
          z.null(),
        ])
        .array(),
      500: TSRestRouteServerErrorSchema,
      401: z.null(),
    },
    body: z.object({
      date: z
        .string()
        .refine((value) => {
          try {
            let date = new Date(value);
            return !isNaN(date.getTime()) ? true : "Invalid date";
          } catch (e) {
            return "Invalid date";
          }
        })
        .transform((value) => new Date(value)),
    }),
  },
});
