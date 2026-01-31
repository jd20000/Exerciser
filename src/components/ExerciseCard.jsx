export default function ExerciseCard({ name, done, onToggle }) {
  return (
    <div className={`card ${done ? "done" : ""}`}>
      <span>{name}</span>
      <input type="checkbox" checked={done} onChange={onToggle} />
    </div>
  );
}
