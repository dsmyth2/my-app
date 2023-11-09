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

  // function body for handleChange
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    // write the data members that stores the values of these input fields
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // form submission function
  function handleSubmit(e) {
    // use the state getter and acces the most uptodate value and send it wherever you need
    // if you do ont want to reset your form fields just bc the submit btn was clicked,
    // you need to override the reset behavior
    e.preventDefault();

    console.log(formData);
  }

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
        <label htmlFor="lastNameInput">Enter Your Last Name: </label>
        <input
          className="textInput"
          id="lastNameInput"
          type="text"
          placeholder="e.g. Doe"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="emailInput">Enter Your Email Address: </label>
        <input
          className="textInput"
          id="emailInput"
          type="email"
          placeholder="e.g. abc@domain.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* text area input */}
        <textarea
          value={formData.comments}
          placeholder="Enter your comments..."
          onChange={handleChange}
          name="comments"
        />
        {/* checkbox */}
        <input
          type="checkbox"
          id="isRegistered"
          checked={formData.isRegistered}
          onChange={handleChange}
          name="isRegistered"
        />
        <label htmlFor="isRegistered">Are you a registered user?</label>

        <br />

        {/* radio buttons */}
        <fieldset>
          <legend>What type of employee you are:</legend>
          <input
            type="radio"
            id="unemployed"
            name="employementStatus"
            value="unemployed"
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>

          <br />

          <input
            type="radio"
            id="part-time"
            name="employementStatus"
            value="part-time"
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>

          <br />

          <input
            type="radio"
            id="full-time"
            name="employementStatus"
            value="full-time"
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
        </fieldset>

        {/* dropdown menu for selecting fav season */}
        <label htmlFor="favSeason">What is your favorite season?</label>
        <br />
        <select
          id="favSeason"
          value={formData.favSeason}
          onChange={handleChange}
          name="favSeason"
        >
          {/* specify dropdown options */}

          <option value="">Choose your favorite season</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormsTutorial;
