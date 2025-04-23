import React, { useState } from "react";

const ConditionCompo = () => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const inputAge = e.target.value;
    setAge(inputAge);

    if (inputAge === "") {
      setMessage("");
    } else if (inputAge >= 18) {
      setMessage("You are eligible to vote.");
    } else {
      setMessage("You are not eligible to vote.");
    }
  };

  return (
    <>
      <div>
        <h2>Check Voting Eligibility</h2>
        <input
          type="number"
          class="form-control"
          placeholder="Enter your age"
          value={age}
          onChange={handleChange}
        />
        <p>{message}</p>
      </div>
    </>
  );
};
export default ConditionCompo;
