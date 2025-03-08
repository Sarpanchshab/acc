import { useState, useEffect } from "react";
import axios from "axios";

const TypingTest = () => {
  const [textSamples, setTextSamples] = useState([]);
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [selectedTime, setSelectedTime] = useState(1);
  const [time, setTime] = useState(selectedTime * 60);
  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState(0);
  const [totalTypedChars, setTotalTypedChars] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Fetch typing text
  useEffect(() => {
    axios
      .get("https://baconipsum.com/api/?type=meat-and-filler&paras=3")
      .then((response) => {
        setTextSamples(response.data);
        setText(response.data[0]);
      })
      .catch(() => {
        setTextSamples(["Default fallback text in case API fails."]);
        setText("Default fallback text in case API fails.");
      });
  }, []);

  // Timer logic
  useEffect(() => {
    let timer;
    if (started && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0) {
      setIsFinished(true);
      setShowModal(true);
    }
    return () => clearInterval(timer);
  }, [started, time]);

  const handleChange = (e) => {
    if (!started) setStarted(true);
    const newValue = e.target.value;
    setInput(newValue);
    
    setTotalTypedChars(newValue.length);
    let errorCount = 0;
    const words = text.split(" ");
    const inputWords = newValue.split(" ");
    
    inputWords.forEach((word, i) => {
      if (word !== words[i]) errorCount++;
    });

    setErrors(errorCount);
  };

  const handleReset = () => {
    setInput("");
    setErrors(0);
    setTotalTypedChars(0);
    setTime(selectedTime * 60);
    setStarted(false);
    setIsFinished(false);
    setShowModal(false);
  };

  const handleNextText = () => {
    if (textIndex < textSamples.length - 1) {
      setTextIndex(textIndex + 1);
      setText(textSamples[textIndex + 1]);
      handleReset();
    }
  };

  const grossWPM = ((totalTypedChars / 5) / selectedTime).toFixed(2);
  const netWPM = (grossWPM - errors).toFixed(2);
  const accuracy = totalTypedChars > 0
    ? (((totalTypedChars / 5 - errors) / (totalTypedChars / 5)) * 100).toFixed(2)
    : 100;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 w-full">
      <div className="bg-white shadow-lg rounded-lg p-6 w-11/12">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Online Typing Test
        </h1>

        {!started && (
          <div className="mb-4 flex justify-center items-center space-x-4">
            <label className="text-lg font-semibold">Set Time (minutes):</label>
            <input
              type="number"
              className="border p-2 rounded-md w-20"
              value={selectedTime}
              onChange={(e) => {
                const newTime = parseFloat(e.target.value);
                if (!isNaN(newTime) && newTime > 0) {
                  setSelectedTime(newTime);
                  setTime(newTime * 60);
                }
              }}
              disabled={started}
              min="0.1"
              step="0.1"
            />
          </div>
        )}

        <div className="border p-4 rounded-lg bg-gray-50 text-lg leading-relaxed mb-4 break-words">
          {text.split(" ").map((word, i) => (
            <span
              key={i}
              className={`mr-2 ${
                i === input.split(" ").length - 1
                  ? "bg-yellow-300" 
                  : input.split(" ")[i] === word
                  ? "text-green-500"
                  : "text-gray-900"
              }`}
            >
              {word}
            </span>
          ))}
        </div>

        <textarea
          className="w-full p-3 border rounded-md"
          value={input}
          onChange={handleChange}
          placeholder="Start typing here..."
          disabled={isFinished}
        />

        <p className="mt-4 text-center text-lg font-semibold text-gray-800">
          ⏳ Time Left: {time}s | 📝 Typed: {totalTypedChars} chars |
          ❌ Errors: {errors} | 🎯 Accuracy: {accuracy}% | 🚀 Gross WPM: {grossWPM} | 
          🏆 Net WPM: {netWPM}
        </p>

        <div className="flex space-x-4 mt-4">
          <button onClick={handleNextText} className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Next
          </button>
          <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Reset
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Typing Test Results</h2>
            <p>🎯 Accuracy: {accuracy}%</p>
            <p>🚀 Gross WPM: {grossWPM}</p>
            <p>🏆 Net WPM: {netWPM}</p>
            <p>❌ Errors: {errors}</p>
            <button 
              onClick={handleReset} 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypingTest;
