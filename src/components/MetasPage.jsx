import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MetasPage.css";

function MetasPage() {
  const [metas, setMetas] = useState([]);
  const [novaMeta, setNovaMeta] = useState({ nome: "", poupado: "", objetivo: "" });
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Busca as metas do servidor quando o componente é montado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setErro("Acesso não autorizado. Faça login novamente.");
      navigate("/");
      return;
    }

    const fetchMetas = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/metas", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setMetas(data);
        } else {
          setErro("Erro ao buscar metas do servidor.");
        }
      } catch (err) {
        setErro("Erro de conexão com o servidor.");
      }
      setLoading(false);
    };

    fetchMetas();
  }, [navigate]);

  const handleChange = (e) => {
    setNovaMeta({ ...novaMeta, [e.target.name]: e.target.value });
    setErro(""); // Limpa erro ao digitar
  };

  const handleAddMeta = async (e) => {
    e.preventDefault();
    setErro("");

    if (!novaMeta.nome || !novaMeta.poupado || !novaMeta.objetivo) {
      setErro("Preencha todos os campos!");
      return;
    }

    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/metas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          ...novaMeta,
          poupado: Number(novaMeta.poupado),
          objetivo: Number(novaMeta.objetivo)
        })
      });

      if (response.ok) {
        const metaAdicionada = await response.json();
        setMetas([...metas, metaAdicionada]);
        setNovaMeta({ nome: "", poupado: "", objetivo: "" });
      } else {
        const data = await response.json();
        setErro(data.mensagem || "Erro ao adicionar meta.");
      }
    } catch (err) {
      setErro("Erro de conexão com o servidor.");
    }

    setLoading(false);
  };

  return (
    <div className="metas-container">
      <h2>Minhas Metas</h2>

      <form className="meta-form" onSubmit={handleAddMeta}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do sonho"
          aria-label="Nome do sonho"
          value={novaMeta.nome}
          onChange={handleChange}
        />
        <input
          type="number"
          name="poupado"
          placeholder="Quanto você já tem?"
          aria-label="Valor poupado"
          value={novaMeta.poupado}
          onChange={handleChange}
        />
        <input
          type="number"
          name="objetivo"
          placeholder="Quanto falta para o sonho?"
          aria-label="Valor objetivo"
          value={novaMeta.objetivo}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adicionando..." : "Adicionar Meta"}
        </button>
      </form>

      {erro && <div className="erro-meta">{erro}</div>}
      {loading && metas.length === 0 && <p>Carregando metas...</p>}

      <ul className="lista-metas">
        {metas.map((meta, idx) => {
          const total = meta.poupado + meta.objetivo;
          const progresso = total > 0 ? ((meta.poupado / total) * 100).toFixed(1) : 0;

          return (
            <li key={idx} className="meta-item">
              <div className="meta-info">
                <strong>{meta.nome}</strong>
                <span>
                  R$ {meta.poupado.toLocaleString()} / R$ {total.toLocaleString()}
                </span>
              </div>
              <div className="meta-barra">
                <div className="progresso" style={{ width: `${progresso}%` }}></div>
              </div>
              <span className="meta-porcentagem">{progresso}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MetasPage;
