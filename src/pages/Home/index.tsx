import "bulma/css/bulma.min.css";
import React, { useEffect, useState } from "react";
import { Columns, Container, Form, Section } from "react-bulma-components";
import Pomodoro from "../../types/pomodoro";
import Timer from "../../services/timer";
import ClockModal from "./ClockModal";
import PomodoroList from "./PomodoroList";
import { ClockState, isClockRunning } from "../../types/clock";
import { addPomodoro } from "../../slices/pomodoroSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const timer = new Timer();

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
      value: "🎉",
    });
  });

  const startPomodoro = () => {
    setClock({
      ...clock,
      title: task,
      value: "25:00", //TODO: use the timer function
      state:
        clock.state === ClockState.READY
          ? ClockState.WORKING
          : ClockState.RESTING,
    });
    timer.start(5);
    setTask("");
  };

  const startBreak = () => {
    setClock({
      ...clock,
      state: ClockState.RESTING,
      title: "☕️☕️☕️",
      progress: 0,
    });
    timer.start(5);
  };

  const stopPomodoro = () => {
    timer.stop();

    setClock({
      state: ClockState.NOT_READY,
      title: "",
      value: "25:00", //TODO: use the timer function
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
      <Section>
        <Container>
          <Form.Input
            placeholder="What are you working on today?"
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={task}
          />
        </Container>
      </Section>
      <Section>
        <Columns>
          <Columns.Column size="two-thirds">
            <PomodoroList data={pomodoros} />
          </Columns.Column>
        </Columns>
      </Section>
      <ClockModal
        clock={clock}
        stopClock={stopPomodoro}
        startBreak={startBreak}
      />
    </>
  );
};

export default Home;
