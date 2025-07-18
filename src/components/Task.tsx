/*
TaskData represents the domain model, which is the shape
of a task as it exists in the application's data layer.
This is the data contract.
*/

import type { TaskData } from "../types";

/*
TaskProps represents the component interface, which is
what this component needs in order to function. This is
the props contract.
*/

interface TaskProps {
  task: TaskData;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

/*
Task represents the component implementation. This is the
presentation logic.
*/

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
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
        <span
          onClick={() => {
            onArchiveTask(id);
          }}
        ></span>
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

      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          id={`pinTask-${id}`}
          type="button"
          aria-label={`pinTask-${id}`}
          onClick={() => {
            onPinTask(id);
          }}
        >
          <span className="icon-star"></span>
        </button>
      )}
    </div>
  );
}
