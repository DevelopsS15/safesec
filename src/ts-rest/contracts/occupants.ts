import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { CampusCodes } from "~/lib/zod/schemas";

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
      400: z
        .string()
        .optional()
        .describe("If there is a non-sensitive error message, return it"),
      401: z.null(),
    },
    query: z.object({
      campus: z.enum(CampusCodes),
      building: z.string().min(1).max(6).optional(),
    }),
  },
  //   getCourses: {
  //     method: "GET",
  //     path: "/courses",
  //     responses: {
  //       200: PrismaCourseSchema.array(),
  //     },
  //     summary: "Get all courses",
  //   },
  //   createCourse: {
  //     method: "POST",
  //     path: `/courses`,
  //     responses: {
  //       201: PrismaCourseSchema,
  //     },
  //     body: PrismaCreateCourseSchema,
  //     summary: "Create a course",
  //     metadata: { role: "course" } as const,
  //   },
});
