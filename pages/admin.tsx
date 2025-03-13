import { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Architecture");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !imageUrl) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await addDoc(collection(db, "projects"), {
        title,
        category,
        images: [imageUrl],
      });
      alert("Project Added!");
      setTitle("");
      setImageUrl("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel - Add Project</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <label className="block text-lg mb-2">Title:</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className="block text-lg mb-2">Category:</label>
        <select
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Architecture">Architecture</option>
          <option value="Interiors">Interiors</option>
          <option value="Commercial">Commercial</option>
          <option value="Residential">Residential</option>
          <option value="Competition">Competition</option>
        </select>

        <label className="block text-lg mb-2">Image URL:</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default Admin;
