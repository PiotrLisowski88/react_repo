import { type ReactNode } from "react";

interface Props {
  id: number
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

export default function CourseGoal({ title, children, id, onDelete }: Props) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}
