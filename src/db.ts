import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const turso = createClient({
  url: Bun.env.TURSO_DATABASE_URL!,
  authToken: Bun.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);
