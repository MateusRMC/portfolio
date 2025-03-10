"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Film() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      let { data, error } = await supabase.from("film_content").select("*");

      console.log("🔹 Supabase Response:", data);
      console.log("🔸 Supabase Error:", error);

      if (error) {
        console.error("Erro ao buscar projetos:", error);
      } else {
        setProjects(data);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div id="content">
      {projects.length === 0 ? (
        <p>Nenhum projeto encontrado.</p>
      ) : (
        projects.map((project) => (
          <div
            key={project.videoid}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              className="thumbnail"
              src={project.media[0]}
              alt={project.title}
            />
            <h2>{project.title}</h2>
          </div>
        ))
      )}

      {selectedProject && (
        <div
          id="videoModal"
          className="modal"
          onClick={() => setSelectedProject(null)}
        >
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedProject(null)}>
              &times;
            </span>
            <iframe
              id="videoFrame"
              src={`https://www.youtube.com/embed/${selectedProject.videoid}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="project-info">
              <h2 id="projectTitle">{selectedProject.title}</h2>
              <p id="projectDescription">{selectedProject.description}</p>
              <h3>Roles:</h3>
              <ul id="projectRoles">
                {selectedProject.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
