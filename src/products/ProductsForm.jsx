import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "primereact/button";
import * as Yup from "yup";

const ProductForm = ({ onCreate, onSaveEdit, isEditing, initialValues }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    price: Yup.number()
      .typeError("El precio debe ser un número") // tipo nro
      .positive("El precio debe ser positivo") //que sea positivos
      .required("El precio es obligatorio"), //que sea obligatorio
    category: Yup.string().required("La categoría es obligatoria"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (isEditing) {
      onSaveEdit(values);
    } else {
      onCreate(values);
    }
    resetForm();
  };

  return (
    <div className="p-4">
      <h2>Gestión de Unicornios</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-4">
              <Field name="name" placeholder="Nombre" className="p-inputtext" />
              <ErrorMessage name="name" component="small" className="p-error" />
            </div>

            <div className="p-field p-col-12 p-md-4">
              {/* input tipo numero para que solamente entren nros y no letras */}
              <Field
                name="price"
                placeholder="Precio"
                className="p-inputtext"
                type="number" //solamente tipo numerico
                min="0" //solo valores positivos
              />
              <ErrorMessage name="price" component="small" className="p-error" />
            </div>

            <div className="p-field p-col-12 p-md-4">
              <Field name="category" placeholder="Categoría" className="p-inputtext" />
              <ErrorMessage name="category" component="small" className="p-error" />
            </div>

            <div className="p-field p-col-12 p-md-12">
              <Button
                type="submit"
                label={isEditing ? "Guardar Cambios" : "Agregar Producto"}
                icon={isEditing ? "pi pi-save" : "pi pi-plus"}
                disabled={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
