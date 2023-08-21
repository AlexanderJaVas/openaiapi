import classes from './NewChatForm.module.css'
import { useRef } from 'react'

function NewChatForm(props) {
  const questionInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()
    const enteredQuestion = questionInputRef.current.value
    const chatData = {
      question: enteredQuestion,
    }
    props.onAddChat(chatData)
  }

  return (
    <form className={classes.section} onSubmit={submitHandler}>
      <div className={classes.control}>
        <textarea
          required
          placeholder="Type your message here..."
          id="question"
          rows="5"
          ref={questionInputRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button> Send</button>
      </div>
    </form>
  )
}
export default NewChatForm
