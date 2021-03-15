import React from "react";

function Task({ task: { key, summary, reporter, status, timeSpent } }) {
  return (
    <tr>
      <td>{key}</td>
      <td>{summary}</td>
      <td>{reporter}</td>
      <td>{status}</td>
      <td>{timeSpent}</td>
    </tr>
  );
}

export default Task;
