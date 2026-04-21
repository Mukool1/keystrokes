import { useContext } from "react";
import { keyItems } from "../store/key-item-store";

const Results = () => {
  const { quote, typedText, duration, timeLeft, generateWords, restartTest } = useContext(keyItems);

  let errors = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] !== quote[i]) errors++;
  }

  const correctHits = Math.max(0, typedText.length - errors);
  const timeSpent = duration - timeLeft;
  const minutesSpent = timeSpent > 0 ? timeSpent / 60 : 1;
  const wpm = correctHits > 0 ? Math.round((correctHits / 5) / minutesSpent) : 0;

  let accuracy = 100;
  if (typedText.length > 0) {
    accuracy = Math.round((correctHits / typedText.length) * 100);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow-sm border-0 text-center p-5">
        <h2 className="mb-4">Results</h2>

        <div className="row mt-3">
          <div className="col-6 col-md-3 mb-3">
            <div className="text-secondary small">WPM</div>
            <div className="text-primary display-6 fw-bold">{wpm}</div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="text-secondary small">Accuracy</div>
            <div className="text-primary display-6 fw-bold">{accuracy}%</div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="text-secondary small">Errors</div>
            <div className="text-danger display-6 fw-bold">{errors}</div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="text-secondary small">Time</div>
            <div className="text-dark display-6 fw-bold">{timeSpent}s</div>
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-primary me-2" onClick={generateWords}>
            New Words
          </button>
          <button className="btn btn-secondary" onClick={restartTest}>
            Restart
          </button>
        </div>

        <small className="text-muted mt-3 d-block">
          Press Enter for new words
        </small>
      </div>
    </div>
  );
};

export default Results;
