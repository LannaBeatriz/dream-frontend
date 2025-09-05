import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "./components/Tabs";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./index.css";
import dreamPng from "./assets/dream.png";

// Ícones
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function App() {
  const [activeTab, setActiveTab] = useState("login");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Novo estado para mensagens de sucesso
  const [invalidFields, setInvalidFields] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔹 Função de cadastro atualizada
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(""); // Limpa a mensagem de sucesso ao tentar um novo cadastro
    setInvalidFields([]);
    setLoading(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const errors = [];
    if (!name) errors.push("name");
    if (!email) errors.push("email");
    if (!password) errors.push("password");
    if (!confirmPassword) errors.push("confirmPassword");

    if (errors.length > 0) {
      setInvalidFields(errors);
      setError("Preencha todos os campos!");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setInvalidFields(["password", "confirmPassword"]);
      setError("As senhas não coincidem!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        e.target.reset();
        setSuccess(data.mensagem || "Cadastro realizado com sucesso!"); // Exibe a mensagem de sucesso
      } else {
        setError(data.mensagem || "Erro ao cadastrar.");
      }
    } catch (err) {
      setError("Erro de conexão com o servidor.");
    }
    setLoading(false);
  };

  // 🔹 Função de login permanece igual
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(""); // Limpa a mensagem de sucesso ao tentar um novo login
    setInvalidFields([]);
    setLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    const errors = [];
    if (!email) errors.push("email");
    if (!password) errors.push("password");

    if (errors.length > 0) {
      setInvalidFields(errors);
      setError("Preencha todos os campos!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // Salva o token
        navigate("/metas"); // Redireciona para a página de metas após o login
      } else {
        setError(data.mensagem || "Erro ao fazer login.");
      }
    } catch (err) {
      setError("Erro de conexão com o servidor.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      {/* Logo / nome do app no topo esquerdo */}
      <header className="site-logo">DREAM</header>

      <div className="login-box">
        {/* Lado esquerdo */}
        <div className="side-panel">
          <img
            className="illustration"
            src={dreamPng}
            alt="Ilustração financeira"
          />
        </div>

        {/* Lado direito */}
        <div className="form-side">
          {/* Tabs */}
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setError={setError}
          />

          {/* Botões sociais centralizados */}
          <div className="social-login">
            <button className="google">
              <FcGoogle size={20} style={{ marginRight: "8px" }} />
              Entrar com o Google
            </button>
            <button className="apple">
              <FaApple size={20} style={{ marginRight: "8px" }} />
              Entrar com a Apple
            </button>
          </div>

          <div className="divider">ou</div>

          {/* Mensagem de erro */}
          {error && <div className="error-message">{error}</div>}

          {/* Mensagem de sucesso */}
          {success && <div className="success-message">{success}</div>}

          {/* Formulários */}
          {activeTab === "login" ? (
            <LoginForm
              handleLogin={handleLogin}
              invalidFields={invalidFields}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              loading={loading}
            />
          ) : (
            <RegisterForm
              handleRegister={handleRegister}
              invalidFields={invalidFields}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
