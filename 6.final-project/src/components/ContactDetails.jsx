import { useParams, Link } from "react-router-dom";

function ContactDetails({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return (
      <div style={{ padding: "60px 40px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", color: "#cc0000" }}>Contact not found.</p>
        <Link to="/contacts" style={{ color: "#1a1a2e" }}>Back to list</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "60px 40px", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ color: "#1a1a2e", marginBottom: "24px" }}>Contact Details</h2>
      <div style={cardStyle}>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Address:</strong> {contact.address}</p>
      </div>
      <Link to="/contacts" style={{ color: "#1a1a2e", marginTop: "20px", display: "block" }}>
        ← Back to list
      </Link>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#f0f4ff",
  padding: "24px",
  borderRadius: "8px",
  lineHeight: "2",
  fontSize: "16px"
};

export default ContactDetails;