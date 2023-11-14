import React from "react";
import headerImg1 from "./aespaHeader.jpg";

function Header() {
  return (
    <div>
      <img src={headerImg1} alt="aespa img" />
      <h1>Aespa Fan Letter Collection</h1>
      <ul>
        <li>
          <button>카리나</button>
        </li>
        <li>
          <button>윈터</button>
        </li>
        <li>
          <button>닝닝</button>
        </li>
        <li>
          <button>지젤</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
