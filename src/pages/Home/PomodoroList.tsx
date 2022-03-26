import { formatDistance } from "date-fns";
import { Box, Columns, Media, Tag } from "react-bulma-components";
import Pomodoro from "../../models/pomodoro";

type PomodoroListProps = {
  data: Pomodoro[];
};

const PomodoroList: React.FC<PomodoroListProps> = (props) => {
  const today = new Date();
  return (
    <Columns>
      {props.data.map((pomodoro) => (
        <Columns.Column size={4}>
          <Box>
            <Media>
              <Media.Item>
                {pomodoro.duration / 60} minutes spent on{" "}
                <Tag>{pomodoro.topic}</Tag>
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
