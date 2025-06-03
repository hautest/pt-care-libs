import { z } from "zod";
import { createMMKVSchema } from "./mmkv";

export const {
  setValue: setThemeMMKV,
  getValue: getThemeMMKV,
  key: themeKeyMMKV,
  resetValue: resetThemeMMKV,
} = createMMKVSchema({
  key: "theme",
  value: z.object({
    theme: z.enum(["light", "dark", "system"]),
  }),
});
