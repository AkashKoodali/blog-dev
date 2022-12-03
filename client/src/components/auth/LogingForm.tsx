import { useState } from "react";
import { FormSubmit, InputChange } from "../../utils/TypeScript";
//import { useDispatch } from 'react-redux'


function LogingForm() {
  const initialState = { account: "", password: "" };
  const [userLogin, setUserLogin] = useState(initialState);
  const [typePass, setTypePass] = useState(false);
  const { account, password } = userLogin;

  //const dispatch = useDispatch()

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    //dispatch(login(userLogin))
  };

  return (
    <div>
      <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="account">Email / Phone number</label>
            <input
              type="text"
              id="account"
              name="account"
              value={account}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input
                type={typePass ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handleChangeInput}
              />
              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? "Hide" : "Show"}
              </small>
            </div>
          </div>

          <button
            type="submit"
            className=""
            disabled={account && password ? false : true}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogingForm;
