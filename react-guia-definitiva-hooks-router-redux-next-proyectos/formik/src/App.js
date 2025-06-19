import { Formik, Form, Field, ErrorMessage } from 'formik'

const validate = (values) => {
    const errors ={}

    if(!values.name){
      errors.name = 'Requerido'
    } else if (values.name.length < 5){
      errors.name = 'El nombre es muy corto'
    }
    
    if(!values.lastName){
      errors.lastName = 'Requerido'
    } else if (values.lastName.length < 5){
      errors.lastName = 'El apellido es muy corto'
    }

    if(!values.email){
      errors.email = 'Requerido'
    } else if (values.email.length < 5){
      errors.email = 'El email es muy corto'
    }

    return errors
  }

function App() {
  return (
    <Formik
        initialValues= {{ name:'', lastName:'', email:'', }}
        validate = {validate}
        onSubmit = {values => console.log(values)}
    >
        <Form>
            <TextInput name=''>
            <label>Nombre</label>
            <Field name='name' type='text'/>
            <ErrorMessage name='name'/>
            <br/>

            <label>Apellido</label>
            <Field name='lastName' type='text'/>
            <ErrorMessage name='lastName'/>
            <br/>

            <label>Correo</label>
            <Field name='email' type='email'/>
            <ErrorMessage name='email'/>
            <br/>

            <button type='submit'>Enviar</button>
        </Form>
    </Formik>
  );
}

export default App;
