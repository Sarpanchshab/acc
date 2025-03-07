import { useState, useEffect } from "react";

// Full Remington Gail keyboard mapping (Upper & Lower case)
const remingtonGailMap = {
  "q": "ॊ", "Q": "औ", "w": "ऄ", "W": "ओ", "e": "ऍ", "E": "ए", "r": "ऋ", "R": "अ", "t": "ट", "T": "ठ", "y": "य", "Y": "य़", "u": "उ", "U": "ऊ",
  "i": "इ", "I": "ई", "o": "ओ", "O": "औ", "p": "प", "P": "फ", "a": "अ", "A": "आ", "s": "स", "S": "श", "d": "द", "D": "ध",
  "f": "फ", "F": "ऋ", "g": "ग", "G": "घ", "h": "ह", "H": "ञ", "j": "ज", "J": "झ", "k": "क", "K": "ख", "l": "ल", "L": "ळ",
  "z": "ज़", "Z": "ज्ञ", "x": "क्ष", "X": "त्र", "c": "च", "C": "छ", "v": "व", "V": "भ", "b": "ब", "B": "भ", "n": "न", "N": "ण", "m": "म", "M": "ं",
  " ": " "
};

function HindiTypingTest() {
  const [text, setText] = useState("नमस्ते, यह हिंदी टाइपिंग टेस्ट है।"),
    [input, setInput] = useState(""),
    [time, setTime] = useState(0),
    [started, setStarted] = useState(false),
    [errors, setErrors] = useState(0);

  useEffect(() => {
    let timer;
    if (started) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [started]);

  const handleKeyPress = (e) => {
    if (!started) setStarted(true);
    const key = e.key;
    if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
      return;
    }
    if (remingtonGailMap[key]) {
      setInput((prev) => prev + remingtonGailMap[key]);
    }

    let errorCount = 0;
    input.split("").forEach((char, i) => {
      if (char !== text[i]) errorCount++;
    });
    setErrors(errorCount);
  };

  const wordsTyped = input.trim().split(" ").length;
  const accuracy = text.length > 0 ? ((text.length - errors) / text.length * 100).toFixed(2) : 100;
  const speed = time > 0 ? ((wordsTyped / time) * 60).toFixed(2) : 0;

  return (
    <div className="p-6 max-w-3xl mx-auto text-center" onKeyDown={handleKeyPress} tabIndex={0}>
      <h1 className="text-2xl font-bold mb-4">हिंदी टाइपिंग टेस्ट (Remington Gail)</h1>
      <p className="mb-4 p-2 border bg-gray-100 text-xl font-semibold">
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{ color: input[i] ? (input[i] === char ? "green" : "red") : "black" }}
          >
            {char}
          </span>
        ))}
      </p>
      <textarea
        className="w-full p-2 border text-xl"
        value={input}
        placeholder="यहाँ टाइप करें..."
        readOnly
      />
      <p className="mt-2 text-lg">समय: {time}s | शब्द: {wordsTyped} | शुद्धता: {accuracy}% | गति: {speed} WPM</p>
    </div>
  );
}

export default HindiTypingTest;