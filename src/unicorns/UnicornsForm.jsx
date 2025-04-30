import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

const UnicornForm = ({ createUnicorn, editUnicorn, deleteUnicorn, editingId, formData }) => {

  const initialValues = {
    name: formData.name || "",
    color: formData.color || "",
    age: formData.age ?? null, // 👈 cambio clave aquí
    power: formData.power || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    color: Yup.string().required("El color es requerido"),
    age: Yup.number()
      .typeError("La edad debe ser un número")
      .nullable()
      .required("La edad es requerida"),
    power: Yup.string().required("El poder es requerido"),
  });

  const handleSubmit = (values) => {
    const finalValues = {
      ...values,
      age: Number(values.age),
    };

    if (editingId) {
      editUnicorn(editingId, finalValues);
    } else {
      createUnicorn(finalValues);
    }
  };

  const handleDelete = () => {
    if (editingId) {
      deleteUnicorn(editingId);
    }
  };

  return (
    <div className="p-4">
      <h2>{editingId ? "Editar Unicornio" : "Crear Unicornio"}</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, errors, touched, handleBlur, setFieldValue, isValid }) => (
          <Form className="p-fluid p-formgrid p-grid">

            {/* Nombre */}
            <div className="p-field p-col-12 p-md-4">
              <Field name="name">
                {({ field }) => (
                  <InputText
                    {...field}
                    placeholder="Nombre"
                    className={touched.name && errors.name ? "p-invalid" : ""}
                  />
                )}
              </Field>
              <small className="p-error">
                <ErrorMessage name="name" />
              </small>
            </div>

            {/* Color */}
            <div className="p-field p-col-12 p-md-4">
              <Field name="color">
                {({ field }) => (
                  <InputText
                    {...field}
                    placeholder="Color"
                    className={touched.color && errors.color ? "p-invalid" : ""}
                  />
                )}
              </Field>
              <small className="p-error">
                <ErrorMessage name="color" />
              </small>
            </div>

            {/* Edad */}
            <div className="p-field p-col-12 p-md-4">
              <Field name="age">
                {({ field }) => (
                  <InputNumber
                    value={field.value}
                    onValueChange={(e) => setFieldValue("age", e.value ?? null)} // 👈 manejo de null si se borra el número
                    onBlur={handleBlur}
                    placeholder="Edad"
                    useGrouping={false}
                    min={1}
                    className={touched.age && errors.age ? "p-invalid" : ""}
                  />
                )}
              </Field>
              <small className="p-error">
                <ErrorMessage name="age" />
              </small>
            </div>

            {/* Poder */}
            <div className="p-field p-col-12 p-md-4">
              <Field name="power">
                {({ field }) => (
                  <InputText
                    {...field}
                    placeholder="Poder"
                    className={touched.power && errors.power ? "p-invalid" : ""}
                  />
                )}
              </Field>
              <small className="p-error">
                <ErrorMessage name="power" />
              </small>
            </div>

            {/* Botón */}
            <div className="p-field p-col-12 p-md-4">
              <Button
                type="submit"
                label={editingId ? "Actualizar" : "Crear"}
                icon={editingId ? "pi pi-check" : "pi pi-plus"}
                disabled={!isValid}
              />
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UnicornForm;
