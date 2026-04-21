import { useContext } from "react";
import { keyItems } from "../store/key-item-store";

const Header = () => {
  const { timeLeft, duration, changeDuration, status } = useContext(keyItems);

  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="navbar-brand mb-0 h1">Keystrokes</span>

        <div className="d-flex align-items-center gap-3">
          {/* Duration picker buttons */}
          <div className="btn-group btn-group-sm">
            {[15, 30, 60].map((sec) => (
              <button
                key={sec}
                className={`btn ${duration === sec ? "btn-warning" : "btn-outline-light"}`}
                onClick={() => changeDuration(sec)}
                disabled={status === "typing"}
              >
                {sec}s
              </button>
            ))}
          </div>

          <span className="text-light fw-bold fs-5">
            <span className="text-warning">{timeLeft}s</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
