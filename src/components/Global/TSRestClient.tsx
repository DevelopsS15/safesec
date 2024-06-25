import { initClient } from "@ts-rest/core";
import { rootContract } from "~/ts-rest/contracts/contracts";

export const TSRestClient = initClient(rootContract, {
  baseUrl: "http://localhost:3000/api/ts/v1",
});
