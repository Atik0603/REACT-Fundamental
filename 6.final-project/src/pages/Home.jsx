function Home() {
  return (
    <div style={{ padding: "60px 40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "#1a1a2e", fontSize: "40px" }}>Welcome to ContactApp</h1>
      <p style={{ color: "#555", lineHeight: "1.8", marginTop: "16px" }}>
        A simple contact management app built with React and React Router.
      </p>

      <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={cardStyle}>
          <h2>📋 Contact List</h2>
          <p>View all your contacts. Click a name to see full details. You can also edit or delete contacts.</p>
          <p><strong>Built with:</strong> useState, useEffect, React Router Link</p>
        </div>
        <div style={cardStyle}>
          <h2>➕ Add Contact</h2>
          <p>Fill in a form to add a new contact with name, phone, email and address.</p>
          <p><strong>Built with:</strong> Controlled form inputs, useState</p>
        </div>
        <div style={cardStyle}>
          <h2>👤 Contact Details</h2>
          <p>Click any contact name to view their full details on a separate page.</p>
          <p><strong>Built with:</strong> Dynamic routes with useParams</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#f0f4ff",
  padding: "20px",
  borderRadius: "8px",
  borderLeft: "4px solid #1a1a2e"
};

export default Home;