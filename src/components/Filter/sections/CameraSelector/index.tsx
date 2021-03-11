import { Select } from "antd";
import { Dispatch } from "react";

import { CHANGE_CAMERA } from "../../../../common/constants";
import { Action } from "../../../../common/interfaces";

const { Option } = Select;
const cameras: string[] = [
  "ALL",
  "FHAZ",
  "RHAZ",
  "MAST",
  "CHEMCAM",
  "MAHLI",
  "MARDI",
  "NAVCAM",
  "PANCAM",
  "MINITES",
];

interface Props {
  dispatch: Dispatch<Action>;
}
export const CameraSelector = ({ dispatch }: Props) => {
  const setCamera = (value: string) => {
    dispatch({ type: CHANGE_CAMERA, payload: value });
  };
  return (
    <Select
      defaultValue={cameras[0]}
      style={{ width: 120 }}
      placeholder="Camera"
      onChange={setCamera}
    >
      <Option disabled value="">
        Camera
      </Option>
      {cameras.map((camera) => (
        <Option key={camera} value={camera}>
          {camera}
        </Option>
      ))}
    </Select>
  );
};
