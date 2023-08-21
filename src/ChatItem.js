import classes from './ChatItem.module.css'

function ChatItem(props) {
  function deleteSubmitHandler() {
    const chatIdToDelete = props.chatId
    fetch(`http://127.0.0.1:8080/chats/delete/${chatIdToDelete}`)
  }

  return (
    <div className={classes.card}>
      <div className={classes.date}>{props.date}</div>
      <label className={classes.bluelabel}>You asked:</label>
      <p>{props.question}</p>
      <label className={classes.bluelabel}>GTP responded:</label>
      <p>{props.answer}</p>
      <div className={classes.actions}>
        <a onClick={deleteSubmitHandler} href="/chat">
          Delete
        </a>
      </div>
    </div>
  )
}

export default ChatItem
