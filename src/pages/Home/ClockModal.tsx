import { StopCircle } from "lucide-react";
import {
  Button,
  Columns,
  Icon,
  Level,
  Modal,
  Progress,
} from "react-bulma-components";

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
        <Modal.Card.Header>
          <Modal.Card.Title>{props.topic}</Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <Columns>
            <Columns.Column size="one-third">
              <Level>
                <Level.Item>
                  <div>
                    <p className="title">{props.text}</p>
                  </div>
                </Level.Item>
              </Level>

              <Progress
                max={100}
                value={props.progress}
                color={props.progress === 100 ? "success" : "primary"}
              ></Progress>
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column size="one-third">
              <Button.Group>
                <Button onClick={props.stopClock}>
                  <Icon>
                    <StopCircle />
                  </Icon>
                </Button>
              </Button.Group>
            </Columns.Column>
          </Columns>
        </Modal.Card.Body>
      </Modal.Card>
    </Modal>
  );
};

export default ClockModal;
