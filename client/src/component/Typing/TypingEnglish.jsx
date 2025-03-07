import { useState, useEffect } from "react";

function TypingEnglish() {
  const defaultText =
    "The quick brown fox jumps over the lazy dog. Practice typing with this text.";
  const [text, setText] = useState(defaultText),
    [input, setInput] = useState(""),
    [time, setTime] = useState(0),
    [started, setStarted] = useState(false),
    [fileName, setFileName] = useState(""),
    [errors, setErrors] = useState(0);

  useEffect(() => {
    let timer;
    if (started) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [started]);

  const handleChange = (e) => {
    if (!started) setStarted(true);
    const newValue = e.target.value;
    setInput(newValue);

    let errorCount = 0;
    newValue.split("").forEach((char, i) => {
      if (char !== text[i]) errorCount++;
    });
    setErrors(errorCount);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => setText(e.target.result);
      reader.readAsText(file);
    }
  };

  const handleDefaultText = () => {
    setText(defaultText);
    setFileName("");
  };

  const wordsTyped = input.trim().split(" ").length;
  const accuracy =
    text.length > 0
      ? (((text.length - errors) / text.length) * 100).toFixed(2)
      : 100;
  const speed = time > 0 ? ((wordsTyped / time) * 60).toFixed(2) : 0;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          English Typing Speed Test
        </h1>

        <div className="flex justify-between items-center mb-4">
          <input
            type="file"
            accept=".txt"
            onChange={handleFileUpload}
            className="border p-2 rounded-md cursor-pointer"
          />
          <button
            onClick={handleDefaultText}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Load Default Text
          </button>
        </div>

        {fileName && (
          <p className="text-sm text-gray-600 text-center">Uploaded: {fileName}</p>
        )}

        <div className="border p-4 rounded-lg bg-gray-50 text-lg leading-relaxed mb-4">
          {text.split("").map((char, i) => (
            <span
              key={i}
              className={`${
                input[i]
                  ? input[i] === char
                    ? "text-green-500"
                    : "text-red-500"
                  : "text-gray-900"
              }`}
            >
              {char}
            </span>
          ))}
        </div>

        <textarea
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          value={input}
          onChange={handleChange}
          placeholder="Start typing here..."
        />

        <p className="mt-4 text-center text-lg font-semibold text-gray-800">
          ⏳ Time: <span className="text-blue-500">{time}s</span> | 📝 Words:{" "}
          <span className="text-blue-500">{wordsTyped}</span> | 🎯 Accuracy:{" "}
          <span className="text-blue-500">{accuracy}%</span> | 🚀 Speed:{" "}
          <span className="text-blue-500">{speed} WPM</span>
        </p>
      </div>
    </div>
  );
}

export default TypingEnglish;
