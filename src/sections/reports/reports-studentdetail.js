import PropTypes from "prop-types";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";

export const ReportStudentDetail = (props) => {
  const { sname, rollno, cls, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="subtitle3">
              Class: {cls}
            </Typography>
            <Typography variant="h4">{sname}</Typography>
          </Stack>
          {/* <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          </Avatar> */}
        </Stack>
        {rollno && (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 1 }}>
            <Typography color="text.secondary" variant="caption">
              Roll No:
            </Typography>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <Typography color="success.main" variant="body2">
                {rollno}
              </Typography>
            </Stack>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

ReportStudentDetail.prototypes = {
  rollno: PropTypes.number,
  sx: PropTypes.object,
  cls: PropTypes.string.isRequired,
  sname: PropTypes.string.isRequired,
};
