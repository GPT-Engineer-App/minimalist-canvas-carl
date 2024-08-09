import { useState, useEffect } from 'react';

const DotMatrixText = ({ text }) => {
  return (
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono mb-8">
      {text.split('').map((char, index) => (
        <span key={index} className="inline-block mx-[1px] my-[2px]">
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
  "567% YOY GROWTH.",
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
      <DotMatrixText text={statements[currentStatement]} />
      <div className="mt-8 text-xl">
        <DotMatrixText text="NOTHING (R)" />
      </div>
    </div>
  );
};

export default Index;
