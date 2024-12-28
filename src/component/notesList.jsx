import React, { useState } from "react";
import { Link } from "react-router-dom";
import NoteCard from "./noteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./addEditNotes";
import Modal from "react-modal"; // Corrected import syntax

const NotesList = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Notes List</h2>

      <div className="mb-4">
        <Link
          to="/create-note-page"
          className="px-6 py-2 bg-yellow-400 text-blue-600 font-semibold rounded hover:bg-yellow-300 transition duration-300"
        >
          Create Note
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {/* Sample NoteCards */}
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <NoteCard
              key={index}
              title="Meeting on 7th April"
              date="3rd April"
              content="Meeting on 7th April at New York"
              tags="#meeting"
              isPinned={true}
              onEdit={() => {}}
              onDelete={() => {}}
              onPinNote={() => {}}
            />
          ))}
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-yellow-500 hover:bg-yellow-700 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({
            isShown: true,
            type: "add",
            data: null,
          });
        }}
      >
        <MdAdd className="text-2xl text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() =>
          setOpenAddEditModal((prev) => ({ ...prev, isShown: false }))
        }
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Add/Edit Note Modal"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        onClose={()=>{
          setOpenAddEditModal({  isShown: false, type: "add", data: null });
        }} />
      </Modal>
    </div>
  );
};

export default NotesList;

