import { Control, FieldValues } from "react-hook-form";

export type InputProps = {
  name: string;
  label: string;
  control: Control<FieldValues>;
};
