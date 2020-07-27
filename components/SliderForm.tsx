import React, { useState } from "react";

import formStyles from "../styles/formStyles";

export interface FormProps {
  onFormSubmit: (driversCount: string) => void;
  defaultCount: string;
}

const SliderForm = (props: FormProps) => {
  const { onFormSubmit, defaultCount } = props;
  const [driversCount, setDriversCount] = useState(defaultCount);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDriversCount(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
              data-testid="input-range"
            />
            <span className="rangeValue">50</span>
          </div>
          <button data-testid="form-button">
            Show {driversCount}{" "}
            {parseInt(driversCount) > 1 ? "drivers" : "driver"}
          </button>
        </div>
      </form>
      <style jsx>{formStyles}</style>
    </>
  );
};

export default SliderForm;
