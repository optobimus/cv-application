import React from "react";


const Educational = ({ educationalInfo, id, onChange }) => {

  const handleChange = (e) => {
    onChange(e, id);
  }
  
  return (
    <div className="education">
      <form>
        <input
          type="text"
          name="university"
          placeholder="University"
          onChange={handleChange}
          value={educationalInfo.university}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          value={educationalInfo.city}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={handleChange}
          value={educationalInfo.degree}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          value={educationalInfo.subject}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start date"
          onChange={handleChange}
          value={educationalInfo.startDate}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End date"
          onChange={handleChange}
          value={educationalInfo.endDate}
        />
      </form>
      
    </div>  
  );
}


export default Educational;
