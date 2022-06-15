import store from "./store.js"
import ui from './ui.js'

const socket = io('/')

socket.on('connect', ()=>{
    console.log("Successfully connected " + socket.id)
})

const nameInput = document.querySelector(".introduction_page_name_input");

nameInput.addEventListener('keyup', (event) => {
    console.log(event.target.value);
    store.setUsername(event.target.value)
})

const chatPageButton = document.getElementById('enter_chats_button');
chatPageButton.addEventListener('click', () => {
    //go to chat page
    console.log("button Pressed")
    ui.goToChatPage()
})
// socket.on('hello-client', () => {
//     console.log("Hello Client")
//     socket.emit('hello-server');
// })