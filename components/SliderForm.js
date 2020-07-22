import React, { useState } from "react";

import formStyles from "../styles/formStyles";

const SliderForm = ({ onFormSubmit, defaultCount }) => {
  const [driversCount, setDriversCount] = useState(defaultCount);

  const handleChange = (event) => {
    setDriversCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(driversCount);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formWrapper">
          <label htmlFor="driversCount">
            Change drivers number to show in the area
          </label>
          <div className="inputWrapper">
            <span className="rangeValue">1</span>
            <input
              type="range"
              id="driversCount"
              name="driversCount"
              min="1"
              max="50"
              value={driversCount}
              onChange={handleChange}
            />
            <span className="rangeValue">50</span>
          </div>
          <button>
            Show {driversCount} {driversCount > 1 ? "drivers" : "driver"}
          </button>
        </div>
      </form>
      <style jsx>{formStyles}</style>
    </>
  );
};

export default SliderForm;
