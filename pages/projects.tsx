import { useState } from "react";

const categories = [
  { name: "All Projects", value: "All" },
  { name: "Housing", value: "Housing" },
  { name: "Commercial", value: "Commercial" },
  { name: "Urbanism", value: "Urbanism" },
  { name: "Public Space", value: "Public Space" },
  { name: "Public Building", value: "Public Building" },
];

const projectData = [
  {
    id: 1,
    title: "CFC Restaurant (Proposal Design)",
    location: "Jakarta",
    category: { name: "Commercial" },
    photos: [
      { path: "project/category/commercial/CFC Restaurant ( Proposal Design)/1.jpg" },
      { path: "project/category/commercial/CFC Restaurant ( Proposal Design)/2.jpg" },
      { path: "project/category/commercial/CFC Restaurant ( Proposal Design)/3.jpg" },
      { path: "project/category/commercial/CFC Restaurant ( Proposal Design)/4.jpg" }
    ]
  },
  {
    id: 2,
    title: "Commsult Indonesia Office",
    location: "BSD, Tangerang",
    category: { name: "Commercial" },
    photos: [
      { path: "project/category/commercial/Commsult Indonesia Office/1.jpg" },
      { path: "project/category/commercial/Commsult Indonesia Office/2.jpg" },
      { path: "project/category/commercial/Commsult Indonesia Office/3.jpg" },
      { path: "project/category/commercial/Commsult Indonesia Office/4.jpg" }
    ]
  },
  {
    id: 3,
    title: "Public Space - Kuta Haven",
    location: "Bali",
    category: { name: "Public Space" },
    photos: [
      { path: "project/category/public space/Kuta Haven/1.jpg" },
      { path: "project/category/public space/Kuta Haven/2.jpg" },
      { path: "project/category/public space/Kuta Haven/3.jpg" },
      { path: "project/category/public space/Kuta Haven/4.jpg" }
    ]
  },
  {
    id: 4,
    title: "Housing - Grand Taruma",
    location: "Karawang",
    category: { name: "Housing" },
    photos: [
      { path: "project/category/housing/Grand Taruma/1.jpg" },
      { path: "project/category/housing/Grand Taruma/2.jpg" },
      { path: "project/category/housing/Grand Taruma/3.jpg" },
      { path: "project/category/housing/Grand Taruma/4.jpg" }
    ]
  },


];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-light text-center mb-6 text-black">Projects</h1>

      <div className="flex justify-center space-x-6 mb-6 border-b pb-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`text-lg font-light ${
              selectedCategory === cat.value ? "text-black border-b-2 border-black" : "text-gray-600"
            } hover:text-black`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        {projectData
          .filter((p) => selectedCategory === "All" || p.category.name === selectedCategory)
          .map((project) => (
            <div key={project.id} className="relative group">
              {/* Project Image */}
              {project.photos.length > 0 && (
                <img
                  src={`/${project.photos[0].path}`}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}

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