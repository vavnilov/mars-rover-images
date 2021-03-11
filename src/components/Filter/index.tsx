import React, { Dispatch } from "react";
import { Action } from "../../common/interfaces";
import { CameraSelector, DatePicker, RoverSelector } from "./sections";

interface Props {
  dispatch: Dispatch<Action>;
}

export const Filter = ({ dispatch }: Props) => {
  return (
    <div className="filter">
      <h1>
        Please use the below filters to view the corresponding images from the
        Mars Rovers.
      </h1>
      <div className="filter-items">
        <DatePicker dispatch={dispatch} />
        <RoverSelector dispatch={dispatch} />
        <CameraSelector dispatch={dispatch} />
      </div>
    </div>
  );
};
