const validation = {
  name: {
    maxLength: {
      value: 155,
      message: 'Max length is 155',
    },
    required: {
      value: true,
      message: 'Field is required',
    },
  },
  email: {
    maxLength: {
      value: 255,
      message: 'Max length is 255',
    },
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Invalid email format',
    },
  },
};

export default validation;
