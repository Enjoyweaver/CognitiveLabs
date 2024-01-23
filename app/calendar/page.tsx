"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTask, setNewTask] = useState("");
  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("calendar").select();
      setTasks(data || []);
    };
    fetchData();
  }, []);

  const insertTask = async () => {
    try {
      const { data, error } = await supabase
        .from("calendar")
        .upsert([
          {
            task_id: tasks.length + 1,
            task: newTask,
          },
        ])
        .select();

      if (error) {
        console.error(
          "Error inserting task:",
          (error as unknown as Error).message
        );
      } else {
        console.log("Inserted task:", data);
        const { data: updatedData } = await supabase.from("calendar").select();
        setTasks(updatedData || []);
      }
    } catch (error) {
      console.error("Error inserting task:", (error as Error).message);
    }
  };

  // Mock 30-day calendar with a grid layout
  const daysInMonth = 31;
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const getDayOfWeek = (day) => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = (day - 1) % weekdays.length;
    return weekdays[dayIndex];
  };

  const renderCalendar = () => {
    const calendarRows = [];
    for (let i = 0; i < daysInMonth; i += 7) {
      const rowDays = days.slice(i, i + 7);
      calendarRows.push(
        <div key={i} className="calendar-row">
          {rowDays.map((day) => (
            <div key={day} className="calendar-day">
              <div className="day-of-week">{getDayOfWeek(day)}</div>
              <div className="day-number">{day}</div>
            </div>
          ))}
        </div>
      );
    }
    return calendarRows;
  };

  return (
    <div>
      <form>
        <label>
          New Task:
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={insertTask}>
          Insert Task
        </button>
      </form>
      <div>
        <h2>Mock 30-Day Calendar</h2>
        <div className="calendar-container">{renderCalendar()}</div>
      </div>
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.slice(0, 10).map((task) => (
            <li key={task.task_id}>{task.task}</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .calendar-container {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
        }

        .calendar-row {
          display: flex;
          justify-content: space-between;
        }

        .calendar-day {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: center;
        }

        .day-of-week {
          font-weight: bold;
        }

        .day-number {
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
}
