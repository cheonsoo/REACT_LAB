import React, { useRef } from "react";
import { useInputs } from "./useInputs";

const Info = () => {
  const nameRef = useRef(null);
  const nickNameRef = useRef(null);

  const [state, onChange] = useInputs({
    name: "",
    nickname: ""
  });

  const { name, nickname } = state;

  const handleChange = (evt) => {
    onChange("UPDATE", evt.target);
  };

  const handleClear = (evt) => {
    // nameRef.current.value = "";
    // nickNameRef.current.value = "";
    onChange("CLEAR");
  };

  return (
    <div>
      <div>
        <input ref={nameRef} name='name' value={name} onChange={handleChange} />
        <input
          ref={nickNameRef}
          name='nickname'
          value={nickname}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
      <div>
        <input type='button' value='clear' onClick={handleClear} />
      </div>
    </div>
  );
};

export default Info;
