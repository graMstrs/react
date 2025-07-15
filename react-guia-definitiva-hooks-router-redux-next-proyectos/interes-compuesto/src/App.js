import {Formik, Form} from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import Balance from './components/Balance'
import Button from './components/Button'
import Container from './components/Container'
import Input from './components/Input'
import Section from './components/Section'


const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i = 0; i < years; i++){
    total = ( total + contribution ) * ( rate + 1 )
  }

  return Math.round(total);
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function App() {
  const [balance, setBalance] = useState('')
  const handleSubmit = ({ deposit, contribution, years, rate}) => {
    const val = compoundInterest(
                  Number(deposit), 
                  Number(contribution), 
                  Number(years), 
                  Number(rate)
                )
    setBalance(formatter.format (val));
  }
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

        onSubmit={handleSubmit}

        validationSchema={Yup.object({
          deposit: Yup.number().required('Campo requerido').typeError('Solo numeros por favor'),
          contribution: Yup.number().required('Campo requerido').typeError('Solo numeros por favor'),
          years: Yup.number().required('Campo requerido').typeError('Solo numeros por favor'),
          rate: Yup.number().required('Campo requerido').typeError('Solo numeros por favor').min(0, 'El valor minimo es 0').max(1, 'El valor maximo es 1'),
        })}  
      >
        
        <Form>
          <Input name="deposit" label="Deposito Inicial"/>
          <Input name="contribution" label="Contribucion Anual"/>
          <Input name="years" label="Anios"/>
          <Input name="rate" label="Interes Estimado"/>
          <Button type="submit"> Calcular</Button>
        </Form>

      </Formik>
      {balance !== '' ? <Balance>Balance final: {balance}</Balance> : null}
    </Section>
   </Container> 
  )
}

export default App;
