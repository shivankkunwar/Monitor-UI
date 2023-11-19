import React, { useState } from "react";
import "./dd.css";
function Dropdowns() {
  const [drop1, setDrop1] = useState(true);
  const [drop2, setDrop2] = useState(false);

  function dropp(number) {
    if (number === "1") {
      setDrop1(!drop1);
    } else if (number === "2") {
      setDrop2(!drop2);
    }
  }

  return (
    <div>
      <div className="trigger">
        <nav>
          <label for="touch">
            <span onClick={() => dropp("1")}>
              Trigger reason
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.52851 0.528598C4.78886 0.268248 5.21097 0.268248 5.47132 0.528598L9.47132 4.5286C9.73167 4.78895 9.73167 5.21106 9.47132 5.47141C9.21097 5.73176 8.78886 5.73176 8.52851 5.47141L4.99992 1.94281L1.47132 5.47141C1.21097 5.73176 0.788864 5.73176 0.528514 5.47141C0.268165 5.21106 0.268165 4.78895 0.528514 4.5286L4.52851 0.528598Z"
                  fill="#777676"
                />
              </svg>
            </span>
          </label>

          {drop1 && (
            <div className="drop1-slide">
              <ul className="trigger-slide">
                <li>
                  Hard flag
                </li>
                <li>
                  Temp flag
                </li>
                <li>
                  Restricted unflag
                </li>
                <li>
                  un flag
                </li>
                <li>
                  Reviewed
                </li>
              </ul>
            </div>
          )}
        </nav>
        <nav onClick={() => dropp("2")}>
          <label for="touch">
            <span>
              Risk level
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.52851 0.528598C4.78886 0.268248 5.21097 0.268248 5.47132 0.528598L9.47132 4.5286C9.73167 4.78895 9.73167 5.21106 9.47132 5.47141C9.21097 5.73176 8.78886 5.73176 8.52851 5.47141L4.99992 1.94281L1.47132 5.47141C1.21097 5.73176 0.788864 5.73176 0.528514 5.47141C0.268165 5.21106 0.268165 4.78895 0.528514 4.5286L4.52851 0.528598Z"
                  fill="#777676"
                />
              </svg>
            </span>
          </label>

          {/* {drop2 && (
            <div className="drop2-slide">
              <ul className="trigger-slide">
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
              </ul>
            </div>
          )} */}
        </nav>
      </div>
    </div>
  );
}

export default Dropdowns;
