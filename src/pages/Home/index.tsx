import "bulma/css/bulma.min.css";
import React, { useEffect, useState } from "react";
import { Columns, Container, Form, Section } from "react-bulma-components";
import Pomodoro from "../../types/pomodoro";
import Timer from "../../services/timer";
import ClockModal from "./ClockModal";
import PomodoroList from "./PomodoroList";
import { ClockState } from "../../types/clock";

const pomodoros: Pomodoro[] = [
  {
    topic: "client 1",
    completedAt: Date.now(),
    duration: 25 * 60,
  },
  {
    topic: "client 2",
    completedAt: Date.now() - 10000000,
    duration: 25 * 60,
  },
];

const timer = new Timer();

const Home = () => {
  useEffect(() => {
    if (
      clock.state === ClockState.WORKING ||
      clock.state === ClockState.RESTING
    ) {
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
