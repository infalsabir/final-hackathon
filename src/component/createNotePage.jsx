import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegStickyNote } from "react-icons/fa";
import axios from "axios";

const CreateNotePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState(""); 
  const [collaborators, setCollaborators] = useState(""); 
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
  
    if (!token) {
      setMessage("No token found. Please log in.");
      return;
    }
  
    const noteData = {
      title,  // Only the title field is passed
    };
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/notes",
        noteData,
        {
          headers: {
            'token': token
          },
        }
      );
  
      if (response.status === 201) {
        setMessage("Note created successfully!");
        setTitle("");  // Clear the title field after successful creation
      }
    } catch (error) {
      setMessage("Error creating note: " + error.message);
      console.error("Error creating note:", error);
    }
  };
  


  
  return (
    <div className="min-h-screen bg-blue-600 text-white px-4 py-12">
      <section className="flex flex-col items-center justify-center text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4">Create a New Note</h1>
        <p className="text-xl max-w-2xl">
          Capture your thoughts, ideas, or important information by creating a new note.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="text-xl font-semibold mb-2 block">Note Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title"
              className="w-full p-4 text-blue-600 rounded-lg bg-white bg-opacity-20 border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="text-xl font-semibold mb-2 block">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter note subject"
              className="w-full p-4 text-blue-600 rounded-lg bg-white bg-opacity-20 border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white"
              required
            />
          </div>

          <div>
            <label htmlFor="collaborators" className="text-xl font-semibold mb-2 block">Collaborators (comma separated)</label>
            <input
              type="text"
              id="collaborators"
              value={collaborators}
              onChange={(e) => setCollaborators(e.target.value)}
              placeholder="Enter collaborators"
              className="w-full p-4 text-blue-600 rounded-lg bg-white bg-opacity-20 border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white"
            />
          </div>

          <div>
            <label htmlFor="content" className="text-xl font-semibold mb-2 block">Note Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note here"
              rows="6"
              className="w-full p-4 text-white rounded-lg bg-white bg-opacity-20 border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors duration-300"
            >
              <FaRegStickyNote className="inline-block mr-2" />
              Create Note
            </button>
          </div>
        </form>

        {message && <p className="mt-4 text-center text-white">{message}</p>}
      </section>
    </div>
  );
};

export default CreateNotePage;






