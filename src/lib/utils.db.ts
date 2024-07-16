import oracledb from "oracledb";
import { env } from "~/env";

export const getOracleConnection = () =>
  oracledb.getConnection({
    user: env.ORACLE_DB_USER,
    password: env.ORACLE_DB_PASSWORD,
    connectString: env.DATABASE_URL,
  });
