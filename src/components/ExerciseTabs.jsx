import React from "react";

export default function ExerciseTabs({ exercises, exerciseIdx, onChange }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {exercises.map((ex, idx) => (
        <button
          key={ex.name}
          onClick={() => onChange(idx)}
          style={{
            marginRight: 8,
            fontWeight: exerciseIdx === idx ? "bold" : "normal",
            background: exerciseIdx === idx ? "#e0e0e0" : "#fff",
            border: "1px solid #ccc",
            borderRadius: 4,
            padding: "4px 12px",
            cursor: "pointer",
          }}
        >
          {ex.name}
        </button>
      ))}
    </div>
  );
}