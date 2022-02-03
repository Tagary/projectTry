import React from 'react';
import socket from '../socket';

function JoinBlock() {
  return (
    <>
      <div className="article">Join the chat</div>
      <div className="join-block">
        <input type="text" placeholder="Room Id" required />
        <input type="text" placeholder="Your Name" required />
        <button className="btn btn-success">Join</button>
      </div>
    </>
  );
}

export default JoinBlock;
