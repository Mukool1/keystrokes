import { createContext, useState, useEffect } from "react";
import { getRandomWords } from "../data/words";

export const keyItems = createContext({});

const KeyProvider = ({ children }) => {
  const [quote, setQuote] = useState("");
  const [typedText, setTypedText] = useState("");
  const [duration, setDuration] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [status, setStatus] = useState("idle");

  // Generate new random words
  const generateWords = () => {
    setQuote(getRandomWords(30));
    setTypedText("");
    setStatus("idle");
    setTimeLeft(duration);
  };

  // Restart with same words
  const restartTest = () => {
    setTypedText("");
    setStatus("idle");
    setTimeLeft(duration);
  };

  // When duration changes, reset the test
  const changeDuration = (newDuration) => {
    setDuration(newDuration);
    setTimeLeft(newDuration);
    setQuote(getRandomWords(30));
    setTypedText("");
    setStatus("idle");
  };

  // Generate words on first load
  useEffect(() => {
    generateWords();
  }, []);

  // Timer
  useEffect(() => {
    let timer;
    if (status === "typing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && status === "typing") {
      setStatus("finished");
    }

    return () => clearInterval(timer);
  }, [status, timeLeft]);

  return (
    <keyItems.Provider
      value={{
        quote,
        typedText,
        setTypedText,
        duration,
        changeDuration,
        timeLeft,
        status,
        setStatus,
        generateWords,
        restartTest,
      }}
    >
      {children}
    </keyItems.Provider>
  );
};

export default KeyProvider;
