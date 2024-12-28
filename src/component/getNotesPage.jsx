import React, { useEffect, useState } from "react";
import axios from "axios";

const GetNotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch notes on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage
      if (!token) {
        setMessage("No token found. Please log in.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/notes", {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in Authorization header
          },
        });

        if (response.status === 200) {
          setNotes(response.data.notes); // Assuming backend sends { notes: [...] }
        } else {
          setMessage("Failed to fetch notes.");
        }
      } catch (error) {
        setMessage("Error fetching notes: " + error.message);
        console.error("Error fetching notes:", error.response?.data || error.message);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-blue-600 text-white px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Your Notes</h1>
        <p className="text-xl max-w-2xl">
          View all your notes below. Keep track of your thoughts and ideas.
        </p>
      </section>

      {/* Notes Display Section */}
      <section className="max-w-5xl mx-auto bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
        {message && <p className="text-center text-yellow-300 mb-6">{message}</p>}

        {notes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div
                key={note._id}
                className="p-6 bg-white text-blue-600 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2">{note.title}</h3>
                <p className="text-sm text-gray-500 mb-2">Subject: {note.subject}</p>
                <p className="mb-4">{note.content}</p>
                <p className="text-sm text-gray-500">
                  Collaborators: {note.collaborators?.join(", ") || "None"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">No notes found.</p>
        )}
      </section>
    </div>
  );
};

export default GetNotesPage;

