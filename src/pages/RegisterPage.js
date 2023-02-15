import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await registerUserService({ username, email, password: pass });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="username">username</label>
          <input
            type="text"
            required={true}
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={pass}
            required
            onChange={(e) => setPass(e.target.value)}
          />
        </fieldset>

        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
