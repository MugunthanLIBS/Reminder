import { useEffect, useState } from "react";
import { TbClockBolt } from "react-icons/tb";

export default function App() {
  const [simulatedTime, setSimulatedTime] = useState(new Date());
  const [fastMode, setFastMode] = useState(false);
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminders, setReminders] = useState([]);

  // CLOCK
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedTime(prev => {
        if (fastMode) {
          const t = new Date(prev);
          t.setMinutes(t.getMinutes() + 1);
          return t;
        }
        return new Date();
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [fastMode]);

  // STRIKE LOGIC
  useEffect(() => {
    setReminders(prev =>
      prev.map(r =>
        simulatedTime >= r.reminderTime ? { ...r, done: true } : r )
    );}, [simulatedTime]);

  // ADD REMINDER - FIXED
  const addReminder = () => {
    if (!text.trim()) {
      alert("Please enter reminder text");
      return;
    }
    
    if (!time) {
      alert("Please select a time");
      return;
    }

    try {
      const [h, m] = time.split(":");
      const reminderTime = new Date(simulatedTime);
      
      // Validate time
      const hour = parseInt(h, 10);
      const minute = parseInt(m, 10);
      
      if (isNaN(hour) || hour < 0 || hour > 23 || 
          isNaN(minute) || minute < 0 || minute > 59) {
        alert("Please enter a valid time (00:00 to 23:59)");
        return;
      }
      
      reminderTime.setHours(hour, minute, 0, 0);

      setReminders([
        ...reminders,
        {
          text: text.trim(),
          reminderTime,
          done: false
        }
      ]);

      setText("");
      setTime("");
    } catch (error) {
      alert("Error creating reminder. Please check the time format.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-xl shadow-lg">
        {/* CLOCK */}
        <div className="flex items-center justify-between mb-4 bg-red-300 border rounded-md border-none px-4">
          <span className="font-bold text-2xl">
            {simulatedTime.toLocaleTimeString()}
            {fastMode && <span className="ml-2 text-xs">(FAST)</span>}
          </span>
          <TbClockBolt
            className={`text-red-600 text-2xl cursor-pointer p-1 rounded 
      hover:bg-red-200 transition-colors ${fastMode ? "bg-red-100" : ""}`}
            onClick={() => setFastMode(!fastMode)}
            size={42}
          />
        </div>

        {/* REMINDERS - Scrollable container */}
        <div className="max-h-64 overflow-y-auto mb-4 border rounded-md border-none bg-gray-200 p-2">
          <ul className="space-y-2">
            {reminders.map((r, i) => (
              <li 
                key={i} 
                className={`p-2 border rounded border-none ${r.done ? "bg-gray-50" : "bg-white"}`}
              >
                <div className={`flex items-center justify-between ${r.done ? "line-through text-gray-400" : ""}`}>
                  <div className="font-medium truncate mr-2 flex-1">{r.text}</div>
                  <div className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                    {r.reminderTime.toLocaleTimeString([], {
                      hour: "2-digit", 
                      minute: "2-digit"
                    })}
                  </div>
                </div>
              </li>
            ))}
            
            {reminders.length === 0 && (
              <li className="text-center text-gray-400 py-4">
                No reminders yet. Add one below!
              </li>
            )}
          </ul>
        </div>

        {/* ADD */}
        <div className="flex gap-2 mt-4">
          <input
            className="rounded bg-blue-200 focus:border-sky-400 focus:border-2 focus:outline-none px-2 py-1 w-full"
            placeholder="Reminder text"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addReminder();
              }
            }}
          />

          <input
            type="time"
            className="border rounded focus:border-sky-400 focus:border-2 focus:outline-none px-2 py-1"
            value={time}
            onChange={e => {
              setTime(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addReminder();
              }
            }}
          />
        </div>
        
        <button
          onClick={addReminder}
          className="mt-3 mx-auto block px-4 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!text.trim() || !time}
        >
          Add Reminder
        </button>
      </div>
    </div>
  );
}