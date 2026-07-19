import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import initialContacts from "./data/initialContacts";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const handleAdd = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactList contacts={contacts} onDelete={handleDelete} />} />
        <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} />} />
        <Route path="/add" element={<AddContact onAdd={handleAdd} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;