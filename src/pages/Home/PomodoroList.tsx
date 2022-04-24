import { formatDistance } from "date-fns";
import { Box, Columns, Media, Tag } from "react-bulma-components";
import Pomodoro from "../../types/pomodoro";

type PomodoroListProps = {
  data: Pomodoro[];
};

const PomodoroList: React.FC<PomodoroListProps> = (props) => {
  const today = new Date();
  return (
    <Columns>
      {props.data.map((pomodoro, index) => (
        <Columns.Column size={4} key={index}>
          <Box>
            <Media>
              <Media.Item>
                {pomodoro.duration / 60} minutes spent on{" "}
                <Tag>{pomodoro.label}</Tag>
                {formatDistance(pomodoro.completedAt, today, {
                  addSuffix: true,
                })}
              </Media.Item>
            </Media>
          </Box>
        </Columns.Column>
      ))}
    </Columns>
  );
};

export default PomodoroList;
