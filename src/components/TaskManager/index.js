import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tags from '../Tags'
import TasksView from '../TasksView'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TaskManager extends Component {
  state = {
    task: '',
    tag: tagsList[0].displayText,
    selectedTag: '',
    tasksList: [],
  }

  onClickAddTaskButton = () => {
    const {tag, task} = this.state
    const newTask = {id: uuidv4(), tag, task}
    this.setState(prevState => ({
      task: '',
      tag: tagsList[0].displayText,
      tasksList: [...prevState.tasksList, newTask],
    }))
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  changeTag = displayText => {
    console.log(displayText)
    const {selectedTag} = this.state
    if (selectedTag === displayText) {
      this.setState({selectedTag: ''})
    } else {
      this.setState({selectedTag: displayText})
    }
  }

  onChangeSelect = event => {
    this.setState({tag: event.target.value})
  }

  render() {
    const {task, tag, selectedTag, tasksList} = this.state
    let filteredList
    if (selectedTag !== '') {
      filteredList = tasksList.filter(each => each.tag === selectedTag)
    } else {
      filteredList = tasksList
    }
    return (
      <div className="task-manager-main-container">
        <div className="create-task-container">
          <h1 className="create-task-heading">Create a task!</h1>
          <div className="container">
            <label htmlFor="task" className="label">
              Task
            </label>
            <input
              onChange={this.onChangeTask}
              placeholder="Enter the task here"
              value={task}
              type="text"
              className="input-field"
              id="task"
            />
          </div>
          <div className="container">
            <label htmlFor="tags" className="label">
              Tags
            </label>
            <select
              onChange={this.onChangeSelect}
              value={tag}
              id="tags"
              className="input-field"
            >
              {tagsList.map(each => (
                <option value={each.displayText} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={this.onClickAddTaskButton}
            type="button"
            className="button"
          >
            Add Task
          </button>
        </div>
        <div className="tags-container">
          <div className="tags-inner-container">
            <h1 className="tags-heading">Tags</h1>
            <ul className="tags-list">
              {tagsList.map(each => (
                <Tags
                  isActive={each.displayText === selectedTag}
                  changeTag={this.changeTag}
                  eachTag={each}
                  key={each.optionId}
                />
              ))}
            </ul>
            <h1 className="tags-heading">Tasks</h1>
            {filteredList.length === 0 ? (
              <div className="empty">
                <p className="text">No Tasks Added Yet</p>
              </div>
            ) : (
              <ul className="tasks-list">
                {filteredList.map(each => (
                  <TasksView detail={each} key={each.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default TaskManager
