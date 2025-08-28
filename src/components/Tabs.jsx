function Tabs({ activeTab, setActiveTab, setError }) {
  return (
    <div className="tabs">
      <button
        className={activeTab === "login" ? "active" : ""}
        onClick={() => {
          setActiveTab("login");
          setError("");
        }}
      >
        Entrar
      </button>
      <button
        className={activeTab === "register" ? "active" : ""}
        onClick={() => {
          setActiveTab("register");
          setError("");
        }}
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Tabs;
