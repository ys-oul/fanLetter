import React from "react";

function Send() {
  return (
    <div>
      <div>
        닉네임 <input type="text" />
      </div>
      <div>
        내용 <input type="text" />
      </div>
      <div>
        누구한테 보내실 건가요?{" "}
        <select id="" name="">
          <option value="karina">카리나</option>
          <option value="winter">윈터</option>
          <option value="ningning">닝닝</option>
          <option value="giselle">지젤</option>
        </select>
      </div>
      <button>펜레터 등록</button>
    </div>
  );
}

export default Send;
