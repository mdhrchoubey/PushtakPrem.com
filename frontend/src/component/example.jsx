import React, { useState } from 'eact';
import axios from 'axios';

const SuggestionForm = () => {
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // send the suggestion data to the backend using Axios
    try {
      const response = await axios.post('/api/suggestions', { message, userId });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }

    // clear the message input
    setMessage('');
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input
          type="text"
          value={userId}
          onChange={handleUserIdChange}
        />
      </label>
      <label>
        Suggestion:
        <textarea
          value={message}
          onChange={handleMessageChange}
        />
      </label>
      <button type="submit">Send Suggestion</button>
    </form>
  );
};

export default SuggestionForm;