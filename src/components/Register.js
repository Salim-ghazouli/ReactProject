import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showVerify, setShowVerify] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      setError("Invalid email");
      return;
    }

    setError("");
    setShowVerify(true); // 👈 نفتح صفحة التحقق
  };

  const handleVerify = () => {
    if (code === "") {
      setError("Enter verification code");
      return;
    }

    setError("");
    alert("Email verified ✅");
  };

  return (
    <div>
      <h2>Register</h2>

      {!showVerify ? (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p>{error}</p>}

          <button type="submit">Register</button>
        </form>
      ) : (
        <div>
          <h3>Verify Your Email 📩</h3>

          <input
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          {error && <p>{error}</p>}

          <button onClick={handleVerify}>Verify</button>
        </div>
      )}
    </div>
  );
}

export default Register;