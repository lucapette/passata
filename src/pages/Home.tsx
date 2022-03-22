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
import Timer from "../services/timer";

enum TimerState {
  NOT_READY,
  READY,
  RUNNING,
  DONE,
}

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
    setTimerState(TimerState.DONE);
    setClockText("🎉");
  });

  const [timerState, setTimerState] = useState(TimerState.NOT_READY);
  const [topic, setTopic] = useState("");

  const startPomodoro = () => {
    setTimerState(TimerState.RUNNING);
    setTopic("");
    timer.start();
  };

  const stopPomodoro = () => {
    setTimerState(TimerState.NOT_READY);
    timer.stop();
    setProgress(0);
    setClockText("25:00");
  };

  const onStart = () => startPomodoro();

  const onStop = () => stopPomodoro();

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      startPomodoro();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.currentTarget.value);
    setTimerState(
      e.currentTarget.value.length > 0 ? TimerState.READY : TimerState.NOT_READY
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
            disabled={timerState === TimerState.RUNNING}
          />
        </Columns.Column>
        <Columns.Column size="two-thirds">yo</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="one-third">
          <Content>
            <Level>
              <Level.Item>
                <div>
                  <p className="heading"></p>
                  <p className="title">{clockText}</p>
                </div>
              </Level.Item>
            </Level>

            <Progress
              max={100}
              value={progress}
              color={timerState === TimerState.DONE ? "success" : "primary"}
            ></Progress>
          </Content>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="one-third">
          <Button.Group>
            <Button
              disabled={timerState !== TimerState.READY}
              onClick={onStart}
            >
              <Icon>
                <PlayCircle />
              </Icon>
            </Button>
            <Button
              disabled={timerState !== TimerState.RUNNING}
              onClick={onStop}
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
