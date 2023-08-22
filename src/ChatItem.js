import classes from './ChatItem.module.css'
import URL from './backend_server_url'

function ChatItem(props) {
  function deleteSubmitHandler() {
    const chatIdToDelete = props.chatId
    fetch(`${URL}/chats/delete/${chatIdToDelete}`)
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
