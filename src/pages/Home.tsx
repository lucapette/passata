import "bulma/css/bulma.min.css";
import { PlayCircle, StopCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Columns,
  Content,
  Form,
  Icon,
  Level,
  Progress,
} from "react-bulma-components";
import Timer from "../services/timer";
import Pomodoro from "../models/pomodoro";

enum PomodoroState {
  NOT_READY,
  READY,
  RUNNING,
  DONE,
}

const pomodoros = [
  Pomodoro(Date.parse("2022/03/23 08:00"), 25 * 60),
  Pomodoro(Date.parse("2022/03/23 08:30"), 25 * 60),
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
    setTimerState(PomodoroState.DONE);
    setClockText("🎉");
  });

  const [timerState, setTimerState] = useState(PomodoroState.NOT_READY);
  const [topic, setTopic] = useState("");

  const startPomodoro = () => {
    setTimerState(PomodoroState.RUNNING);
    setTopic("");
    timer.start();
  };

  const stopPomodoro = () => {
    setTimerState(PomodoroState.NOT_READY);
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
      e.currentTarget.value.length > 0
        ? PomodoroState.READY
        : PomodoroState.NOT_READY
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
            disabled={timerState === PomodoroState.RUNNING}
          />
        </Columns.Column>
        <Columns.Column size="two-thirds">
          {pomodoros.map((p, i) => (
            <Card key={i}>{p.completedAt}</Card>
          ))}
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
              color={timerState === PomodoroState.DONE ? "success" : "primary"}
            ></Progress>
          </Content>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="one-third">
          <Button.Group>
            <Button
              disabled={timerState !== PomodoroState.READY}
              onClick={startPomodoro}
            >
              <Icon>
                <PlayCircle />
              </Icon>
            </Button>
            <Button
              disabled={timerState !== PomodoroState.RUNNING}
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
