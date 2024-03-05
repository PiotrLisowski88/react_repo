import CourseGoalList from "./components/GoalsList.tsx";
import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals => {
      const newGoal: CourseGoalType = {
        title: goal,
        description: summary,
        id: Math.random()
      }
      return prevGoals.concat(newGoal);
    }
    ));
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{src: goalsImage, alt: 'App Logo'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals} />
    </main>
  );
}
