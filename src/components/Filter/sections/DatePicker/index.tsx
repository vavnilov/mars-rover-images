import { DatePicker as Picker } from "antd";
import moment from "moment";
import { Action } from "../../../../common/interfaces";
import { Dispatch } from "react";
import { CHANGE_DATE } from "../../../../common/constants";

interface Props {
  dispatch: Dispatch<Action>;
}

const defaultDate = "2021-03-06";

export const DatePicker = ({ dispatch }: Props) => {
  const handleDateChange = (date: any, dateString: string) => {
    dispatch({ type: CHANGE_DATE, payload: dateString });
  };

  const disabledDate = (current: any): boolean => {
    return current && current > moment();
  };

  return (
    <div className="date-picker">
      <Picker
        style={{ marginRight: 20, width: 275 }}
        format={"YYYY-MM-DD"}
        onChange={handleDateChange}
        disabledDate={disabledDate}
        defaultValue={moment(defaultDate)}
      />
    </div>
  );
};
