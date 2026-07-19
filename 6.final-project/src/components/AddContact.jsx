import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact({ onAdd }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email || !form.address) {
      alert("Please fill in all fields.");
      return;
    }
    onAdd({ ...form, id: Date.now().toString() });
    navigate("/contacts");
  };

  return (
    <div style={{ padding: "60px 40px", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ color: "#1a1a2e", marginBottom: "24px" }}>Add New Contact</h2>
      {["name", "phone", "email", "address"].map((field) => (
        <div key={field} style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px", textTransform: "capitalize" }}>
            {field}
          </label>
          <input
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={`Enter ${field}`}
            style={inputStyle}
          />
        </div>
      ))}
      <button onClick={handleSubmit} style={buttonStyle}>Add Contact</button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px"
};

const buttonStyle = {
  backgroundColor: "#1a1a2e",
  color: "#fff",
  padding: "10px 24px",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer"
};

export default AddContact;