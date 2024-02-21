import './index.css'

const FaqItem = props => {
  const {faqDetails, onToggleAnswer} = props
  const {id, questionText, answerText, isOpened} = faqDetails

  const toggleAnswer = () => {
    onToggleAnswer(id)
  }

  const buttonEl =
    isOpened === false ? (
      <button type="button" onClick={toggleAnswer}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
          alt="plus"
        />
      </button>
    ) : (
      <button type="button" onClick={toggleAnswer}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
          alt="minus"
        />
      </button>
    )

  const borderStyle = isOpened ? `quest-cont border-style` : 'quest-cont'

  return (
    <li className="list-cont">
      <div className={borderStyle}>
        <h1 className="quest-heading">{questionText}</h1>
        {buttonEl}
      </div>
      {isOpened && <p>{answerText}</p>}
    </li>
  )
}

export default FaqItem
