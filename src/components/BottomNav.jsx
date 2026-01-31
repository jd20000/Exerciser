import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">Home</Link>
      <Link to="/workout">Workout</Link>
      <Link to="/calendar">Calendar</Link>
    </nav>
  );
}
