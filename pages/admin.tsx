import { useState, useEffect } from "react";

const AdminProjects = () => {
  interface Project {
    id: number;
    title: string;
    category: { name: string };
    location: string;
    description: string;
    photos: { path: string }[];
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      const projects = await response.json();
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddProject = async () => {
    const formData = new FormData();
    formData.append('title', newProject.title);
    formData.append('category', newProject.category);
    formData.append('location', newProject.location);
    formData.append('description', newProject.description);
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    const response = await fetch('/api/projects', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const project = await response.json();
      setProjects([...projects, project]);
      setNewProject({
        title: "",
        category: "",
        location: "",
        description: "",
      });
      setSelectedFile(null);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-light text-center mb-6 text-black">Admin - Manage Projects</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-light text-center mb-4 text-black">Add New Project</h2>
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="border p-2 mb-2 w-full text-black focus:text-black"
        />
        <input
          type="text"
          name="category"
          value={newProject.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="border p-2 mb-2 w-full text-black focus:text-black"
        />
        <input
          type="text"
          name="location"
          value={newProject.location}
          onChange={handleInputChange}
          placeholder="Location"
          className="border p-2 mb-2 w-full text-black focus:text-black"
        />
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="border p-2 mb-2 w-full text-black focus:text-black"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 mb-2 w-full text-black focus:text-black"
        />
        <button onClick={handleAddProject} className="bg-blue-500 text-white p-2 rounded">
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            <h3 className="text-xl font-light text-center mb-2 text-black">{project.title}</h3>
            <p className="text-center text-gray-600">{project.location}</p>
            <p className="text-center text-gray-600">{project.category.name}</p>
            <p className="text-center text-gray-600">{project.description}</p>
            {project.photos.length > 0 && (
              <img
                src={project.photos[0].path}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;