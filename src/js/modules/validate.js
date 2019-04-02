/* eslint no-new: 0 */
import 'just-validate/dist/js/just-validate'

new window.JustValidate('.js-contact-form', {
  Rules: {
    email: {
      required: true,
      email: true
    },
    name: {
      required: true,
      minLength: 3,
      maxLength: 15
    },
    subject: {
      required: true,
      minLength: 20,
      maxLength: 300
    },
    text: {
      required: true,
      minLength: 20,
      maxLength: 9999
    }
  },
  Messages: {
    required: 'The field is required',
    email: 'Please, type a valid email',
    maxLength: 'The field must contain a maximum of :value characters',
    minLength: 'The field must contain a minimum of :value characters',
    remote: 'Email already exists'
  }
})
