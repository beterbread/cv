import '../styles/GeneralForm.css';

// eslint-disable-next-line react/prop-types
function GeneralForm({ onNameChange, onNumberChange, onEmailChange }) {
  return (
    <form className="generalForm">
      <h1>Full name</h1>
      <input type="text" onChange={onNameChange}></input>
      <h1>Phone number</h1>
      <input type="text" onChange={onNumberChange}></input>
      <h1>Email</h1>
      <input type="text" onChange={onEmailChange}></input>
    </form>
  );
}

export default GeneralForm;
