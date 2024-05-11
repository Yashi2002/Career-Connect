// import React, { Component } from "react";
// import axios from "axios";

// class ChatbotPage extends Component {
//   componentDidMount() {
//     this.initChatbot();
//   }

//   initChatbot = () => {
//     // Display initial message from the chatbot
//     let initialMessage = "Hello, I am your assistant. How can I help you?";
//     this.displayMessage(initialMessage, "left");
//   };

//   displayMessage = (message, position) => {
//     let messageContainer = document.createElement("div");
//     messageContainer.className = position === "left" ? "left" : "right";
//     messageContainer.innerHTML = message;

//     let chatContainer = document.getElementById("msg");
//     chatContainer.appendChild(messageContainer);

//     // Scroll to the bottom of the chat container
//     chatContainer.scrollTop = chatContainer.scrollHeight;
//   };

//   sendMessage = async (e) => {
//     e.preventDefault();

//     let messageInput = document.getElementById("msg_send");
//     let message = messageInput.value.trim();

//     if (message) {
//       // Display user message
//       this.displayMessage(message, "right");

//       // Send user message to the chatbot API
//       try {
//         let response = await axios.get(
//           `https://api.monkedev.com/fun/chat?msg=${message}`
//         );

//         let botResponse = response.data.response;

//         // Display bot response
//         this.displayMessage(botResponse, "left");
//       } catch (error) {
//         console.error("Error fetching chatbot response:", error);
//       }

//       // Clear input field after sending message
//       messageInput.value = "";
//     }
//   };

//   render() {
//     return (
//       <div className="chatbot-page">
//         <h1>Chatbot</h1>
//         <div id="msg"></div>
//         <div className="input">
//           <input
//             type="text"
//             id="msg_send"
//             placeholder="New Message"
//           />
//           <button className="send" onClick={this.sendMessage}>
//             Send <i className="fas fa-paper-plane"></i>
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default ChatbotPage;
