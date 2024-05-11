import React, { useState } from "react";

const Book = () => {
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Book Session</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "20px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Email:</label>
          <input
            type="text"
            name="Email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Your Question:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
            required
          ></textarea>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Payment:</label>
          <a href="https://pay.hamropatro.com/" target="_blank">Here</a>

        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Book your Slots:</label>
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3rR6G5CoKXQR1M3TKtgX_URiurYHwZ1eumXC-Dy9eTw17FXw7b1SaYAh4LeaiyTKmAMEkOBHKV" target="_blank">Here</a>


        </div>
        <div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}>Book Session</button>
        </div>
      </form>
      {/* Popup message */}
      {showSuccessMessage && (
        <div style={{ textAlign: "center", marginTop: "20px", backgroundColor: "lightgreen", padding: "10px", borderRadius: "5px" }}>
          Booking Successful
        </div>
      )}
    </div>
  );
};

export default Book;

  