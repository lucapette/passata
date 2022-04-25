import { formatDistance } from "date-fns";
import Pomodoro from "../../types/pomodoro";

type PomodoroListProps = {
  data: Pomodoro[];
};

const PomodoroList: React.FC<PomodoroListProps> = (props) => {
  const today = new Date();
  return (
    <>
      {props.data.map((pomodoro, index) => (
        <div className="box" key={index}>
          <article className="media">
            <div className="media-item">
              {pomodoro.duration / 60} minutes spent on{" "}
              <span className="tag">{pomodoro.label}</span>
              {formatDistance(pomodoro.completedAt, today, {
                addSuffix: true,
              })}
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default PomodoroList;
