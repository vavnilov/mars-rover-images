import { Radio } from "antd";

interface Props {
  rover: string | null;
  setRover: (rover: string) => void;
}

const rovers: string[] = ["Curiosity", "Opportunity", "Spirit"];
const { Group, Button } = Radio;

export const RoverSelect = ({ rover, setRover }: Props) => {
  const handleChange = (e: any) => {
    setRover(e.target.value);
  };
  return (
    <>
      <h1>Select a Rover to find out more information about it.</h1>
      <Group size="large" onChange={handleChange} defaultValue={rovers[0]}>
        {rovers.map((rover) => (
          <Button key={rover} value={rover}>
            {rover}
          </Button>
        ))}
      </Group>
    </>
  );
};
