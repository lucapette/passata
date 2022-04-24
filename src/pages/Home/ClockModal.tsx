import { StopCircle, PlayCircle } from "lucide-react";
import { Button, Icon, Modal, Progress } from "react-bulma-components";
import { Clock, ClockState, isClockRunning } from "../../types/clock";

type ClockModalProps = {
  clock: Clock;
  stopClock: () => void;
  startBreak: () => void;
};

const ClockModal: React.FC<ClockModalProps> = ({
  clock,
  stopClock,
  startBreak,
}) => {
  return (
    <Modal
      show={
        clock.state !== ClockState.NOT_READY && clock.state !== ClockState.READY
      }
    >
      <Modal.Card>
        <Modal.Card.Header showClose={false}>
          <Modal.Card.Title className="has-text-centered">
            {clock.title}
          </Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body className="has-text-centered">
          <p className="title">{clock.value}</p>

          <Progress
            max={100}
            value={clock.progress}
            color={clock.progress === 100 ? "success" : "primary"}
          ></Progress>
          {isClockRunning(clock) && (
            <Button onClick={stopClock}>
              <Icon>
                <StopCircle />
              </Icon>
            </Button>
          )}
          {clock.state === ClockState.DONE_WORKING && (
            <Button onClick={startBreak}>
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
