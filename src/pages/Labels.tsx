import { useAppSelector, useAppDispatch } from "../store";
import { Label } from "../types/label";

import { Plus } from "lucide-react";
import { addLabel } from "../slices/labelSlice";
import { ulid } from "ulid";
import { useState } from "react";

const Labels = () => {
  const dispatch = useAppDispatch();
  const labels = useAppSelector<Label[]>((state) => state.label.labels);

  const [value, setValue] = useState("");

  const add = () => {
    dispatch(
      addLabel({
        id: ulid(),
        value: value.replace(/\s/g, "_"),
      })
    );
    setValue("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      add();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <section className="section">
        {labels.map((label) => (
          <div className="box" key={label.id}>
            <div>{label.value}</div>
          </div>
        ))}
      </section>
      <section className="section">
        <div className="columns">
          <div className="column is-one-third">
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  type="text"
                  className="input"
                  value={value}
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                />
              </div>
              <div className="control">
                <button
                  disabled={value.length === 0}
                  className="button"
                  onClick={add}
                >
                  <span className="icon">
                    <Plus />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Labels;
