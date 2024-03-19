import { useState } from "react";
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
  Alert,
} from "@mui/material";

export default function KYsheetDetails() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    setSelectedCheckboxes((prevSelected) => {
      if (event.target.checked) {
        return [...prevSelected, checkboxName];
      } else {
        return prevSelected.filter((name) => name !== checkboxName);
      }
    });
  };
  const labels = [
    "Power OFF",
    "Removal of safety key / plug",
    "Cover of hot working area of machine / locatio",
    "Pressure source turned OFF",
    "Release residual energy",
    "Barricade fall point",
    "Fuel stop",
    "Remove remaining fuel",
    'Display "Under Work" board / "Under Maintenance"',
  ];

  const MappedCheckBoxes = () => {
    return labels.map((label) => (
      <FormControlLabel
        key={label}
        sx={{ padding: 0 }}
        control={
          <Checkbox
            sx={{ paddingY: 0 }}
            size="small"
            name={label}
            onClick={handleCheckboxChange}
            checked={selectedCheckboxes.includes(label)}
          />
        }
        label={<Typography sx={{ fontSize: "12px" }}>{label}</Typography>}
      />
    ));
  };
  console.log(selectedCheckboxes);

  return (
    <Container maxWidth="95%">
      <Stack spacing={2} maxWidth="400px">
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "2px solid blue",
              textAlign: "center",
            }}
          >
            1
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
            KY Sheet Details
          </Typography>
        </Stack>
        <Typography sx={{ fontWeight: 700, fontSize: "10px" }}>
          Please Check if the following items is applicable
        </Typography>
        <Stack>
          <FormGroup onSubmit={handleSubmit} spacing={1}>
            <MappedCheckBoxes />
          </FormGroup>
        </Stack>
        <Alert
          severity="warning"
          sx={{
            border: "1px solid red",
            width: "400px",
            height: "160px",
            backgroundColor: "",
          }}
        >
          <ol>
            <li>
              <Typography sx={{ fontSize: "12px" }}>
                Power for electrical portable equipment shall be taken from
                industrial socket board of appropriate rating
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: "12px" }}>
                No portable equlpment shall be connected through IT Power
                sockets / sockets of alectrical panel
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: "12px" }}>
                Obtaln approval from concern department for power connection
                from PDB
              </Typography>
            </li>
          </ol>
        </Alert>
      </Stack>
    </Container>
  );
}
