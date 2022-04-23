import { StopCircle, PlayCircle } from "lucide-react";
import { Button, Icon, Modal, Progress } from "react-bulma-components";
import { Clock, ClockState } from "../../types/clock";

type ClockModalProps = {
  clock: Clock;
  stopClock: () => void;
  startBreak: () => void;
};

const ClockModal: React.FC<ClockModalProps> = (props) => {
  return (
    <Modal
      show={
        props.clock.state !== ClockState.NOT_READY &&
        props.clock.state !== ClockState.READY
      }
    >
      <Modal.Card>
        <Modal.Card.Header showClose={false}>
          <Modal.Card.Title className="has-text-centered">
            {props.clock.title}
          </Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body className="has-text-centered">
          <p className="title">{props.clock.value}</p>

          <Progress
            max={100}
            value={props.clock.progress}
            color={props.clock.progress === 100 ? "success" : "primary"}
          ></Progress>
          {(props.clock.state === ClockState.WORKING ||
            props.clock.state === ClockState.RESTING) && (
            <Button onClick={props.stopClock}>
              <Icon>
                <StopCircle />
              </Icon>
            </Button>
          )}
          {props.clock.state === ClockState.DONE_WORKING && (
            <Button onClick={props.startBreak}>
              <Icon>
                <PlayCircle />
              </Icon>
            </Button>
          )}
        </Modal.Card.Body>
      </Modal.Card>
    </Modal>
  );
};

export default ClockModal;
