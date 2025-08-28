import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm({ handleLogin, invalidFields, showPassword, setShowPassword, loading }) {
  return (
    <form onSubmit={handleLogin}>
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
  );
}

export default LoginForm;
