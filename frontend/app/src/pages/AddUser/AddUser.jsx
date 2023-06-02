import SignupForm from "../../components/signup form/SignupForm";
import "./AddUser.css";

const AddUser = () => {
  return (
    <>
      <section className="signupContainer">
        <div className="formSide">
          <SignupForm />
        </div>
        <div className="singupBrand">
          <h1>Add your acount</h1>
        </div>
      </section>
    </>
  );
};

export default AddUser;
