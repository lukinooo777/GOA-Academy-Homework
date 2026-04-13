import { useState } from "react";

function QuizController({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="text-center p-5">

      {/* კითხვა */}
      <h2 className="text-xl mb-3">
        {questions[currentIndex]}
      </h2>

      {/* პროგრესი */}
      <p className="mb-4">
        Question {currentIndex + 1} of {questions.length}
      </p>

      {/* ღილაკები */}
      <div className="flex justify-center gap-4">

        {/* Previous */}
        <button
          onClick={() => setCurrentIndex(prev => prev - 1)}
          disabled={currentIndex === 0}
          className="bg-gray-500 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>

        {/* Next */}
        <button
          onClick={() => setCurrentIndex(prev => prev + 1)}
          disabled={currentIndex === questions.length - 1}
          className="bg-blue-500 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>

      </div>
    </div>
  );
}
import { useState } from "react";

function NameList() {
  const [names, setNames] = useState([]);

  // დამატება
  const addName = () => {
    // prevState ვიყენებთ immutable update-ისთვის
    setNames(prev => [...prev, "John"]);
  };

  // წაშლა index-ით
  const deleteName = (index) => {
    setNames(prev =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="text-center p-5">
      <button
        onClick={addName}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add John
      </button>

      <ul>
        {names.map((name, index) => (
          <li
            key={index}
            onClick={() => deleteName(index)}
            className="cursor-pointer hover:text-red-400"
          >
            {name} (click to delete)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
