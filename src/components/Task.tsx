/*
TaskData represents the domain model, which is the shape
of a task as it exists in the application's data layer.
This is the data contract.
*/

interface TaskData {
  id: string;
  title: string;
  state: "TASK_ARCHIVED" | "TASK_INBOX" | "TASK_PINNED";
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

export default function Task({ task: { id, title, state } }: TaskProps) {
  return (
    <div className={`list-item ${state}`}>
      <label
        className="checkbox"
        htmlFor={`archiveTask-${id}`}
        aria-label={`archiveTask-${id}`}
      >
        <input
          id={`archiveTask-${id}`}
          name="checked"
          type="checkbox"
          disabled={true}
          checked={state === "TASK_ARCHIVED"}
        ></input>
        <span></span>
      </label>

      <label className="title" htmlFor={`title-${id}`} aria-label={title}>
        <input
          id={`title-${id}`}
          name="title"
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        ></input>
      </label>
    </div>
  );
}
