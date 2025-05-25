import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TechForm from "@/components/RecordForm";
import TechCard from "@/components/TechCard";
import { getRecords, createRecord, deleteRecord } from "@/utils/recordsFunctions";

export default function HomePage() {
  const [techs, setTechs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const data = await getRecords();
      setTechs(data);
      setFiltered(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleCreate = async (newTech) => {
    await createRecord(newTech);
    const updated = await getRecords();
    setTechs(updated);
    setFiltered(updated);
  };

  const handleDelete = async (id) => {
    await deleteRecord(id);
    const updated = await getRecords();
    setTechs(updated);
    setFiltered(updated);
  };

  const handleFilter = (category) => {
    if (category === "") return setFiltered(techs);
    const result = techs.filter((tech) =>
      tech.category?.toLowerCase().includes(category.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-r from-gray-50 to-white">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        <span className="inline-block animate-pulse">💡</span> TechZone – Catalog Tehnologic
      </h1>

      {/* FORMULAR */}
      <div className="max-w-2xl mx-auto mb-10">
        <TechForm onSubmit={handleCreate} />
      </div>

      {/* FILTRU */}
      <div className="max-w-xl mx-auto mt-4 mb-12">
        <input
          type="text"
          placeholder="🔍 Caută după categorie (ex: AI, Frontend)..."
          onChange={(e) => handleFilter(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400 transition"
        />
      </div>

      {/* LISTĂ TEHNOLOGII */}
      <div className="mt-12">
        {loading ? (
          <p className="text-center text-gray-500">Se încarcă tehnologiile...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500">Nicio tehnologie adăugată momentan.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((tech) => (
              <TechCard
                key={tech._id}
                tech={tech}
                onDelete={handleDelete}
                onEdit={() => router.push(`/edit?id=${tech._id}`)}
              />
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="mt-20 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TechZone – Realizat cu 🧠, Tailwind și Next.js
      </footer>
    </div>
  );
}
