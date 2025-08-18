import './index.css';

function App() {
  return (
    <div className="container">
      <div className="login-box">

        {/* Lado esquerdo com gradiente + SVG */}
        <div className="side-panel">
          <svg
            className="illustration"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
          >
            <rect width="500" height="500" fill="none" />
            <g>
              <rect x="150" y="100" width="200" height="300" rx="20" fill="#fff" />
              <rect x="180" y="180" width="140" height="20" rx="5" fill="#e0e0e0" />
              <rect x="180" y="220" width="140" height="20" rx="5" fill="#e0e0e0" />
              <rect x="180" y="260" width="140" height="20" rx="5" fill="#e0e0e0" />
              <circle cx="250" cy="150" r="30" fill="#7e22ce" />
              <rect x="210" y="350" width="80" height="20" rx="10" fill="#7e22ce" />
            </g>
          </svg>
        </div>

        {/* Lado direito */}
        <div className="form-side">
          <div className="user-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A8 8 0 1118.88 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <h2>USER LOGIN</h2>

          <form>
            <div className="input-group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A8 8 0 1118.88 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input type="text" placeholder="USERNAME" required />
            </div>

            <div className="input-group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3m-6 0a3 3 0 11-6 0 3 3 0 016 0zm-3 8v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
              </svg>
              <input type="password" placeholder="PASSWORD" required />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;