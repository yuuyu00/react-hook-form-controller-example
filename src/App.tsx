import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "./validation";
import { TextInput, NumberInput, BirthdayInput } from "./components";

export const App = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = (value: { [x: string]: any }) => {
    console.log("onSubmit");
    console.log(value);
  };

  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <div className="App" style={{ padding: 50 }}>
        <TextInput control={control} name="name" label="名前" />
        <NumberInput control={control} name="age" label="年齢" />
        <BirthdayInput control={control} name="birthday" label="生年月日" />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </div>
    </MuiPickersUtilsProvider>
  );
};
