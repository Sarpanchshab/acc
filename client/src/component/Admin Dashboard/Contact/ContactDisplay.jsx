import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function ContactDisplay() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("/api/getallmessage"); // Replace with your API
      setContacts(response.data.allMessage || []); // Ensure it's an array
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Failed to load contacts!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Contact List</h1>

      {loading ? (
        <p className="text-gray-500">Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p className="text-gray-500">No contacts available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <div
              key={contact.id || contact._id}
              className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {contact?.name || "Unknown"}
              </h2>
              <p className="text-gray-600">📍 {contact?.city || "N/A"}</p>
              <p className="text-gray-600">🏠 {contact?.address || "N/A"}</p>
              <p className="text-gray-600">✉️ {contact?.email || "N/A"}</p>
              <p className="text-gray-600">📝 {contact?.message || "No message"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactDisplay;
