import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Stack,
} from "@mui/material";

export const KYsheetHints = () => {
  return (
    <Container>
      <Stack spacing={2} direction="row" alignItems="center" sx={{ mb: 2 }}>
        <Typography
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "2px solid blue",
            textAlign: "center",
          }}
        >
          2
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
          Hints
        </Typography>
      </Stack>
      <Typography sx={{ fontWeight: 700, fontSize: "14px", mb: 1 }}>
        Please Check if the following items is applicable
      </Typography>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                WHAT CAN HAPPEN
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                Yes
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                No
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                WHERE / HOW
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                WHAT CAN BE DONE
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Electric Shock(Annexure 5)
            </Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Electric related work
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF / Put LOTO / Know which area is stillavailable /
              Discharge power residual
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Falling(Annexure 1){" "}
            </Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Height /Opening / Dark Area /Wrong area footing{" "}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Safety belt / Barricade area / Put sign / foot confirmation /
              lightening/ slow movement
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>Drop</Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Height work / Hanging work
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Barricade the drop zone / Hanging point confirmation / Call at the
              point of handover
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>Cut / Pinch</Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              lron sheet / projection / Burr/ During use of cutting tools
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF / Put LOTO / Know which area is stillavallable /
              Discharge power residual
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>Slip</Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Foot / Hand / Sorrounding oil /liquid
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF / Put LOTO /Know which area is still availabte /
              Discharge power residual
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Trip over / Tumble
            </Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Electric related work
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF/ Put LOTO / Know which area is stilavailable /.Discharge
              power residual
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Sandwiched / caught
            </Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Electric related work
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF/ Put LOTO:/ Know which area is stillavailable /
              Discharge power residual
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>To Hit / Bump</Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Electric related work
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF/ Put LOTO:/ Know which area is stillavailable /
              Discharge power residual
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>Burns and Fires</Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Electric related work
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF/ Put LOTO:/ Know which area is stillavailable /
              Discharge power residual
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>Dust Particles</Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Electric related work
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF/ Put LOTO:/ Know which area is stillavailable /
              Discharge power residual
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>Backaches</Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Electric related work
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF/ Put LOTO:/ Know which area is stillavailable /
              Discharge power residual
            </Typography>
          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>Suffocation</Typography>
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <input type="radio" name="ElectricShock" />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Confined area / Fuel or chemical leakage
            </Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: "12px" }}>
              Power OFF/ Put LOTO:/ Know which area is stillavailable /
              Discharge power residual
            </Typography>
          </TableCell>
        </TableBody>
      </Table>
    </Container>
  );
};
