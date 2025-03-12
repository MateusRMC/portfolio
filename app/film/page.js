"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Film() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects/film");

        // ⚠️ Verifica se a resposta está vazia ou inválida
        if (!response.ok) {
          throw new Error(`Erro na API: ${response.statusText}`);
        }

        const data = await response.json();

        // ⚠️ Verifica se os dados são um array
        if (!Array.isArray(data)) {
          throw new Error("A resposta da API não é um array.");
        }

        const formattedData = data.map((project) => ({
          ...project,
          media: project.media ? [project.media] : [],
          roles: project.roles
            ? project.roles.split(", ").map((role) => role.trim())
            : [],
        }));

        setProjects(formattedData);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error.message);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div id="content">
      {projects.length === 0 ? (
        <p>Nenhum projeto encontrado.</p>
      ) : (
        projects.map((project) => {
          const imageUrl =
            project.media &&
            Array.isArray(project.media) &&
            typeof project.media[0] === "string" &&
            project.media[0].startsWith("http")
              ? project.media[0]
              : "/fallback.jpg";

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
                  <li>No role defined</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
