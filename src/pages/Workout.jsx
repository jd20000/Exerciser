import { workoutPlan } from "../data/workoutPlan";
import ExerciseCard from "../components/ExerciseCard";
import { getProgress, saveProgress, todayKey } from "../utils/storage";
export default function Workout() {
  const today = new Date() ;
  const dateKey = todayKey();
  const dayIndex = today.getDay();
  const todayPlan = workoutPlan[dayIndex];
  const progress = getProgress();
  const completed = progress[dateKey]?.completed || [];
  if (!todayPlan) {
    return (
      <div className="page">
        {" "}
        <h2>Rest Day 🌿</h2> <p>Stretch, breathe, recover.</p>{" "}
      </div>
    );
  }
  const toggle = (exercise) => {
    const updated = completed.includes(exercise)
      ? completed.filter((e) => e !== exercise)
      : [...completed, exercise];
    progress[dateKey] = {
      title: todayPlan.title,
      exercises: todayPlan.exercises,
      completed: updated,
    };
    saveProgress(progress);
    window.location.reload();
  };
  return (
    <div className="page">
      {" "}
      <h2>{todayPlan.title}</h2>{" "}
      {todayPlan.exercises.map((e) => (
        <ExerciseCard
          key={e}
          name={e}
          done={completed.includes(e)}
          onToggle={() => toggle(e)}
        />
      ))}{" "}
    </div>
  );
}
