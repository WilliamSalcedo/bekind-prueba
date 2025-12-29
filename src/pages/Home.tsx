import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/login">Ir a Login</Link>
      <Link to="/dashboard">Ir a Dashboard</Link>
    </>
  );
}

export default Home;