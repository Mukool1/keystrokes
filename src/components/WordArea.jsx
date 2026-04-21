import { useContext, useEffect, useRef } from "react";
import { keyItems } from "../store/key-item-store";

const WordArea = () => {
  const { quote, typedText, setTypedText, status, setStatus, generateWords, restartTest } = useContext(keyItems);
  const inputRef = useRef(null);

  // Keep input focused
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  // Tab to restart, Enter for next quote
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        restartTest();
        if (inputRef.current) inputRef.current.focus();
      }
      if (e.key === "Enter" && status === "finished") {
        generateWords();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [restartTest, generateWords, status]);

  const handleChange = (e) => {
    if (status === "finished") return;
    if (status === "idle") setStatus("typing");

    const val = e.target.value;
    if (val.length <= quote.length) {
      setTypedText(val);

      // Finish instantly when all characters are typed
      if (val.length === quote.length) {
        setStatus("finished");
      }
    }
  };

  // Calculate progress percentage
  const progress = quote.length > 0 ? Math.round((typedText.length / quote.length) * 100) : 0;

  const renderText = () => {
    return quote.split("").map((char, index) => {
      let colorClass = "text-secondary";

      if (index < typedText.length) {
        colorClass = typedText[index] === char
          ? "text-success fw-bold"
          : "text-danger bg-danger bg-opacity-25";
      }

      return <span key={index} className={colorClass}>{char}</span>;
    });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "800px" }}>
      <div className="card shadow-sm border-0">
        <div className="card-body p-5">
          {/* Quote text */}
          <p className="fs-4 mb-4 font-monospace" style={{ userSelect: "none", lineHeight: "1.8" }}>
            {renderText()}
          </p>

          {/* Progress bar */}
          <div className="progress mb-3" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-success"
              style={{ width: `${progress}%`, transition: "width 0.1s" }}
            ></div>
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            className="form-control form-control-lg bg-light"
            placeholder="Start typing..."
            value={typedText}
            onChange={handleChange}
            disabled={status === "finished" || !quote}
          />

          {/* Buttons and hint */}
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <small className="text-muted">
              Tab = restart &nbsp;|&nbsp; Enter = next (after finish)
            </small>
            <div>
              <button className="btn btn-outline-secondary btn-sm me-2" onClick={restartTest}>
                Restart
              </button>
              <button className="btn btn-outline-primary btn-sm" onClick={generateWords}>
                New Words
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordArea;
