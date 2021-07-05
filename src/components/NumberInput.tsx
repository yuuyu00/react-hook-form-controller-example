import { useController } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { InputProps } from "../types";

export const NumberInput = ({ control, label, name }: InputProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ marginBottom: 5 }}>
        <label>{label}</label>
      </div>
      <TextField
        value={field.value}
        onChange={(e) => {
          const parsedValue = parseInt(e.target.value, 10);
          field.onChange(isNaN(parsedValue) ? e.target.value : parsedValue);
        }}
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
      />
    </div>
  );
};
