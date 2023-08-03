import './index.css'

const Tags = props => {
  const {eachTag, changeTag, isActive} = props
  const {displayText} = eachTag

  const onClickTagButton = () => {
    changeTag(displayText)
  }

  return (
    <li className="list-item">
      <button
        onClick={onClickTagButton}
        type="button"
        className={isActive ? 'tag-button new-button' : 'tag-button'}
      >
        {displayText}
      </button>
    </li>
  )
}
;<h1>tags</h1>

export default Tags
