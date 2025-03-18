"use client";

import { useState } from "react";
import "../styles/admin.css";

export default function Admin() {
  const [formData, setFormData] = useState({
    category: "film", // Categoria inicial
    videoUrl: "",
    title: "",
    description: "",
    roles: "",
  });

  const [message, setMessage] = useState(null);

  function extractVideoId(url) {
    const match = url.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([^&?/]+)/);
    return match ? match[1] : "";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "videoUrl") {
      const videoid = extractVideoId(value);
      if (videoid) {
        setFormData((prev) => ({
          ...prev,
          videoid,
          media: `https://img.youtube.com/vi/${videoid}/maxresdefault.jpg`, // Thumbnail gerada automaticamente
        }));
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    const { category, videoid, title, description, roles } = formData;

    if (!videoid || !title || !description) {
      setMessage({ type: "error", text: "Preencha todos os campos!" });
      return;
    }

    const response = await fetch(`/api/projects/${category}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        videoid,
        title,
        description,
        media: `https://img.youtube.com/vi/${videoid}/maxresdefault.jpg`, // Enviando a thumbnail gerada automaticamente
        roles,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage({ type: "success", text: "Projeto adicionado com sucesso!" });
      setFormData({
        category,
        videoUrl: "",
        title: "",
        description: "",
        roles: "",
      });
    } else {
      setMessage({
        type: "error",
        text: result.error || "Erro ao adicionar projeto.",
      });
    }
  }

  return (
    <div id="admin-panel">
      <h1>Admin - Adicionar Projeto</h1>

      {message && <p className={message.type}>{message.text}</p>}

      <form onSubmit={handleSubmit}>
        <label>Categoria</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="film">Film</option>
          <option value="design">Design</option>
          <option value="brands">Brands</option>
          <option value="photo">Photography</option>
        </select>

        <label>URL do Vídeo (YouTube)</label>
        <input
          type="text"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
          required
        />

        <label>Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Descrição</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Roles (separados por vírgula)</label>
        <input
          type="text"
          name="roles"
          value={formData.roles}
          onChange={handleChange}
          required
        />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
