import React from "react";

// create a form which takes input for user first name lname
// email, comments, isRegistered, employmentStatus, favSeason

const FormsTutorial = () => {
  // create and initialize input fields using state management
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isRegistered: false,
    employmentStatus: "",
    favSeason: "",
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your First Name: </label>
        <input
          className="textInput"
          id="firstNameInput"
          type="text"
          placeholder="e.g. John"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default FormsTutorial;
