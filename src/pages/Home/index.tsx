import "bulma/css/bulma.min.css";
import React, { useEffect, useState } from "react";
import { Columns, Form } from "react-bulma-components";
import Pomodoro from "../../models/pomodoro";
import Timer from "../../services/timer";
import ClockModal from "./ClockModal";
import PomodoroList from "./PomodoroList";

enum ClockState {
  NOT_READY,
  READY,
  RUNNING,
  DONE,
}

const pomodoros: Pomodoro[] = [
  {
    topic: "client 1",
    completedAt: Date.parse("2022/03/23 08:00"),
    duration: 25 * 60,
  },
  {
    topic: "client 2",
    completedAt: Date.parse("2022/03/23 08:30"),
    duration: 25 * 60,
  },
];

const timer = new Timer();

const Home = () => {
  useEffect(() => {
    const title = document.title.split(" - ").at(-1);

    document.title = `${clockText} - ${title}`;
  });
  const [clockText, setClockText] = useState("25:00");
  const [progress, setProgress] = useState(0);

  timer.on("tick", () => {
    setProgress((timer.elapsed / timer.secondsToRun) * 100);
    setClockText(timer.clockFormat() + "");
  });

  timer.on("done", () => {
    setClockState(ClockState.DONE);
    setClockText("🎉");
    setTopic("");
  });

  const [clockState, setClockState] = useState(ClockState.NOT_READY);
  const [topic, setTopic] = useState("");

  const startPomodoro = () => {
    setClockState(ClockState.RUNNING);
    timer.start();
  };

  const stopPomodoro = () => {
    setClockState(ClockState.NOT_READY);
    timer.stop();
    setTopic("");
    setProgress(0);
    setClockText("25:00");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      startPomodoro();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.currentTarget.value);
    setClockState(
      e.currentTarget.value.length > 0 ? ClockState.READY : ClockState.NOT_READY
    );
  };
  return (
    <>
      <Columns>
        <Columns.Column size="one-third">
          <Form.Input
            placeholder="What are you working on today?"
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={topic}
            disabled={clockState === ClockState.RUNNING}
          />
        </Columns.Column>
        <Columns.Column size="two-thirds">
          <PomodoroList data={pomodoros} />
        </Columns.Column>
      </Columns>
      <ClockModal
        topic={topic}
        show={clockState === ClockState.RUNNING}
        progress={progress}
        text={clockText}
        stopClock={stopPomodoro}
      />
    </>
  );
};

export default Home;
