import React from "react";

export default function TestResults({ testResults, onRun }) {
  return (
  <div>
    <button
      onClick={onRun}
      style={{
        margin: "0 0 1rem 0",
        cursor: "pointer",
        width: "100%",
        padding: "8px 0",
        height: "40px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        backgroundColor: "#f9f9f9",
        borderRadius: "4px"
      }}
    >
      Run Tests
    </button>
    {testResults && (
      <div style={{
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "6px",
        background: "#fff"
      }}>
        {testResults.error && (
          <div style={{ color: "red", marginBottom: "8px" }}>
            Error: {testResults.error}
          </div>
        )}
        <ul>
          {testResults.results.map((r, i) => (
            <li
              key={i}
              style={{
                color: r.ok ? "green" : "red",
                marginBottom: 4,
              }}
            >
              Input: {JSON.stringify(r.input)} | Expected:{" "}
              {JSON.stringify(r.expected)}
            </li>
          ))}
        </ul>
        <div style={{ margin: "12px 0" }}>
          Passed: {testResults.pass} / {testResults.total}
        </div>
        <label>Console Output:</label>
        <textarea
          readOnly
          value={testResults.results.map(r => `Output: ${JSON.stringify(r.output)}`).join("\n")}
          style={{
            flex: 1,
            minHeight: "100px",
            background: "#111",
            color: "#0f0",
            fontFamily: "monospace",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #333"          }}
        />
      </div>
    )}
  </div>
);
}