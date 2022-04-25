import React, { useEffect, useRef, useState } from "react";
import Pomodoro from "../../types/pomodoro";
import Timer from "../../services/timer";
import ClockModal from "./ClockModal";
import PomodoroList from "./PomodoroList";
import { ClockState, isClockRunning } from "../../types/clock";
import { addPomodoro } from "../../slices/pomodoroSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const timer = new Timer(25 * 60);

const Home = () => {
  const dispatch = useAppDispatch();
  const pomodoros = useAppSelector((state) => state.pomodoro.pomodoros);
  const savePomodoro = (pomodoro: Pomodoro) => {
    dispatch(addPomodoro(pomodoro));
  };
  useEffect(() => {
    if (isClockRunning(clock)) {
      document.title = clock.value;
    } else {
      document.title = "Get it done!";
    }
  });
  const [task, setTask] = useState("");

  const [clock, setClock] = useState({
    state: ClockState.NOT_READY,
    title: "",
    value: "",
    progress: 0,
  });

  const ref = useRef<HTMLInputElement>(null);

  timer.on("tick", () => {
    setClock({
      ...clock,
      progress: (timer.elapsed / timer.secondsToRun) * 100,
      value: timer.clockFormat() + "",
    });
  });

  timer.on("done", () => {
    if (clock.state === ClockState.WORKING) {
      savePomodoro({
        label: clock.title,
        duration: timer.secondsToRun,
        completedAt: Date.now(),
      });
    }
    setClock({
      ...clock,
      progress: 100,
      state:
        clock.state === ClockState.WORKING
          ? ClockState.DONE_WORKING
          : ClockState.NOT_READY,
      value: "🎉🎉🎉",
    });
  });

  const startPomodoro = () => {
    setClock({
      ...clock,
      title: task,
      value: timer.clockFormat(),
      state:
        clock.state === ClockState.READY
          ? ClockState.WORKING
          : ClockState.RESTING,
    });
    timer.start(5);
    setTask("");
    ref.current?.blur();
  };

  const startBreak = () => {
    timer.reset(5);
    setClock({
      ...clock,
      state: ClockState.RESTING,
      title: "☕️☕️☕️",
      progress: 0,
      value: timer.clockFormat(),
    });
    timer.start(5);
  };

  const stopPomodoro = () => {
    timer.stop();

    setClock({
      state: ClockState.NOT_READY,
      title: "",
      value: "",
      progress: 0,
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      startPomodoro();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.currentTarget.value);
    setClock({
      ...clock,
      state:
        e.currentTarget.value.length > 0
          ? ClockState.READY
          : ClockState.NOT_READY,
    });
  };

  return (
    <>
      <section className="section">
        <form className="form">
          <input
            className="input"
            ref={ref}
            placeholder="What are you working on today?"
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={task}
          />
        </form>
      </section>
      <section className="section">
        <div className="columns">
          <div className="column two-thirds">
            <PomodoroList data={pomodoros} />
          </div>
        </div>
      </section>
      <ClockModal
        clock={clock}
        stopClock={stopPomodoro}
        startBreak={startBreak}
      />
    </>
  );
};

export default Home;
