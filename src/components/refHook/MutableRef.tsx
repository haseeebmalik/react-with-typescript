import { useState, useRef, useEffect } from "react";
export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);
  const stopTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
      console.log("interValRef.current",interValRef.current)
    }
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    console.log("interValRef",interValRef)
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      HookTimer - {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
