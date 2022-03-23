import "bulma/css/bulma.min.css";
import { PlayCircle, StopCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Button,
  Columns,
  Content,
  Form,
  Icon,
  Level,
  Progress,
} from "react-bulma-components";
import Pomodoro from "../../models/pomodoro";
import Timer from "../../services/timer";
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
    setTimerState(ClockState.DONE);
    setClockText("🎉");
  });

  const [timerState, setTimerState] = useState(ClockState.NOT_READY);
  const [topic, setTopic] = useState("");

  const startPomodoro = () => {
    setTimerState(ClockState.RUNNING);
    setTopic("");
    timer.start();
  };

  const stopPomodoro = () => {
    setTimerState(ClockState.NOT_READY);
    timer.stop();
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
    setTimerState(
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
            disabled={timerState === ClockState.RUNNING}
          />
        </Columns.Column>
        <Columns.Column size="two-thirds">
          <PomodoroList data={pomodoros} />
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="one-third">
          <Content>
            <Level>
              <Level.Item>
                <div>
                  <p className="title">{clockText}</p>
                </div>
              </Level.Item>
            </Level>

            <Progress
              max={100}
              value={progress}
              color={timerState === ClockState.DONE ? "success" : "primary"}
            ></Progress>
          </Content>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="one-third">
          <Button.Group>
            <Button
              disabled={timerState !== ClockState.READY}
              onClick={startPomodoro}
            >
              <Icon>
                <PlayCircle />
              </Icon>
            </Button>
            <Button
              disabled={timerState !== ClockState.RUNNING}
              onClick={stopPomodoro}
            >
              <Icon>
                <StopCircle />
              </Icon>
            </Button>
          </Button.Group>
        </Columns.Column>
      </Columns>
    </>
  );
};

export default Home;
