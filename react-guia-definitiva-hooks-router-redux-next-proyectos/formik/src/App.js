import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Select from './components/Select'
import Radio from './components/Radio'


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

    if(!values.radio){
      errors.radio = 'Requerido'
    }

    return errors
  }

function App() {
  return (
    <Formik
        initialValues= {{ name:'', lastName:'', email:'', chancho:'', radio:'',}}
        validate = {validate}
        onSubmit = {values => console.log(values)}
    >
        
        <Form>
            <TextInput name='name' label='Nombre'/>         
            <br/>

            <TextInput name='lastName' label='Apellido'/>  
            <br/>

            <TextInput name='email' label='Correo'/>
            <br/>

            <Select label='Tipo de chancho' name='chancho'>
              <option value=''> Seleccione chancho </option>
              <option value='felipe'> Felipe </option>
              <option value='chanchitofeliz'> Chanchito feliz </option>
              <option value='chanchitotriste'> Chanchito triste </option>
            </Select>
            <br/>

            <Checkbox name='accept'>
              Aceptar terminos y condiciones
            </Checkbox>
            <br/>

            <Radio name='radio' value='chanchito1' label='chanchito 1'/>
            <Radio name='radio' value='chanchito2' label='chanchito 2'/>
            <Radio name='radio' value='chanchito3' label='chanchito 3'/>
            <ErrorMessage name='radio'/>
            <br/>

            <button type='submit'>Enviar</button>
        </Form>

    </Formik>
  );
}

export default App;
