const getChatbox = (data) => {
    const { chatboxLabel, chatboxMessagesId, chatboxInputId, chatboxId } = data;
     
    const chatboxContainer = document.createElement('div')
    chatboxContainer.classList.add('chatbox_container')
    chatboxContainer.setAttribute('id', chatboxId);

    chatboxContainer.innerHTML = `
        <div class="chatbox_container">
            <div class="chatbox_label_container">
                <p class="chatbox_label">${chatboxLabel}</p>
            </div>
            <div class="messages_container" id='${chatboxMessagesId}'>
            </div>
            <div class="new_message_input_container">
                <input type="text" class="new_message_input" id='${chatboxInputId}' placeholder="Type your message .." />
            </div>
        </div>
    `;

    return chatboxContainer;

}

const getGroupChatMessage = (data) => {
    const { author, messageContent } = data;
    const messageContainer = document.createElement('div')
    messageContainer.classList.add('message_container');
    messageContainer.innerHtml = `
    <p class="message_paragraph">
        <span class="message_author">${author}: </span> ${messageContent}
    </p>
    `;
}
export default {
    getChatbox,
    getGroupChatMessage
}