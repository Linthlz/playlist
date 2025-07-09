import React from 'react';

const Message = ({ message }) => {
  if (!message.text) return null;

  return (
    <div className={`mb-6 p-4 rounded-lg text-center font-medium ${
      message.type === 'success' 
        ? 'bg-[#f5f5dc] text-[#8B5C2A] border border-[#d2b48c]' 
        : 'bg-[#8B5C2A] text-white border border-[#a67c52]'
    }`}>
      {message.text}
    </div>
  );
};

export default Message;