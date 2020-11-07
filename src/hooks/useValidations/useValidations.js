import * as Yup from "yup"

// SignUp Validation
const required = "Este campo es requerido"
const email = Yup.string()
  .email("No es un correo electrónico válido")
  .required(required)
const password = Yup.string()
  .min(8, "La contraseña debe tener al menos 8 cáracteres")
  .max(16, "La contraseña debe tener máximo 16 cáracteres")
  .required(required)

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required(required),
  dni: Yup.string()
    .max(11, "Debe contener al menos 11 cáracteres")
    .required(required),
  email,
  password,
})

const SignInSchema = Yup.object().shape({
  email,
  password,
})

export const newProductSchema = Yup.object().shape({
  name: Yup.string().required(required),
  company: Yup.string().required(required),
  url: Yup.string().required(required).url("No es una URL válida"),
  description: Yup.string().required(required),
  image: Yup.mixed().required("La imagen es requerida"),
})

export default function useValidations() {
  return { SignUpSchema, SignInSchema, newProductSchema }
}
