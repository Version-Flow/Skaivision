import { useState } from 'react'; 
import Config from '../../helpers/config';


const ChatBoat = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentScreen, setCurrentScreen] = useState('home'); 
  

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      // Here you can handle sending the message to your chatbot's backend or API
    }
  };

  // Update screen on button click
  const showLiveChat = () => setCurrentScreen('live-chat');
  const showEmailChat = () => setCurrentScreen('email-chat');

  // Set the dynamic title based on the current screen
  const getChatTitle = () => {
    if (currentScreen === 'live-chat') return 'Live Chat';
    if (currentScreen === 'email-chat') return 'Time Hold Mail';
    return Config[0].APP_ALLIASE + " Boat";
  };

  return (
    <div className={`chat-boat ${visible ? 'show' : ''}`}>
      <div className="chat-boat-header">
        <h4 className='text-white chat-title'>{getChatTitle()}</h4>
        <button className="close-btn" onClick={onClose}> &times;</button>
      </div>

      {/* Home screen */}
      {currentScreen === 'home' && (
        <div className='chat-home-screen'>
          <div className="col-xl-12 col-sm-6 ">
            <div className="card-box widget-user chat-c">
              <div className="avatar-sm bg-icon rounded-circle align-self-center">
                <i className="fe-send font-20 text-primary avatar-title"></i>
              </div>
              <div className="wid-u-info" style={{ marginTop: -10 }}>
                <h5 className="mb-1 text-primary">Live Support Chat</h5>
                <p className="text-muted mb-0">Chat session for inquiries & support <br /> only from 7:00am to 10:00pm <br />weekdays Anything other than this, <br />please use the Time Hold email.</p>
                <div className="user-position">
                  <span>
                    <a role='button' href="#" style={{ whiteSpace: 'nowrap' }} onClick={showLiveChat}>Click Here</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-sm-12">
            <div className="card-box widget-user chat-c">
              <div className="avatar-sm bg-icon rounded-circle align-self-center">
                <i className="mdi mdi-email-open-multiple font-20 text-primary avatar-title"></i>
              </div>
              <div className="wid-u-info" style={{ marginTop: -10 }}>
                <h5 className="mb-1 text-primary">Send Time Hold Email</h5>
                <p className="text-muted mb-0">Inquire from us anything from this  <br />session, and you will get a response <br />within 24 hours.</p>
                <div className="user-position">
                  <span>
                    <a role='button' href="#" style={{ whiteSpace: 'nowrap' }} onClick={showEmailChat}>Click Here</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live chat screen */}
      {currentScreen === 'live-chat' && (
        <div className='normal-chat'>
          <div className="chat-boat-body">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chat-boat-footer">
            <input type="text" placeholder="Type your message..." value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}

      {/* Email chat screen */}
      {currentScreen === 'email-chat' && (
        <div className="email-chat">
          <div className='col-xl-12 col-sm-12'>
            <div className="form-group mr-2 ml-2">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group mr-2 ml-2">
              <label htmlFor="exampleInputEmail1">Subject</label>
              <input type="text" className="form-control" id="exampleInputSubject" aria-describedby="subjectHelp" />
            </div>

            <div className="form-group mr-2 ml-2">
              <label htmlFor="exampleInputTextarea">Message</label>
              <textarea className="form-control" rows="5" id="example-textarea"></textarea>
              <small id="emailHelp" className="form-text text-muted">Please enter the details of your request. A member of our support staff will respond as soon as possible.</small>
            </div>

            <div className="form-group mr-2 ml-2">
              <label htmlFor="exampleInputConcern">Concern is about what...?</label>
              <select className="form-control" id="exampleInputConcern">
                <option>Choose...</option>
                <option>2</option>
              </select>
            </div>

            <div className="form-group mr-2 ml-2">
              <label htmlFor="example-fileinput">Attachments</label>
              <input type="file" id="example-fileinput" className="form-control" />
              <small id="emailHelp" className="form-text text-muted">Please upload all your files you want to send to us, if only your request has to do with files. Maximum of 6 files.</small>
            </div>

            <button className='btn btn-primary btn-sm float-right mb-3'>Send</button>
          </div>     
        </div>
      )}

    </div>
  );
};

export default ChatBoat;
