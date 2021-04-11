import "./taskComponent.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
export default function TaskComponent() {
  return (
    <>
      <div className="task-tracker-box">
        <h1 className="task-header">Task Tracker</h1>
        <Button variant="contained" className="task-button">
          Add Task
        </Button>
        <TextField label="Task Name"></TextField>
        <TextField
          id="datetime-local"
          label="Date Time"
          type="datetime-local"
          defaultValue="2021-04-11T10:30"
        />
      </div>
    </>
  );
}
