import LoginForm from "../../components/login form/LoginForm";
import "./LoginUser.css";

const LoginUser = () => {
  return (
    <>
      <section className="loginContainer">
        <div className="loginBrand">
          <h1>Welcome</h1>
        </div>
        <div className="formSide">
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default LoginUser;
