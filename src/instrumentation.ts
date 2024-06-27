import { connectDatabase } from "./lib";

export async function register() {
  await connectDatabase();
}
