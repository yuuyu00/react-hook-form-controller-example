import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";
import { InputProps } from "../types";

export const TextInput = ({ control, label, name }: InputProps) => {
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
        onChange={field.onChange}
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
      />
    </div>
  );
};
