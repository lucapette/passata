import format from "date-fns/format";
import { Box, Columns } from "react-bulma-components";
import Pomodoro from "../../models/pomodoro";

type PomodoroListProps = {
  data: Pomodoro[];
};

const PomodoroList: React.FC<PomodoroListProps> = (props) => {
  return (
    <Columns>
      {props.data.map((pomodoro) => (
        <Columns.Column size={4}>
          <Box>{format(pomodoro.completedAt, "yyyy/MM/dd")}</Box>
        </Columns.Column>
      ))}
    </Columns>
  );
};

export default PomodoroList;
