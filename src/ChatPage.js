import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ChatList from './ChatList'
import NewChatForm from './NewChatForm'
import classes from './ChatPage.module.css'
import URL from './backend_server_url'

function ChatPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadedChats, setLoadedChats] = useState([])
  const [trigger, setTrigger] = useState(0)

  const navigate = useNavigate()
  let session_username = sessionStorage.getItem('session_username')

  if (session_username === '' || session_username === null) {
    navigate('/')
  }

  useEffect(() => {
    setIsLoading(true)
    setTrigger(1)
    let session_username = sessionStorage.getItem('session_username')
    fetch(`${URL}/chats/all/${session_username}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const chats = []
        for (const key in data.chatIds) {
          const chat = {
            id: key,
            ...data.chatIds[key],
          }
          chats.push(chat)
        }
        setIsLoading(false)
        setLoadedChats(chats)
      })
  }, [trigger])
  if (isLoading) {
    return (
      <section className={classes.chat}>
        <p>Loading...</p>
      </section>
    )
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>OpenAI API Chat</div>
        <nav>
          <ul>
            <Link to="/">Logout</Link>
          </ul>
        </nav>
      </header>
      <article className={classes.scroller}>
        <section className={classes.section}>
          <div className={classes.chat}>
            <ChatList chats={loadedChats} />
          </div>
        </section>
      </article>
      <div className={classes.message}>
        <NewChatForm onAddChat={addChatHandler} />
      </div>
    </>
  )

  function addChatHandler(chatData) {
    let session_username = sessionStorage.getItem('session_username')
    fetch(`${URL}/chats/new/${session_username}`, {
      method: 'POST',
      body: JSON.stringify(chatData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => setTrigger((trigger) => trigger + 1))
  }
}
export default ChatPage
