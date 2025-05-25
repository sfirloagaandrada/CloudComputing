// components/RecordForm.jsx
import { useState } from "react";

export default function RecordForm({ data = {}, onSubmit }) {
  const [title, setTitle] = useState(data.title || "");
  const [description, setDescription] = useState(data.description || "");
  const [category, setCategory] = useState(data.category || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !category) return;

    onSubmit({ title, description, category });

    // Reset
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        🛠️ Adaugă Tehnologie
      </h2>

      <input
        type="text"
        placeholder="Titlu (ex: React)"
        className="w-full border rounded p-2 mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descriere"
        className="w-full border rounded p-2 mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categorie (ex: Frontend, AI, DevOps)"
        className="w-full border rounded p-2 mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Salvează
      </button>
    </form>
  );
}
