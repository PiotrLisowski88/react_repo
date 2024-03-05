import CourseGoal from "./CourseGoal";
import { type CourseGoalType } from "../App";

interface CourseGoalList {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void 
}


export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalList) {
return (
    <ul> 
    {goals.map((goal) => (
      <li key={goal.id}>    
      <CourseGoal 
      id={goal.id}
      onDelete={onDeleteGoal}
      title={goal.title}>
      <p>{goal.description}</p>
    </CourseGoal>
    </li>
    ))}
  </ul>
)
}
