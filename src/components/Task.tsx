/*
TaskData represents the domain model, which is the shape
of a task as it exists in the application's data layer.
This is the data contract.
*/

interface TaskData {
  id: string;
  title: string;
}

/*
TaskProps represents the component interface, which is
what this component needs in order to function. This is
the props contract.
*/

interface TaskProps {
  task: TaskData;
}

/*
Task represents the component implementation. This is the
presentation logic.
*/

export default function Task({ task: { id, title } }: TaskProps) {
  return (
    <div>
      Task {id} - {title}
    </div>
  );
}
