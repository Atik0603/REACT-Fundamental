import { Link } from "react-router-dom";

function ContactList({ contacts, onDelete }) {
  return (
    <div style={{ padding: "60px 40px", maxWidth: "700px", margin: "0 auto" }}>
      <h2 style={{ color: "#1a1a2e", marginBottom: "24px" }}>Contact List</h2>
      {contacts.length === 0 && <p>No contacts yet.</p>}
      {contacts.map((contact) => (
        <div key={contact.id} style={rowStyle}>
          <div>
            <Link
              to={`/contacts/${contact.id}`}
              style={{ color: "#1a1a2e", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}
            >
              {contact.name}
            </Link>
            <p style={{ color: "#555", margin: "4px 0 0" }}>{contact.phone}</p>
          </div>
          <button
            onClick={() => onDelete(contact.id)}
            style={{ ...buttonStyle, backgroundColor: "#cc0000" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  borderBottom: "1px solid #eee",
  backgroundColor: "#f9f9f9",
  borderRadius: "6px",
  marginBottom: "10px"
};

const buttonStyle = {
  color: "#fff",
  padding: "8px 16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px"
};

export default ContactList;