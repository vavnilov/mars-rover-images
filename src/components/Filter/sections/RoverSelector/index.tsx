import { Select } from "antd";
import { Dispatch } from "react";

import { CHANGE_ROVER } from "../../../../common/constants";
import { Action } from "../../../../common/interfaces";

const { Option } = Select;
const rovers: string[] = ["Curiosity", "Opportunity", "Spirit"];

interface Props {
  dispatch: Dispatch<Action>;
}

export const RoverSelector = ({ dispatch }: Props) => {
  const setRover = (value: string) => {
    dispatch({ type: CHANGE_ROVER, payload: value });
  };

  return (
    <Select
      defaultValue={rovers[0]}
      style={{ marginRight: 20, width: 120 }}
      placeholder="Rover"
      onChange={setRover}
    >
      <Option disabled value="">
        Rover
      </Option>
      {rovers.map((rover) => (
        <Option key={rover} value={rover}>
          {rover}
        </Option>
      ))}
    </Select>
  );
};
