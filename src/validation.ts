import * as z from "zod";
import dayjs from "dayjs";

export const validationSchema = z.object({
  name: z.string().nonempty(),
  age: z.number().min(18).max(100),
  birthday: z
    .date()
    .refine((value) => dayjs().diff(value) > 0, {
      message: "誕生日は過去の日付を入力してください",
    }),
  memo: z.string().optional(),
});

export type ValidationType = z.infer<typeof validationSchema>;
