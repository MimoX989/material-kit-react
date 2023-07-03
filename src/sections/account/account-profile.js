import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/assets/avatars/avatar-cao-yu.png',
  city: 'Delhi',
  country: 'IND',
  class:'3A',
  rollno:'25',
  admission_no:'1022210EA',
  jobTitle: 'Senior Developer',
  name: 'Sanjay Mohanty',
  timezone: 'GTM-7'
};

export const AccountProfile = () => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 80,
            mb: 2,
            width: 80
          }}
        />
        <Typography
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          Class: {user.class}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.city} {user.country}
        </Typography>
        <Typography
          color="text.secondary"
          variant="overline"
        >
          ( {user.admission_no} )
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
