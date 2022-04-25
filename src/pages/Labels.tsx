import { useAppSelector } from "../store";
import { Label } from "../types/label";

const Labels = () => {
  const labels = useAppSelector<Label[]>((state) => state.label.labels);
  return (
    <section className="section">
      {labels.map((label) => (
        <div className="box" key={label.id}>
          <div>{label.value}</div>
        </div>
      ))}
    </section>
  );
};

export default Labels;
