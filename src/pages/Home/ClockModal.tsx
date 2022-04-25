import { StopCircle, PlayCircle } from "lucide-react";
import { Clock, ClockState, isClockRunning } from "../../types/clock";

type ClockModalProps = {
  clock: Clock;
  stopClock: () => void;
  startBreak: () => void;
};

const isActive = (clock: Clock) =>
  isClockRunning(clock) || clock.state === ClockState.DONE_WORKING;

const ClockModal: React.FC<ClockModalProps> = ({
  clock,
  stopClock,
  startBreak,
}) => {
  return (
    <div className={`modal ${isActive(clock) ? "is-active" : ""}`}>
      <div role="presentation" className="modal-background" />
      <div className="modal-card">
        <div className="modal-card-head">
          <div className="modal-card-title has-text-centered">
            {clock.title}
          </div>
        </div>
        <div className="modal-card-body has-text-centered">
          <p className="title">{clock.value}</p>

          <progress
            className={`progress ${
              clock.progress === 100 ? "is-success" : "is-primary"
            }`}
            max={100}
            value={clock.progress}
          ></progress>
          {isClockRunning(clock) && (
            <button className="button" onClick={stopClock}>
              <span className="icon">
                <StopCircle />
              </span>
            </button>
          )}
          {clock.state === ClockState.DONE_WORKING && (
            <button className="button" onClick={startBreak}>
              <span className="icon">
                <PlayCircle />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClockModal;
