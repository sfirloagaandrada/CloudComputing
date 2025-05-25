export default function TechCard({ tech, onDelete, onEdit }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{tech.title}</h3>
      <p className="text-gray-700 mb-2">{tech.description}</p>
      <span className="text-sm text-blue-500">{tech.category}</span>
      <div className="flex gap-2 mt-4">
        <button
          onClick={onEdit}
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Editează
        </button>
        <button
          onClick={() => onDelete(tech._id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Șterge
        </button>
      </div>
    </div>
  );
}
