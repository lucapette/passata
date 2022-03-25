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
        <Modal.Card.Header showClose={false}>
          <Modal.Card.Title>{props.topic}</Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <Columns>
            <Columns.Column>
              <Level>
                <Level.Item>
                  <p className="title">{props.text}</p>
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
            <Columns.Column>
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
