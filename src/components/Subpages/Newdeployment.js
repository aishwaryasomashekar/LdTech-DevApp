import React, { useState } from 'react';
import '../Subpages/Newdeployment.css';
import axios from 'axios'; // Import Axios


const Newdeployment = () => {
  const [jobName, setJobName] = useState("");
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/create-job", {
        name: jobName,
      });      

      if (response.status === 200) {
        // Display success message to the user.
        setResponseMessage("jenkin job created successfully");
      } else {
        // Display error message to the user.
        setResponseMessage('Error creating Jenkins job.');
      }
    } catch (error) {
      // Display error message to the user.
      console.log("Error while creating job by user:", error);
      setResponseMessage('An error occurred while creating the Jenkins job.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job name"
        value={jobName}
        onChange={(e) => setJobName(e.target.value)}
      />
      <button type="submit">Create job</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default Newdeployment;
