import React, {useState} from 'react';
import {MessageList} from "../../components/MessageList";
import {MessageInput} from "../../components/MessageInput";
import useBotAnswerTimeDelay from "../../Hooks/useBotAnswerTimeDelay";
import {Redirect, useParams} from "react-router-dom";
import {CHATS} from "../../mocks/chats"



export const Messages= () => {
    const {chatId}=useParams();
    const [messageList,setMessageList]=useState([])
    const sendMessage=(text,author)=>{
        const newMessage={
            text,
            author,
        }
        const newMessageList=[...messageList, newMessage];
        setMessageList(newMessageList);

    }

    const onSendMessage=(value)=>{
        sendMessage(value,'user');
    }
    const BotText="Hello!!!"

    useBotAnswerTimeDelay(messageList,sendMessage, [BotText])

    if(!CHATS.find(({id})=>id===chatId)){
        return<Redirect to="/chats"/>;
    }

    return (
        <div>
            <h1 h1={BotText} >HW5</h1>
            <MessageList messageList={messageList}/>
            <MessageInput onSend={onSendMessage}/>

        </div>
    );
};

