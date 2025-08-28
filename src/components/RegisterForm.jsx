import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

function RegisterForm({
  handleRegister,
  invalidFields,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  loading,
}) {
  return (
    <form onSubmit={handleRegister}>
      <div className="input-group">
        <FaUser className="icon" />
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          className={invalidFields.includes("name") ? "error" : ""}
        />
      </div>

      <div className="input-group">
        <FaEnvelope className="icon" />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          className={invalidFields.includes("email") ? "error" : ""}
        />
      </div>

      <div className="input-group">
        <FaLock className="icon" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Senha"
          className={invalidFields.includes("password") ? "error" : ""}
        />
        <span
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className="input-group">
        <FaLock className="icon" />
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirmar senha"
          className={invalidFields.includes("confirmPassword") ? "error" : ""}
        />
        <span
          className="toggle-password"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button type="submit" className="btn-primary">
        {loading ? <span className="spinner"></span> : "Cadastrar"}
      </button>
    </form>
  );
}

export default RegisterForm;
