import { Link } from "react-router-dom";

function About() {
  return (
    <div className="card">
      <h1>This is about</h1>
      <p>This is react app to leave feedback about product or service</p>
      <p>version: v.1</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default About;
