import * as yup from 'yup';
import 'yup-phone';

export const validationSchemaAddContact = yup.object().shape({
  name: yup
    .string('Enter your name')
    .max(20, 'Name shoul contain max 20 letters')
    .required(
      'Name is required. Name contains only letters, apostrophe, dashes and spaces'
    ),

  number: yup
    .string('Enter your number')
    .phone(
      null,
      true,
      'Invalid phone number. Number must start with "+" and have at least 10 digits'
    )
    .required(
      'Number is required. It have to strat with "+" and have at least 10 digits'
    ),
});

export const validationSchemaRegister = yup.object().shape({
  name: yup
    .string('Enter your name')
    .required(
      'Name is required. Name contains only letters, apostrophe, dashes and spaces'
    ),
  email: yup
    .string('Enter your email')
    .email('Enter valid email')
    .required('Email is required.'),
  password: yup
    .string('Enter your password')
    .min(7, 'Password should be of min 7 charecters length')
    .required('Password is required.'),
});

export const validationSchemaLogIn = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter valid email')
    .required('Email is required.'),
  password: yup
    .string('Enter your password')
    .min(7, 'Password should be of min 7 charecters length')
    .required('Password is required.'),
});
