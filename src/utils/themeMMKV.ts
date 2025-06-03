import { z } from "zod";
import { createMMKVSchema } from "./mmkv";

export const themeMMKV = createMMKVSchema({
  key: "theme",
  value: z.object({
    theme: z.enum(["light", "dark", "system"]),
  }),
});
