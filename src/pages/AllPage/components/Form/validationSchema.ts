import * as yup from "yup";

const requiredMessage = "Este campo es obligatorio";
export const validationSchema = yup.object({
  name: yup.string().required(requiredMessage),
  description: yup.string().required(requiredMessage),
  label: yup.string().required(requiredMessage),
});
