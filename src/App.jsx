import { useState } from "react";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="container">
      <div className="login-box">
        
        {/* Lado esquerdo */}
        <div className="side-panel">
          <h1>Hora de transformar suas finanças.</h1>
          <img
            className="illustration"
            src="./assets/finance.svg"
            alt="Ilustração financeira"
          />
        </div>

        {/* Lado direito */}
        <div className="form-side">
          {/* Tabs */}
          <div className="tabs">
            <button 
              className={activeTab === "login" ? "active" : ""} 
              onClick={() => setActiveTab("login")}
            >
              Entrar
            </button>
            <button 
              className={activeTab === "register" ? "active" : ""} 
              onClick={() => setActiveTab("register")}
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

          {/* Formulários */}
          {activeTab === "login" && (
            <form>
              <input type="email" placeholder="Seu email" required />
              <input type="password" placeholder="Senha" required />
              <button type="submit" className="btn-primary">Entrar</button>
              <a href="#" className="forgot">Esqueceu sua senha?</a>
            </form>
          )}

          {activeTab === "register" && (
            <form>
              <input type="text" placeholder="Nome completo" required />
              <input type="email" placeholder="Seu email" required />
              <input type="password" placeholder="Senha" required />
              <input type="password" placeholder="Confirmar senha" required />
              <button type="submit" className="btn-primary">Cadastrar</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
