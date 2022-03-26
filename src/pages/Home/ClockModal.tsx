import { StopCircle } from "lucide-react";
import { Button, Icon, Modal, Progress } from "react-bulma-components";

type ClockModalProps = {
  show: boolean;
  text: string;
  progress: number;
  stopClock: () => void;
  topic: string;
};

const ClockModal: React.FC<ClockModalProps> = (props) => {
  return (
    <Modal show={props.show}>
      <Modal.Card>
        <Modal.Card.Header showClose={false}>
          <Modal.Card.Title className="has-text-centered">
            Working on: {props.topic}
          </Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body className="has-text-centered">
          <p className="title">{props.text}</p>

          <Progress
            max={100}
            value={props.progress}
            color={props.progress === 100 ? "success" : "primary"}
          ></Progress>
          <Button onClick={props.stopClock}>
            <Icon>
              <StopCircle />
            </Icon>
          </Button>
        </Modal.Card.Body>
      </Modal.Card>
    </Modal>
  );
};

export default ClockModal;
