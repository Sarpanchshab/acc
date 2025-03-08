import { useState, useEffect } from "react";

// Remington Gail keyboard mapping
const remingtonGailMap = {
  "~": "ॅ", "1": "१", "2": "२", "3": "३", "4": "४", "5": "५", "6": "६", "7": "७", "8": "८", "9": "९", "0": "०", "-": "-", "=": "ृ",
  "q": "ौ", "Q": "औ", "w": "ै", "W": "ऐ", "e": "ा", "E": "आ", "r": "ी", "R": "ई", "t": "ू", "T": "ऊ", "y": "ब", "Y": "भ", "u": "ह", "U": "ङ",
  "i": "ग", "I": "घ", "o": "द", "O": "ध", "p": "ज", "P": "झ", "[": "ड", "{": "ढ", "]": "़", "}": "ञ",
  "a": "ो", "A": "ओ", "s": "े", "S": "ए", "d": "्", "D": "अ", "f": "ि", "F": "इ", "g": "ु", "G": "उ", "h": "प", "H": "फ", "j": "र", "J": "ऱ",
  "k": "क", "K": "ख", "l": "त", "L": "थ", ";": "च", ":": "छ", "'": "ट", "\"": "ठ",
  "z": "ं", "Z": "ँ", "x": "म", "X": "ण", "c": "न", "C": "व", "v": "ल", "V": "ळ", "b": "स", "B": "श", "n": "य", "N": "ऋ", "m": "श", "M": "ष",
  ",": "स", "<": "ज्ञ", ".": "।", ">": "॥", "/": "य", "?": "रु",
  " ": " "
};

function HindiTypingTest() {
  const [text, setText] = useState("लोड हो रहा है..."),
    [input, setInput] = useState(""),
    [time, setTime] = useState(0),
    [started, setStarted] = useState(false),
    [errors, setErrors] = useState(0);

  // Fetch Hindi text from API
  useEffect(() => {
    fetch("https://hindi-quotes.vercel.app/api/random")  // Replace with any working Hindi quotes API
      .then((response) => response.json())
      .then((data) => {
        if (data.quote) {
          setText(data.quote);
          console.log(data.quote)
        } else {
          setText("कोई उद्धरण उपलब्ध नहीं है।");
        }
      })
      .catch((error) => {
        console.error("API से डेटा लाने में समस्या:", error);
        setText("डिफ़ॉल्ट हिंदी टेक्स्ट।");
      });
  }, []);

  useEffect(() => {
    let timer;
    if (started) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [started]);

  const handleKeyPress = (e) => {
    if (!started) setStarted(true);
    if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
      return;
    }
    if (remingtonGailMap[e.key]) {
      setInput((prev) => prev + remingtonGailMap[e.key]);
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
          <span key={i} style={{ color: input[i] ? (input[i] === char ? "green" : "red") : "black" }}>
            {char}
          </span>
        ))}
      </p>
      <textarea className="w-full p-2 border text-xl" value={input} placeholder="यहाँ टाइप करें..." readOnly />
      <p className="mt-2 text-lg">समय: {time}s | शब्द: {wordsTyped} | शुद्धता: {accuracy}% | गति: {speed} WPM</p>
    </div>
  );
}

export default HindiTypingTest;
