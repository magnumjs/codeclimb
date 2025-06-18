import React, { useState, useEffect } from "react";
import ExerciseTabs from "./components/ExerciseTabs";
import CodeEditor from "./components/CodeEditor";
import TestResults from "./components/TestResults";
import exercises from "./data/exercises";
import runTests from "./utils/runTests";
// ... existing imports ...

import './App.css'; // Ensure this import statement is included for the global App styles

// ... rest of code ...
export default function App() {
  const [exerciseIdx, setExerciseIdx] = useState(0);
  const [codes, setCodes] = useState(exercises.map((ex) => ex.starterCode));
  const [testResults, setTestResults] = useState(null);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const exercise = exercises[exerciseIdx];
  const code = codes[exerciseIdx];

  const handleRun = () => {
    setTestResults(runTests(code, exercise.tests, exercise.functionName));
  };

  const handleChangeExercise = (idx) => {
    setExerciseIdx(idx);
    setTestResults(null);
    setTimer(0);
    setIsSubmitted(false);
    if (intervalId) clearInterval(intervalId);
    const newInterval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setIntervalId(newInterval);
  };

  const handleCodeChange = (e) => {
    const newCodes = [...codes];
    newCodes[exerciseIdx] = e.target.value;
    setCodes(newCodes);
  };

  const handleSubmit = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setIsSubmitted(true);
    setShowSummary(true);
  };

  // Format timer as mm:ss
  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  const isRunning = intervalId !== null;

  useEffect(() => {
    if (showSummary) {
      const timeout = setTimeout(() => setShowSummary(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [showSummary]);

  return (
    <div className="App">
      <div className="top-bar">
        <div className="left-group">
          <h1 className="logo">CodeClimb</h1>
        </div>
        <div className="right-group">
          <select
            value={exerciseIdx}
            onChange={(e) => handleChangeExercise(Number(e.target.value))}
          >
            {exercises.map((ex, idx) => (
              <option key={ex.name} value={idx}>
                {ex.name}
              </option>
            ))}
          </select>
          <span className={`timer ${isRunning ? "running" : isSubmitted ? "submitted" : "stopped"}`}>
            ⏱ {minutes}:{seconds}
          </span>
          <button onClick={handleSubmit}>Submit</button>
          <img src="/avatar.svg" alt="User" className="avatar" />
        </div>
      </div>

      <div className="main-layout">
        <div className="description-pane">
          <h2>Exercise Description</h2>
          <div className="description-content">
            {exercise && exercise.description}
          </div>
        </div>
        <div className="editor-pane">
          <h3 style={{ textAlign: "center" }}>{exercise.name}</h3>
          <CodeEditor value={code} onChange={handleCodeChange} readOnly={isSubmitted} />
        </div>
        <div className="results-pane">
          <TestResults testResults={testResults} onRun={handleRun} />
        </div>
      </div>
      {showSummary && (
        <div style={{
          position: "fixed",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -30%)",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          zIndex: 1000
        }}>
          <h3>Summary</h3>
          <p>Time Taken: {minutes}:{seconds}</p>
          <p>Tests Passed: {testResults?.pass ?? 0} / {testResults?.total ?? 0}</p>
        </div>
      )}
    </div>
  );
}