import "bulma/css/bulma.min.css";
import { PlayCircle, StopCircle } from "lucide-react";
import React, { useState } from "react";
import { Button, Columns, Content, Form, Icon } from "react-bulma-components";

enum TimerState {
  NOT_READY,
  READY,
  RUNNING,
  DONE,
}

const Home = () => {
  const [timerState, setTimerState] = useState(TimerState.NOT_READY);
  const [topic, setTopic] = useState("");

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      setTimerState(TimerState.RUNNING);
      setTopic("");
      console.log(`starting pomodoro with ${topic}`);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.currentTarget.value);
    setTimerState(
      e.currentTarget.value.length > 0 ? TimerState.READY : TimerState.NOT_READY
    );
  };
  return (
    <Columns>
      <Columns.Column size="one-third">
        <Content>
          <Form.Input
            placeholder="What are you working on?"
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={topic}
            disabled={timerState === TimerState.RUNNING}
          />
        </Content>
        <Button.Group>
          <Button disabled={timerState !== TimerState.READY}>
            <Icon>
              <PlayCircle />
            </Icon>
          </Button>

          <Button disabled={timerState !== TimerState.RUNNING}>
            <Icon>
              <StopCircle />
            </Icon>
          </Button>
        </Button.Group>
      </Columns.Column>
    </Columns>
  );
};

export default Home;
