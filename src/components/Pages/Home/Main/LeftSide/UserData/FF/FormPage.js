import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    availabilityTime: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Perform form submission logic here
    setShowSuccessMessage(true); // Show success message
    // Optionally, you can reset the form here
    setFormData({
      title: "",
      description: "",
      price: "",
      availabilityTime: "",
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create Session</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "20px" }}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
            required
          ></textarea>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Availability Time:</label>
          <input
            type="text"
            name="availabilityTime"
            value={formData.availabilityTime}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}>Create Session</button>
        </div>
      </form>
      {/* Popup message */}
      {showSuccessMessage && (
        <div style={{ textAlign: "center", marginTop: "20px", backgroundColor: "lightgreen", padding: "10px", borderRadius: "5px" }}>
          Successfully Created
        </div>
      )}
    </div>
  );
};

export default FormPage;
