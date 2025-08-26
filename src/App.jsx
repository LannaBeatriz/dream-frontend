import { useState } from "react";
import "./index.css";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import dreamPng from "./assets/dream.png";

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
          <div className="tabs">
            <button 
              className={activeTab === "login" ? "active" : ""} 
              onClick={() => { setActiveTab("login"); setError(""); }}
            >
              Entrar
            </button>
            <button 
              className={activeTab === "register" ? "active" : ""} 
              onClick={() => { setActiveTab("register"); setError(""); }}
            >
              Cadastrar
            </button>
          </div>

          {/* Botões sociais */}
          <div className="social-login">
            <button className="google">Fazer login com o Google</button>
            <button className="apple">Fazer login com Apple</button>
          </div>

          <div className="divider">ou</div>

          {/* Mensagem de erro */}
          {error && <div className="error-message">{error}</div>}

          {/* Formulários */}
          {activeTab === "login" && (
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <FaEnvelope className="icon" />
                <input type="email" name="email" placeholder="Seu email" />
              </div>

              <div className="input-group">
                <FaLock className="icon" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  placeholder="Senha" 
                />
                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>

              <div className="options">
                <label>
                  <input type="checkbox" name="remember" /> Lembrar login
                </label>
                <a href="#" className="forgot">Esqueceu sua senha?</a>
              </div>

              <button type="submit" className="btn-primary">
                {loading ? <span className="spinner"></span> : "Entrar"}
              </button>
            </form>
          )}

          {activeTab === "register" && (
            <form onSubmit={handleRegister}>
              <div className="input-group">
                <FaUser className="icon" />
                <input type="text" name="name" placeholder="Nome completo" />
              </div>

              <div className="input-group">
                <FaEnvelope className="icon" />
                <input type="email" name="email" placeholder="Seu email" />
              </div>

              <div className="input-group">
                <FaLock className="icon" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  placeholder="Senha" 
                />
              </div>

              <div className="input-group">
                <FaLock className="icon" />
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  name="confirmPassword" 
                  placeholder="Confirmar senha" 
                />
                <span className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? "🙈" : "👁️"}
                </span>
              </div>

              <button type="submit" className="btn-primary">
                {loading ? <span className="spinner"></span> : "Cadastrar"}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;