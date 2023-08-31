import React, { useState } from "react";

function Form({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange
}) {

  const [number, setNumber] = useState(0)
  const [isInvalidNumber, setIsInvalidNumber] = useState(null)

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value)
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber)
      setIsInvalidNumber(null)
    } else {
      setIsInvalidNumber(`${newNumber} is not a valid number! Must bebetween 0-5`)
    }
  }

  return (
    <div>
      <form>
        <input type="text" onChange={onFirstNameChange} value={firstName} />
        <input type="text" onChange={onLastNameChange} value={lastName} />
        <input type="number" value={number} onChange={handleNumberChange} />
        {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
