import { useState, useEffect } from 'react';

const DotMatrixText = ({ text, size = 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl' }) => {
  return (
    <div className={`dot-matrix-text ${size} mb-8`}>
      {text.split('').map((char, index) => (
        <span key={index} className="dot-matrix-char">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

const statements = [
  "INNOVATION IS OUR CORE.",
  "NUMBERS ARE A RESULT.",
  "NOT THE END GOAL.",
  "EXECUTING OUR STRATEGY.",
  "FUELING INNOVATION.",
  "FOCUS FOR 2025.",
  "GRATEFUL FOR SUPPORT.",
];

const Index = () => {
  const [currentStatement, setCurrentStatement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatement((prev) => (prev + 1) % statements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <DotMatrixText text="CARL PEI" />
      <DotMatrixText text={statements[currentStatement]} size="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
      <div className="mt-8">
        <DotMatrixText text="NOTHING (R)" size="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
      </div>
    </div>
  );
};

export default Index;
