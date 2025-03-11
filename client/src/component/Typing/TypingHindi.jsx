// import { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const remingtonGailMap = {
//   // Numbers and Symbols
//   "`": "़", "~": "द्य", "1": "1", "!": "।", "2": "2", "@": "/", "3": "3", "#": ":",
//   "4": "4", "$": "*", "5": "5", "%": "-", "6": "6", "^": "’", "7": "7", "&": "’",
//   "8": "8", "*": "द्ध", "9": "9", "(": "त्र", "0": "0", ")": "ऋ", "-": ";", "_": ".",
//   "=": "ृ", "+": "्",

//   // Top Row (QWERTYUIOP)
//   "q": "ु", "Q": "फ",
//   "w": "ू", "W": "ॅ",
//   "e": "म", "E": "म्",
//   "r": "त", "R": "त्",
//   "t": "ज", "T": "ज्",
//   "y": "ल", "Y": "ल्",
//   "u": "न", "U": "न्",
//   "i": "प", "I": "प्",
//   "o": "व", "O": "व्",
//   "p": "च", "P": "च्",
//   "[": "ख्", "{": "क्ष्",
//   "]": ",", "}": "द्व",
//   "\\": "(", "|": ")",  // Fixed this line

//   // Home Row (ASDFGHJKL;)
//   "a": "ं", "A": "ा",
//   "s": "े", "S": "ै",
//   "d": "क", "D": "क्",
//   "f": "ि‍", "F": "थ्",
//   "g": "ह", "G": "ळ",
//   "h": "ी", "H": "भ्",
//   "j": "र", "J": "श्र",
//   "k": "ा", "K": "ज्ञ",
//   "l": "स", "L": "स्",
//   ";": "य", ":": "रू",
//   "'": "श्", "\"": "ष्‍",

//   // Bottom Row (ZXCVBNM,./)
//   "z": "्र", "Z": "र््",
//   "x": "ग", "X": "ग्",
//   "c": "ब", "C": "ब्",
//   "v": "अ", "V": "ट",
//   "b": "इ", "B": "ठ",
//   "n": "द", "N": "छ",
//   "m": "उ", "M": "ड",
//   ",": "ए", "<": "ढ",
//   ".": "ण्", ">": "झ",
//   "/": "ध्", "?": "घ्",

//   // Spacebar
//   " ": " "
// };

// function HindiTypingTest() {
//   const [textSamples, setTextSamples] = useState([]);
//   const [textIndex, setTextIndex] = useState(0);
//   const [text, setText] = useState("Loading...");
//   const [input, setInput] = useState("");
//   const [time, setTime] = useState(0);
//   const [started, setStarted] = useState(false);
//   const [errors, setErrors] = useState(0);
//   const [duration, setDuration] = useState(60);
//   const [showModal, setShowModal] = useState(false);
//   const textareaRef = useRef(null); // Reference for textarea
//   const currentWordRef = useRef(null);

//   const fetchNewText = () => {
//     axios.get("http://localhost:4700/api/getAllHindiText")
//       .then((response) => {
//         if (response.data?.allMessage) {
//           const texts = response.data.allMessage.map(item => item.text);
//           setTextSamples(texts);
//           setText(texts[0] || "");
//           setTextIndex(0);
//           setInput("");
//           setTime(0);
//           setErrors(0);
//           setStarted(false);
//         }
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   };

//   useEffect(() => {
//     fetchNewText();
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (started) {
//       timer = setInterval(() => {
//         setTime((prev) => {
//           if (prev >= duration) {
//             clearInterval(timer);
//             setShowModal(true);
//             return prev;
//           }
//           return prev + 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [started, duration]);

//   useEffect(() => {
//     if (currentWordRef.current) {
//       currentWordRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   }, [input]);

//   // const handleKeyPress = (e) => {
//   //   if (!started) setStarted(true);

//   //   if (e.key === "Backspace") {
//   //     setInput((prev) => prev.slice(0, -1));
//   //   } else if (e.key === " ") {
//   //     e.preventDefault(); // Prevent default scrolling
//   //     setInput((prev) => prev + " "); // Add space manually
//   //   } else if (remingtonGailMap[e.key]) {
//   //     setInput((prev) => prev + remingtonGailMap[e.key]);
//   //   }

//   //   let errorCount = 0;
//   //   input.split("").forEach((char, i) => {
//   //     if (char !== text[i]) errorCount++;
//   //   });
//   //   setErrors(errorCount);
//   // };


//   const handleKeyPress = (e) => {
//     if (!started) setStarted(true);
  
//     if (e.key === "Backspace") {
//       setInput((prev) => prev.slice(0, -1));
//     } else if (e.key === " ") {
//       e.preventDefault();
//       setInput((prev) => prev + " ");
//     } else if (remingtonGailMap[e.key]) {
//       let newChar = remingtonGailMap[e.key];
  
//       // Check if the last character is "्" (Halant/Virama)
//       let lastChar = input.slice(-1);
//       if (lastChar === "्") {
//         // Replace last character with correct half-letter combination
//         setInput((prev) => prev.slice(0, -1) + newChar);
//       } else {
//         setInput((prev) => prev + newChar);
//       }
//     }
  
//     // Error checking logic
//     let errorCount = 0;
//     input.split("").forEach((char, i) => {
//       if (char !== text[i]) errorCount++;
//     });
//     setErrors(errorCount);
//   };
  
  

  
  
//   useEffect(() => {
//     setTimeout(() => {
//       if (textareaRef.current) {
//         textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
//       }
//     }, 100);
//   }, [input]); // Runs whenever `input` updates


//   const handleReset = () => {
//     setInput("");
//     setTime(0);
//     setErrors(0);
//     setStarted(false);
//     setShowModal(false);
//   };

//   const handleNextText = () => {
//     if (textIndex < textSamples.length - 1) {
//       const newIndex = textIndex + 1;
//       setTextIndex(newIndex);
//       setText(textSamples[newIndex]);
//       handleReset();
//     } else {
//       console.log("No more text available");
//     }
//   };

  
//   const wordsTyped = input.trim().split(" ").length;
//   const accuracy = text.length > 0 ? ((text.length - errors) / text.length * 100).toFixed(2) : 100;
//   const speed = time > 0 ? ((wordsTyped / (duration / 60))).toFixed(2) : 0;
//   const minutes = (time / 60).toFixed(2);

//   return (

//     <div className="px-10 text-center" onKeyDown={handleKeyPress} tabIndex={0}>
//       <h1 className="text-3xl font-bold mb-4 text-blue-600">Hindi Typing Test (Remington Gail)</h1>

//       <p className="mb-4 p-2 border bg-gray-100 text-xl h-120 overflow-auto">
//       {text.split(" ").map((word, i) => {
//         const wordsTypedArray = input.trim().split(" ");
//         const isCurrentWord = i === wordsTypedArray.length - (input.endsWith(" ") ? 0 : 1);
//         const isCorrect = wordsTypedArray[i] === word;

//         return (
//           <span
//             key={i}
//             ref={isCurrentWord ? currentWordRef : null}
//             style={{
//               color: wordsTypedArray[i]
//                 ? isCorrect
//                   ? "green"
//                   : "red"
//                 : "black",
//               backgroundColor: isCurrentWord ? "yellow" : "transparent",
//               padding: "2px 4px",
//               borderRadius: "4px",
//               marginRight: "4px",
//               display: "inline-block",
//             }}
//           >
//             {word}
//           </span>
//         );
//       })}
//     </p>



//       <textarea
//         ref={textareaRef} // Attach the reference
//         className="w-full p-2 border text-xl h-32 overflow-y-auto" // Added scrollable area
//         value={input}
//         placeholder="Type here..."
//         readOnly
//       />

//       <p className="mt-2 text-lg">Time: {time}s ({minutes} min) | Words: {wordsTyped} | Accuracy: {accuracy}% | Speed: {speed} WPM</p>

//       <div className="my-4">
//         {[1, 2, 5, 10, 15, 30, 60].map((min) => (
//           <label key={min} className="m-2">
//             <input type="radio" name="duration" value={min * 60} onChange={() => setDuration(min * 60)} /> {min} min
//           </label>
//         ))}
//       </div>

//       <button onClick={handleReset} className="p-2 bg-red-500 text-white rounded m-2">Reset</button>
//       <button onClick={handleNextText} className="p-2 bg-blue-500 text-white rounded m-2">Next</button>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-2xl font-bold mb-4">Test Completed!</h2>
//             <p className="text-lg">Time: {duration}s</p>
//             <p className="text-lg">Words Typed: {wordsTyped}</p>
//             <p className="text-lg">Accuracy: {accuracy}%</p>
//             <p className="text-lg">Speed: {speed} WPM</p>
//             <button onClick={handleReset} className="mt-4 p-2 bg-green-500 text-white rounded">Close</button>
//           </div>
//         </div>
//       )}

//     </div>

//   );
// }

// export default HindiTypingTest;

// import { useState, useEffect, useRef } from "react";
// import axios from "axios";

// function HindiTypingTest() {
//   const [textSamples, setTextSamples] = useState([]);
//   const [textIndex, setTextIndex] = useState(0);
//   const [text, setText] = useState("Loading...");
//   const [input, setInput] = useState("");
//   const [time, setTime] = useState(0);
//   const [started, setStarted] = useState(false);
//   const [errors, setErrors] = useState(0);
//   const [duration, setDuration] = useState(60);
//   const [showModal, setShowModal] = useState(false);
//   const textareaRef = useRef(null);
//   const currentWordRef = useRef(null);

//   const fetchNewText = async () => {
//     try {
//       const response = await axios.get("http://localhost:4700/api/getAllHindiText");
//       if (response.data?.allMessage) {
//         const texts = response.data.allMessage.map((item) => item.text);
//         setTextSamples(texts);
//         setText(texts[0] || "");
//         setTextIndex(0);
//         setInput("");
//         setTime(0);
//         setErrors(0);
//         setStarted(false);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchNewText();
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (started) {
//       timer = setInterval(() => {
//         setTime((prev) => {
//           if (prev >= duration) {
//             clearInterval(timer);
//             setShowModal(true);
//             return prev;
//           }
//           return prev + 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [started, duration]);

//   useEffect(() => {
//     if (currentWordRef.current) {
//       currentWordRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   }, [input]);

//   const handleInputChange = (e) => {
//     if (!started) setStarted(true);
//     setInput(e.target.value);
    
//     let errorCount = 0;
//     const typedWords = e.target.value.trim().split(" ");
//     const textWords = text.split(" ");
//     typedWords.forEach((word, i) => {
//       if (word !== textWords[i]) errorCount++;
//     });
//     setErrors(errorCount);
//   };

//   return (
//     <div className="px-10 text-center" tabIndex={0}>
//       <h1 className="text-3xl font-bold mb-4 text-blue-600">Hindi Typing Test (Indic Keyboard)</h1>

//       <p className="mb-4 p-2 border bg-gray-100 text-xl h-120 overflow-auto">
//         {text.split(" ").map((word, i) => {
//           const wordsTypedArray = input.trim().split(" ");
//           const isCurrentWord = i === wordsTypedArray.length - (input.endsWith(" ") ? 0 : 1);
//           const isCorrect = wordsTypedArray[i] === word;
//           const isError = wordsTypedArray[i] && wordsTypedArray[i] !== word;

//           return (
//             <span
//               key={i}
//               ref={isCurrentWord ? currentWordRef : null}
//               style={{
//                 color: isCorrect ? "green" : isError ? "red" : "black",
//                 backgroundColor: isCurrentWord ? "yellow" : "transparent",
//                 padding: "2px 4px",
//                 borderRadius: "4px",
//                 marginRight: "4px",
//                 display: "inline-block",
//               }}
//             >
//               {word}
//             </span>
//           );
//         })}
//       </p>

//       <textarea
//         ref={textareaRef}
//         className="w-full p-2 border text-xl h-32 overflow-y-auto"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Type here..."
//       />
//     </div>
//   );
// }

// export default HindiTypingTest;


import { useState, useEffect, useRef } from "react";
import axios from "axios";

const HindiTypingTest = () => {
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
  const [incorrectWords, setIncorrectWords] = useState([]);

  const textContainerRef = useRef(null);
  const currentWordRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:4700/api/getAllHindiText")
      .then((response) => {
        if (response.data && response.data.allMessage) {
          setTextSamples(response.data.allMessage.map((item) => item.text));
          setText(response.data.allMessage[0]?.text || "");
        } else {
          console.error("Invalid API response format", response);
        }
      })
      .catch((error) => console.error("API Fetch Error:", error));
  }, []);

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

  useEffect(() => {
    if (currentWordRef.current) {
      currentWordRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [input]);

  const handleChange = (e) => {
    if (!started) setStarted(true);
    const newValue = e.target.value;
    setInput(newValue);
    setTotalTypedChars(newValue.length);

    let errorCount = 0;
    const words = text.split(" ");
    const inputWords = newValue.split(" ");
    const incorrectIndices = [];

    inputWords.forEach((word, i) => {
      if (word !== words[i]) {
        errorCount++;
        incorrectIndices.push(i);
      }
    });

    setErrors(errorCount);
    setIncorrectWords(incorrectIndices);
  };

  const handleReset = () => {
    setInput("");
    setErrors(0);
    setTotalTypedChars(0);
    setTime(selectedTime * 60);
    setStarted(false);
    setIsFinished(false);
    setShowModal(false);
    setIncorrectWords([]);
  };

  const handleNextText = () => {
    if (textIndex < textSamples.length - 1) {
      setTextIndex(textIndex + 1);
      setText(textSamples[textIndex + 1]);
      handleReset();
    }
  };

  const grossWPM = ((totalTypedChars / 5) / selectedTime).toFixed(2);
  const netWPM = (grossWPM - errors / selectedTime).toFixed(2);
  const accuracy = totalTypedChars > 0
    ? (((totalTypedChars / 5 - errors) / (totalTypedChars / 5)) * 100).toFixed(2)
    : 100;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 w-full">
      <div className="bg-white shadow-lg rounded-lg p-6 w-11/12">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Hindi Typing Practice
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
              min="1"
              step="1"
            />
          </div>
        )}

        <div
          ref={textContainerRef}
          className="border p-4 rounded-lg overflow-y-auto bg-gray-50 text-lg leading-relaxed mb-4 break-words h-100"
        >
          {text.split(" ").map((word, i) => {
            const isCurrentWord = i === input.split(" ").length - 1;
            return (
              <span
                key={i}
                ref={isCurrentWord ? currentWordRef : null}
                className={`mr-2 ${
                  isCurrentWord
                    ? "bg-yellow-300 text-black font-bold"
                    : input.split(" ")[i] === word
                    ? "text-green-500"
                    : incorrectWords.includes(i)
                    ? "text-red-500"
                    : "text-gray-900"
                }`}
              >
                {word}
              </span>
            );
          })}
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

      {/* Results Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Test Completed!</h2>
            <p className="text-lg">🚀 Gross WPM: {grossWPM}</p>
            <p className="text-lg">🏆 Net WPM: {netWPM}</p>
            <p className="text-lg">🎯 Accuracy: {accuracy}%</p>
            <p className="text-lg">❌ Errors: {errors}</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md">
                Close
              </button>
              <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Retry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HindiTypingTest;
