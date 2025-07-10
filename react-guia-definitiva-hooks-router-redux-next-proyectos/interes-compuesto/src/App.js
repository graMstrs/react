import {Formik, Form} from 'formik'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'

function App() {
  const handleSubmit = () => {}
  return (
   <Container>
    <Section>
      <Formik 
        initialValues={{
          deposit:'',
          contribution:'',
          years: '',
          rate:'',
        }}
        onSubmit={handleSubmit}>
        
        <Form>
          <Input name="deposit" label="Deposito Inicial"/>
          <Input name="contribution" label="Contribucion Anual"/>
          <Input name="years" label="Anios"/>
          <Input name="rate" label="Interes Estimado"/>
          <Button> Calcular</Button>
        </Form>

      </Formik>
    </Section>
   </Container> 
  )
}

export default App;
