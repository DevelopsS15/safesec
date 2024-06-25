import { initContract } from "@ts-rest/core";
import { occupantsContract } from "./occupants";

const c = initContract();
export const rootContract = c.router({
  occupants: occupantsContract,
});
