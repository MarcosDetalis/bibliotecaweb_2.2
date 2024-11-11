
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
 import LogInContainer from './Estilos/Login'


const LogInSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
});



function LogIn({sendForm}) {
  return (
    <LogInContainer>
      <div className='formWrapper'>
        <header>
          <img src='https://w4w7a3s7.stackpathcdn.com/wp-content/uploads/2018/10/logo.png' alt='logo'></img>
        </header>
        <Formik
          initialValues={{
            name: ''
          }}
          validationSchema={LogInSchema}
          onSubmit={(values, {resetForm}) => {
            sendForm(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='labelWrapper'>
                <label for='name'>Nombre</label>
              </div>
              <Field className={`${errors.name && touched.name ? 'input__error' : null}`} name='name' placeholder={errors.email && touched.email ? errors.email : null} />
              <label for='name'>Password</label>
              <Field className={`${errors.name && touched.name ? 'input__error' : null}`} name='name' placeholder={errors.email && touched.email ? errors.email : null} />
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </LogInContainer>
  );
}

export default LogIn;