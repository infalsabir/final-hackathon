import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./component/navbar"
import RegisterForm from './component/registerForm';
import LoginForm from './component/loginForm';
import Home from './component/homePage';
import ContactPage from "./component/contactPage";
import AboutPage from "./component/aboutPage";
import ServicesPage from "./component/servicePage";
import CreateNotePage from "./component/createNotePage";
import GetNotesPage from "./component/getNotesPage";
import NotesList from "./component/notesList";
import SearchBar from "./component/searchbar";
import NoteCard from "./component/noteCard";
import AddEditNotes from "./component/addEditNotes";


function App() {
  return (
    <Router>
     
       
        <Navbar />
 <div className="pt-16">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/create-note-page" element={<CreateNotePage />} />
          <Route path="/get-notes-page" element={<GetNotesPage />} />
          <Route path="/noteslist" element={<NotesList />} />
          <Route path="/searchbar" element={<SearchBar />} />
          <Route path="/note-card" element={<NoteCard />} />
          <Route path="/add-edit-notes" element={<AddEditNotes />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
