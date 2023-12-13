import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic(
        '79715e43-2761-4b50-96cc-eb243acc40f0', 
        props.user.username, 
        props.user.secret
    );
    return 
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100'}}/>
    </div>
}

export default ChatsPage
