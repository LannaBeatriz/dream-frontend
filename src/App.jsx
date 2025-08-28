import { useState } from "react";
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
  const [invalidFields, setInvalidFields] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setInvalidFields([]);

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
      return;
    }

    if (password !== confirmPassword) {
      setInvalidFields(["password", "confirmPassword"]);
      setError("As senhas não coincidem!");
      return;
    }

    alert("Cadastro realizado com sucesso ✅");
    e.target.reset();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setInvalidFields([]);

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    const errors = [];
    if (!email) errors.push("email");
    if (!password) errors.push("password");

    if (errors.length > 0) {
      setInvalidFields(errors);
      setError("Preencha todos os campos!");
      return;
    }

    alert("Login efetuado com sucesso ✅");
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
