import React from "react";

function RadioButton({ name, options, variantPicked, changeVariant }) {
  function handleChange(e) {
    changeVariant(e.target.value);
  }

  return (
    <>
      {options.map((option, index) => {
        return (
          <label key={index} htmlFor={`${name}-${option}`}>
            <input
              id={`${name}-${option}`}
              type="radio"
              name={name}
              value={option}
              checked={variantPicked === option}
              onChange={handleChange}
            />
            {option}
          </label>
        );
      })}
    </>
  );
}

export default RadioButton;
