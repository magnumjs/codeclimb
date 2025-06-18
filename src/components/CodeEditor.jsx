import React from "react";

export default function CodeEditor({ value, onChange, label }) {
  return (
    <div>
      {label && <h3 style={{ textAlign: "center" }}>{label}</h3>}
      <textarea
        value={value}
        onChange={onChange}
        rows={10}
        style={{
          width: "100%",
          fontFamily: "monospace",
          fontSize: 16,
          marginTop: 12,
        }}
      />
    </div>
  );
}