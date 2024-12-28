const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Note = require('../models/notesSchema'); // Adjust the path if necessary


const verifyToken = require('../helper/jwt'); // Import middleware
const express = require('express');
const app = express();

app.use(express.json()); // Ensure JSON parsing middleware is added

app.post('/api/notes', async (req, res) => {
  const { title, content, tags } = req.body;
  const user = req.user; // Ensure req.user is correctly populated by verifyToken middleware

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  try {
    const note = new Note({
      title,
      content,
      tags: tags || [],
      userId: user._id,
    });
    await note.save();
    return res.json({
      error: false,
      note,
      message: "Note Added Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Failed to add note",
    });
  }
});


module.exports = app;




// Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
};

// Get a single note by ID
exports.getNoteById = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findOne({ noteId: id });
    if (!note) {
      return res.status(404).json({ message: 'Note not found!' });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note', error: error.message });
  }
};

// Update a note by ID
exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found!' });
    }

    res.status(200).json({
      message: 'Note updated successfully!',
      note: updatedNote,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error: error.message });
  }
};

// Delete a note by ID
exports.deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found!' });
    }

    res.status(200).json({ message: 'Note deleted successfully!', note: deletedNote });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error: error.message });
  }
};

