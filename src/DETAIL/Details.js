import React from 'react';
import './details.css'; // Import your CSS file for styling

const Details = () => {
  return (
    <div className="details-container">
      <form className="details-form">
        <h2>Details</h2>
        <div className="form-group">
          <label htmlFor="cropType">Crop Type:</label>
          <input type="text" id="cropType" name="cropType" />
        </div>
        <div className="form-group">
          <label htmlFor="thresholdValue">Threshold Value:</label>
          <input type="number" id="thresholdValue" name="thresholdValue" />
        </div>
        <div className="form-group">
          <label htmlFor="irrigationTime">Irrigation Time (hours):</label>
          <input type="number" id="irrigationTime" name="irrigationTime" />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Details;
