import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const apiUrl = import.meta.env.VITE_API_URL

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCommitted = async (event, newValue) => {
    try {
      await fetch(`${apiUrl}/slider`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: newValue }),
      });
    } catch (err) {
      console.error('Failed to update slider value:', err);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        aria-label="Processing interval"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>
  );
}
