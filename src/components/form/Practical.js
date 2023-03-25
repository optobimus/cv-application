import React from "react";

const Practical = ({ id, experienceInfo, onChange }) => {

  const handleChange = (e) => {
    onChange(e, id);
  }

  return (
    <div className="experience">
      <form>
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={handleChange}
          value={experienceInfo.position}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
          value={experienceInfo.company}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          value={experienceInfo.city}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start date"
          onChange={handleChange}
          value={experienceInfo.startDate}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End date"
          onChange={handleChange}
          value={experienceInfo.endDate}
        />
      </form>
    </div>
  );
}


export default Practical;
