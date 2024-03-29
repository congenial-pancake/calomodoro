import { useState, useEffect, React } from "react";
import { Box, Button, Card, NumberInput } from "@mantine/core";

export default function TimerComponent() {
  const [value, setValue] = useState(30);
  const [startTimer, setStartTimer] = useState(false);
  useEffect(() => {
    if (value > 0 && startTimer) {
      setTimeout(() => {
        setValue(value - 1);
      }, 1000);
    }
    if (value === 0 && startTimer) {
      setStartTimer(false);
    }
  }, [value, startTimer]);

  const timerButtonHandler = () => {
    setStartTimer(true);
  };
  return (
    <>
      <Box sx={{ width: 100 }} mx="auto">
        <Card>
          <NumberInput
            hideControls
            value={value}
            onChange={(val) => setValue(val)}
            min={0}
          />
          <Button onClick={timerButtonHandler}>Save</Button>
        </Card>
      </Box>
    </>
  );
}
