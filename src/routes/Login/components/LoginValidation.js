export const validate = values =>{
    const errors = {};
    if(!values.Firstname) {
      errors.firstname = 'Required';
    }
    if (!values.Firstname || values.length === 0 || !values.Firstname.trim()) {
      errors.Firstname = 'First Name can`t be blank';
    }
    if(!values.Lastname) {
      errors.Lastname = 'Required';
    }
    if (!values.Lastname || values.length === 0 || !values.Lastname.trim()) {
      errors.Lastname = 'First Name can`t be blank';
    }
    if (!values.Email) {
      errors.Email = '!Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
      errors.Email = '  Invalid email';
    }
    if(!values.Password) {
      errors.Password = '!Required';
    }
    if (!values.Number) {
      errors.Number = 'Required';
    } 
    // else if(!/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/i.test(values.Number)) {
    //   errors.Number = 'Invalid phone no';
    // }
    if (!values.Confirmpassword) {
      errors.Confirmpassword = '!Required';
    } else if(values.Password != values.Confirmpassword) {
      errors.Confirmpassword = '!Confirm password not matched'
    }
    if (!values.Dob) {
      errors.Dob = '!Required';
    }
    if (!values.ActivationCode) {
      errors.ActivationCode = '!Required';
    }
    return errors;
  }
  
  export default validate;