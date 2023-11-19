import { useState } from "react";
import Modal from "./component/Modal/Modal";
import Sidebar from "./component/Sidebar";
import Dropdowns from "./component/Dropdowns";
import PendingTable from "./component/Tables/PendingTable";
import CompletedTable from "./component/Tables/CompletedTable";

import "./App.css";

function App() {
  const [searchResult, setSearchResult] = useState("");
  const [activeTab, setActiveTab] = useState("pending");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function changeTab(tab) {
    setActiveTab(tab);
    setSearchResult("");
  }
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container-main">
      <Sidebar />
      <div className="content-right">
        <div className="monitoring-title">Monitoring</div>
        <div className="tabs-close">
          <div className="tabs">
            <div
              className={`pending ${
                activeTab === "pending" ? "active" : "not"
              }`}
              onClick={() => changeTab("pending")}
            >
              Pending
            </div>
            <div
              className={`completed ${
                activeTab === "completed" ? "active" : "not"
              }`}
              onClick={() => changeTab("completed")}
            >
              Completed
            </div>
          </div>
          <div className="close-button" onClick={toggleModal}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_18_305)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9Z"
                  fill="#D13B3B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z"
                  fill="#D13B3B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
                  fill="#D13B3B"
                />
              </g>
              <defs>
                <clipPath id="clip0_18_305">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Close account
          </div>
        </div>

        <div className="search-filter">
          <div className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
                fill="#ADADAD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9571 11.9572C12.25 11.6643 12.7249 11.6643 13.0178 11.9572L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5125 16.5732 15.2196 16.2803L11.9571 13.0178C11.6642 12.7249 11.6642 12.2501 11.9571 11.9572Z"
                fill="#ADADAD"
              />
            </svg>
            <input
              placeholder="Search"
              value={searchResult}
              style={{ border: "none" }}
              onChange={(e) => setSearchResult(e.target.value)}
            />
          </div>
          <div className="filter-drop">
            <Dropdowns />
          </div>
        </div>
        <div className="content-table">
          {activeTab === "pending" ? (
            <PendingTable searchResult={searchResult} />
          ) : (
            <CompletedTable searchResult={searchResult} />
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}/>
      )}
    </div>
  );
}

export default App;
