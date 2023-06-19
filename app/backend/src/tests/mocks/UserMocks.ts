const user = {
    username: 'pedro',
    role: 'admin',
    email: 'sombraios@hotmail.com',
    password: 'secret-admin',
  }

  const userLogin = {
    email: "admin@admin.com",
    password: "secret_admin"
  }
  
  const userLoginErr = {
    password: "secret_admin"
  }

  const userLoginOutPass = {
    email: 'sombraios@hotmail.com'
  }

  const loginError = { message: 'Invalid email or password' };

  const loginWithoutEmail = { message: 'All fields must be filled' };

  const errorPass = {
    email: 'sombraios@hotmail.com',
    password: '12345'
    }

  const errorE = {
    email: 'sombraios.com',
    password: '123456'
  }

  export default {
    user,
    userLogin,
    loginError,
    userLoginErr,
    loginWithoutEmail,
    userLoginOutPass,
    errorPass,
    errorE
  }