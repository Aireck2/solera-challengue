import { FC } from "react";
import { useFormik } from "formik";

import { ServiceValues } from "@/models/service";
import { Button, Card, FormItem, Input, Select } from "@/components/basics";

import { validationSchema } from "./validationSchema";

interface ServiceFormProps {
  handleSubmit: (values: ServiceValues) => void;
  initialValues: any;
  handleCancel?: () => void;
}

export const ServiceForm: FC<ServiceFormProps> = (props) => {
  const formik = useFormik<ServiceValues>({
    initialValues: props.initialValues,
    onSubmit: (values, { resetForm }) => {
      props.handleSubmit(values);
      resetForm();
    },
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card
        title={"Servicio"}
        actions={
          <>
            <Button type="success" htmlType="submit">
              Grabar
            </Button>
            {props?.handleCancel && (
              <Button type="error" onClick={props.handleCancel}>
                Cancelar
              </Button>
            )}
          </>
        }
      >
        <>
          <FormItem
            label="Nombre"
            errors={formik.errors.name}
            touched={formik.touched.name}
          >
            <Input
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </FormItem>
          <FormItem
            label="Description"
            errors={formik.errors.description}
            touched={formik.touched.description}
          >
            <Input
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </FormItem>
          <FormItem
            label="Etiqueta"
            errors={formik.errors.label}
            touched={formik.touched.label}
          >
            <Select
              name="label"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={"Select one option"}
              value={formik.values.label}
              options={
                <>
                  <option value="">(Select an option)</option>
                  <option value="Autos">Autos</option>
                  <option value="Salud">Salud</option>
                  <option value="Hogar">Hogar</option>
                </>
              }
            />
          </FormItem>
        </>
      </Card>
    </form>
  );
};
