import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const categories = [
  { name: "All Projects", value: "All" },
  { name: "Housing", value: "Housing" },
  { name: "Commercial", value: "Commercial" },
  { name: "Urbanism", value: "Urbanism" },
  { name: "Public Space", value: "Public Space" },
  { name: "Public Building", value: "Public Building" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectList);
    };
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen flex flex-col items-center"> 
      <h1 className="text-3xl font-light text-center mb-6 text-black">Projects</h1>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-6 mb-6 border-b pb-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`text-lg font-light ${selectedCategory === cat.value ? "text-black border-b-2 border-black" : "text-gray-600"} hover:text-black`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        {projects
          .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
          .map((project, index) => (
            <div key={project.id} className="relative group">
              {/* Project Image */}
              <img src={`/assets/image${(index % 8) + 1}.jpg`} alt={project.title} className="w-full h-64 object-cover rounded-lg" />

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center rounded-lg">
                <span className="text-white text-lg font-light text-center px-4">{project.location}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;