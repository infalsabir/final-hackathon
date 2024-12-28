import React, { useState } from "react";
import TagInput from "./tagInput";
import { MdClose } from "react-icons/md";

function AddEditNotes(noteData,type,onClose) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError]= useState(null)

const addNewNote = async()=>{};
const editNote = async()=>{};

  const handleAddNote =()=>{
    if(!title){
        setError("Please enter a title")
        return;
    }
    if(!content){
        setError("Please enter a content")
        return;
  }
  setError("");
  if(type=== 'edit'){
    editNote()
  }else{
    addNewNote()
  }
};
  return (
    <div className="relative">
        <button className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-500" onClick={onClose}>
            <MdClose className="text-xl text-slate-400"/>
        </button>
      {/* Title Section */}
      <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-400">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none border-b border-slate-300 focus:border-blue-500 transition-all"
          placeholder="Go to gym at 7"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-xs text-slate-400">Content</label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded border border-slate-300 focus:ring-2 focus:ring-blue-500"
          placeholder="Content"
          value={content}
          onChange={({ target }) => setContent(target.value)}
          rows={10}
        />
      </div>

      {/* Tags Section */}
      <div className="mt-3">
        <label className="text-xs text-slate-400">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
{error &&<p className="text-red-500 text-xs pt-4">{error}</p>}
      {/* Add Button */}
      <button
        className="bg-blue-600 text-white font-medium mt-5 px-4 py-2 rounded hover:bg-blue-700 transition-all"
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
}

export default AddEditNotes;
