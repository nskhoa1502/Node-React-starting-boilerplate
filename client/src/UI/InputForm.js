import React, { memo } from "react";

const InputForm = ({ label }) => {
  return (
    <div>
      <label htmlFor="phone">{label}</label>

      {/* Use Props to dynamically change attributes */}
      <input type="text" id="phone" />
    </div>
  );
};

export default memo(InputForm);
