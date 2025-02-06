function RightSection() {
  return (
    <section className="right-section">
      <div className="header">
        <a href="#">Go to ALAT website</a>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <div className="head">
          <img src="/alatimage.png" alt="ALAT Logo" className="alatimage" />
          <p>Licensed by CBN</p>
          <img src="/cbn.img" alt="CBN Logo" className="cbn-image" />
        </div>

        <p className="welcome">Welcome Back!</p>
        <hr />
        <div className="form-wrapper">
          <form>
            <div>
              <label>Email Address/Username</label>
              <br />
              <input type="text" name="email" required />
            </div>
            <div className="password">
              <div className="pass-text">
                <label>Password</label>
                <br />
                <a href="#">Forgot password?</a>
              </div>
              <input type="password" name="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <p className="new">
          New to ALAT? <a href="#">Sign Up</a>
        </p>
      </div>
    </section>
  );
}

export default RightSection;
