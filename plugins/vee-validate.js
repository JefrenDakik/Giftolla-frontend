import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import { required, email } from 'vee-validate/dist/rules';


Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('email', {
  ...email,
  message: `The {_field_} field must be a valid email`
});

// Custom rules
extend('confirmedBy', {
  params: ['target'],
  // Target here is the value of the target field
  validate(value, { target }) {
    return value === target;
  },
  // here it is its name, because we are generating a message
  message: 'The {_field_} does not match the {target}'
});

extend('one-upper-letter', {
  message: field => 'The ' + field + ' field must contain at least one uppercase letter',
  validate: value => {
    const regex = /(?=.*[A-Z])/
    return regex.test(value)
  }
});

extend('one-lower-letter', {
  message: field => 'The ' + field + ' field must contain at least one lowercase letter',
  validate: value => {
    const regex = /(?=.*[a-z])/
    return regex.test(value)
  }
});

extend('one-numeric-char', {
  message: field => 'The ' + field + ' field must contain at least one numeric character',
  validate: value => {
    const regex = /(?=.*[0-9])/
    return regex.test(value)
  }
});


