import ChatItem from './ChatItem'
import classes from './ChatList.module.css'

function ChatList(props) {
  if (props.chats.length === 0) {
    return <p>Your chat is empty. Send your first message to start a chat.</p>
  }
  return (
    <ul className={classes.list}>
      {props.chats.map((chat) => (
        <ChatItem
          key={chat.chatId}
          date={chat.dateTime}
          chatId={chat.chatId}
          question={chat.question}
          answer={chat.answer}
        />
      ))}
    </ul>
  )
}

export default ChatList
