import { useState } from 'react';
import FormInput from "./components/FormInput"
import "./App.css"

function App() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 character and should not include any special characters",
      label: "Username",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address.",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters long and include at least 1 Capital Letter, 1 number and 1 special charecter",
      label: "Password",
      pattern: "^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,20}).*$",
      required: true
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password dont match",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((i) => (
          <FormInput
            key={i.id}
            {...i}
            value={values[i.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
