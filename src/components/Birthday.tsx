import { useController } from "react-hook-form";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { InputProps } from "../types";

export const BirthdayInput = ({ control, label, name }: InputProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <div style={{ marginBottom: 20 }}>
      <div className={fieldState.error ? "error field" : "2019/02/01"}>
        <div>
          <div style={{ marginBottom: 5 }}>
            <label>{label}</label>
          </div>
          <KeyboardDatePicker
            value={field.value}
            format="YYYY/MM/DD"
            onChange={(date) => field.onChange(date?.toDate())}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        </div>
      </div>
    </div>
  );
};
