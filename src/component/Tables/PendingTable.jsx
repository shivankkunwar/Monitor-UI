import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import "./PT.css";
function PendingTable({searchResult}) {
  console.log(searchResult)
  const [filteredResult, setFilteredResult]= useState(data);

useEffect(() => {
  setFilteredResult(
    data.filter((user) =>
      user.name.toLowerCase().includes(searchResult.toLowerCase())
    )
  );
}, [searchResult]);
  return (
    
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "5px"
              }}
            >
              Risk level{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.71967 10.7197C5.01256 10.4268 5.48744 10.4268 5.78033 10.7197L9 13.9393L12.2197 10.7197C12.5126 10.4268 12.9874 10.4268 13.2803 10.7197C13.5732 11.0126 13.5732 11.4874 13.2803 11.7803L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303L4.71967 11.7803C4.42678 11.4874 4.42678 11.0126 4.71967 10.7197Z"
                  fill="#ADADAD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967L13.2803 6.21967C13.5732 6.51256 13.5732 6.98744 13.2803 7.28033C12.9874 7.57322 12.5126 7.57322 12.2197 7.28033L9 4.06066L5.78033 7.28033C5.48744 7.57322 5.01256 7.57322 4.71967 7.28033C4.42678 6.98744 4.42678 6.51256 4.71967 6.21967L8.46967 2.46967Z"
                  fill="#1A1A1A"
                />
              </svg>
            </div>
          </th>
          <th>Trigger reason</th>
          <th>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginRight: "5px",
              
              }}
            >
              In queue for{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.71967 10.7197C5.01256 10.4268 5.48744 10.4268 5.78033 10.7197L9 13.9393L12.2197 10.7197C12.5126 10.4268 12.9874 10.4268 13.2803 10.7197C13.5732 11.0126 13.5732 11.4874 13.2803 11.7803L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303L4.71967 11.7803C4.42678 11.4874 4.42678 11.0126 4.71967 10.7197Z"
                  fill="#ADADAD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967L13.2803 6.21967C13.5732 6.51256 13.5732 6.98744 13.2803 7.28033C12.9874 7.57322 12.5126 7.57322 12.2197 7.28033L9 4.06066L5.78033 7.28033C5.48744 7.57322 5.01256 7.57322 4.71967 7.28033C4.42678 6.98744 4.42678 6.51256 4.71967 6.21967L8.46967 2.46967Z"
                  fill="#1A1A1A"
                />
              </svg>
            </div>
          </th>
          <th>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Date added on{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.71967 10.7197C5.01256 10.4268 5.48744 10.4268 5.78033 10.7197L9 13.9393L12.2197 10.7197C12.5126 10.4268 12.9874 10.4268 13.2803 10.7197C13.5732 11.0126 13.5732 11.4874 13.2803 11.7803L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303L4.71967 11.7803C4.42678 11.4874 4.42678 11.0126 4.71967 10.7197Z"
                  fill="#ADADAD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967L13.2803 6.21967C13.5732 6.51256 13.5732 6.98744 13.2803 7.28033C12.9874 7.57322 12.5126 7.57322 12.2197 7.28033L9 4.06066L5.78033 7.28033C5.48744 7.57322 5.01256 7.57322 4.71967 7.28033C4.42678 6.98744 4.42678 6.51256 4.71967 6.21967L8.46967 2.46967Z"
                  fill="#1A1A1A"
                />
              </svg>
            </div>
          </th>
          <th>Previously reviewed</th>
        </tr>
      </thead>
      <tbody>
        {filteredResult.map((curr, i) => {
          return (
            <tr key={i}>
              <td style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="userNameEmail">
                  <div
                    className="userName"
                    style={{
                      color: "#050505",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    {curr.name}
                  </div>
                  <div className="userEmail">{curr.email}</div>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75 5.25C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6V14.25C3 14.4489 3.07902 14.6397 3.21967 14.7803C3.36032 14.921 3.55109 15 3.75 15H12C12.1989 15 12.3897 14.921 12.5303 14.7803C12.671 14.6397 12.75 14.4489 12.75 14.25V9.75C12.75 9.33579 13.0858 9 13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V14.25C14.25 14.8467 14.0129 15.419 13.591 15.841C13.169 16.2629 12.5967 16.5 12 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75H8.25C8.66421 3.75 9 4.08579 9 4.5C9 4.91421 8.66421 5.25 8.25 5.25H3.75Z"
                    fill="#4643EE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 2.25C10.5 1.83579 10.8358 1.5 11.25 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25V6.75C16.5 7.16421 16.1642 7.5 15.75 7.5C15.3358 7.5 15 7.16421 15 6.75V3H11.25C10.8358 3 10.5 2.66421 10.5 2.25Z"
                    fill="#4643EE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2803 1.71967C16.5732 2.01256 16.5732 2.48744 16.2803 2.78033L8.03033 11.0303C7.73744 11.3232 7.26256 11.3232 6.96967 11.0303C6.67678 10.7374 6.67678 10.2626 6.96967 9.96967L15.2197 1.71967C15.5126 1.42678 15.9874 1.42678 16.2803 1.71967Z"
                    fill="#4643EE"
                  />
                </svg>
              </td>
              <td>
                {curr.risk === "Medium" ? (
                  <div className="medium">
                    <div className="medium-circle"></div>
                    Medium
                  </div>
                ) : curr.risk === "High" ? (
                  <div className="High">
                    <div className="High-circle"></div>
                    High
                  </div>
                ) : (
                  <div className="Low">
                    <div className="Low-circle"></div>
                    Low
                  </div>
                )}
              </td>
              <td
                style={{
                  color: "#050505",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {curr.trigger}
              </td>
              <td
                style={{
                  color: "#050505",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {curr.inQueue}
              </td>
              <td>{curr.addedOn}</td>
              <td>
                <div className="review">
                  <div
                    className="reviewStatus"
                    style={{
                      color: "#050505",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    {curr.reviewStatus}
                  </div>
                  <div className="reviewDate">{curr.reviewDate}</div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PendingTable;
