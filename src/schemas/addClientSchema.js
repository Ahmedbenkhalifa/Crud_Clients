import * as Yup from 'yup';

const addClientSchema = Yup.object({
  firstName: Yup.string().min(3, "Prénom doit être plus de 3 caractères").required("Prénom requis"),
  lastName: Yup.string().min(3, "Prénom doit être plus de 3 caractères").required("Nom requis"),
  age: Yup.number().max(130,"Age maximum 130 ans").required("Age requis"),
  region: Yup.string().required("Region requise"),
});

export default addClientSchema;
