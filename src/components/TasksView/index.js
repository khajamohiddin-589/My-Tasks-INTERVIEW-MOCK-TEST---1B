import './index.css'

const TasksView = props => {
  const {detail} = props
  const {tag, task} = detail
  console.log(detail)

  return (
    <li className="task-list-item">
      <h1 className="task-main">{task}</h1>
      <button type="button" className="tag-button-task">
        {tag}
      </button>
    </li>
  )
}

export default TasksView
