import React, { useState } from "react";

const Input = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(text);
    props.onSendMessage(text);
    setText("");
  };
  return (
    <div className="input">
      <form className="formInput" onSubmit={handleSubmit}>
        <input
          className="inputText"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Upiši poruku..."
          autoFocus={false} //pr
        />
        <button type="submit" className="btn">
          Pošalji
        </button>
      </form>
    </div>
  );
};
export default Input;
