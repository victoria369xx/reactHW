import { useDispatch, useSelector } from "react-redux";
import {getChatList} from '../../store/chats/selectors';
import {addChat} from '../../store/chats/action';
import { nanoid } from "nanoid";


export const ChatTest = () => {
    const chatList = useSelector(getChatList);
    const dispatch = useDispatch();

    const handleAddChat = () => {
        dispatch(addChat ({
            id: nanoid(),
            name: `Chat_${nanoid()}`
        }))
    }

    return <div>
        <h1>ChatTest Page</h1>
        <ul>
            {
                chatList?.map((chat) => {
                    return <li key={chat.id}>
                        {chat.name}
                    </li>
                })
            }
        </ul>
        <button onClick={handleAddChat}>
            Add chat
        </button>
    </div>

    
}