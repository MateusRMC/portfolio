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

      if (error) {
        console.error("Erro ao buscar projetos:", error);
      } else {
        const formattedData = data.map((project) => ({
          ...project,
          media: project.media ? [project.media] : [],
          roles: project.roles
            ? project.roles.split(", ").map((role) => role.trim())
            : [],
        }));

        console.log("🔹 Dados formatados:", formattedData);
        setProjects(formattedData);
      }
    }

    fetchProjects();
  }, []); // <- Esse é o único useEffect permitido!

  return (
    <div id="content">
      {projects.length === 0 ? (
        <p>Nenhum projeto encontrado.</p>
      ) : (
        projects.map((project) => {
          // Verifica se project.media existe, é um array e tem uma string válida
          const imageUrl =
            project.media &&
            Array.isArray(project.media) &&
            typeof project.media[0] === "string" &&
            project.media[0].startsWith("http")
              ? project.media[0]
              : "/fallback.jpg"; // Imagem de fallback

          return (
            <div
              key={project.videoid}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              {imageUrl !== "/fallback.jpg" ? (
                <Image
                  className="thumbnail"
                  src={imageUrl}
                  alt={project.title || "Projeto sem título"}
                  width={320}
                  height={180}
                  priority
                />
              ) : (
                <p>Imagem não disponível</p>
              )}

              <h2>{project.title}</h2>
            </div>
          );
        })
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
                {Array.isArray(selectedProject.roles) ? (
                  selectedProject.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))
                ) : (
                  <li>Nenhum papel definido</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
