import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import helpers from "../helpers";

export default function Register() {
  const [registerError, setRegisterError] = useState("");
  const [email, changeEmail] = useState("");
  const [pass, changePass] = useState("");
  const [name, changeName] = useState("");
  const navigate = useNavigate();

  const registerSubmit = (e) => {
    e.preventDefault();
    let registerObj = helpers.formParser(e.target.elements);
    axios
      .post("http://localhost:5001/user/register", registerObj)
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          navigate("/login");
          return;
        }
        setRegisterError(res.data.message);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-primary">
      {registerError.length ? registerError : null}
      <h1 className="text-2xl">Sign Up</h1>
      <form
        onSubmit={registerSubmit}
        className="flex flex-col items-start px-2 py-4 w-[25rem] bg-neutral rounded-md"
      >
        <label className="py-1">Display Name: </label>
        <input
          type="text"
          className="text-white register-name px-2 py-1 mt-1 mb-2 bg-neutral/[0.5] border-b-2 focus:bg-[black]/[0.1] focus:outline-none w-[100%]"
          name="username"
          onChange={(e) => changeName(e.target.value)}
          value={name}
          required
          placeholder="Choose a display name"
        />
        <label className="py-1">Email: </label>
        <input
          type="email"
          className="text-white register-email px-2 py-1 mt-1 mb-2 bg-neutral/[0.2] border-b-2 focus:bg-[black]/[0.1] focus:outline-none w-[100%]"
          name="email"
          onChange={(e) => changeEmail(e.target.value)}
          value={email}
          required
          placeholder="Enter a valid email"
        />
        <label className="py-1">Password: </label>
        <input
          type="password"
          className="text-white register-password px-2 py-1 mt-1 mb-2 bg-neutral/[0.2] border-b-2 focus:bg-[black]/[0.1] focus:outline-none w-[100%]"
          name="password"
          onChange={(e) => changePass(e.target.value)}
          value={pass}
          required
          placeholder="Enter a password"
        />
        <button
          className="self-center mt-5 mb-1 w-[75%] border px-4 py-2 rounded-md hover:bg-base-100/[0.8]"
          type="submit"
        >
          Register
        </button>
      </form>
      <a
        className="self-center mt-4 border px-4 py-1 rounded-md hover:bg-base-100/[0.8]"
        href="/login"
      >
        Already a Member? Login Here
      </a>
    </div>
  );
}
