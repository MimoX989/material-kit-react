import Head from "next/head";
import NextLink from "next/link";
import { Layout as WebLayout } from "src/layouts/web/layout";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import Imgcarousel from "src/sections/imgcarousel/img-carousel";
import { bgcolor } from "@mui/system";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { red } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff000",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 280,
  width: 200,
  textAlign: "center",
  border: "black",
  borderRadius: 3,
  borderStyle: "solid",
  borderWidth: "thin",
  color: theme.palette.text.secondary,
}));

const Page = () => (
  <>
    <Head>
      <title>Home | Kedsports</title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="xl" style={{ backgroundColor: "#fff000" }}>
        <Box
          sx={{
            display: "flex",
            padding: 0,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "300px",
          }}
        >
          <Imgcarousel />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box
          sx={{
            py: 5,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" sx={{ mb: 3 }} variant="h3">
            Welcome to Kedsports!
          </Typography>
          <Typography align="center" color="text.secondary" variant="body1">
            We are sports acadamy in Delhi.
          </Typography>
          <Button
            component={NextLink}
            href="/"
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowLeftIcon />
              </SvgIcon>
            }
            sx={{ mt: 3 }}
            variant="contained"
          >
            Go to dashboard
          </Button>
        </Box>
      </Container>

      <Container maxWidth="xl" style={{ backgroundColor: "#f5fff9" }}>
        <Box
          sx={{
            py: 5,
            textAlign: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Box>
            <h1>Our Services</h1>
            <Stack
              padding={3}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              justifyContent="space-around"
              spacing={2}
            >
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
              <Item>Item 4</Item>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box
          sx={{
            py: 5,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" sx={{ mb: 3 }} variant="h3">
            Get skilled with our professional trainers!
          </Typography>
          <Typography align="center" color="text.secondary" variant="body1">
            10+ trainers & professional with national level exp.
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box
                sx={{
                  py: 0,
                  width: "100%",
                  height: 400,
                  backgroundColor: "purple",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  width="100%"
                  height="100%"
                  style={{objectFit:"cover"}}
                ></img>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  py: 3,
                  width: "100%",
                  height: 400,
                  backgroundColor: "yellow",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography align="center" sx={{ mb: 3 }} variant="h3">
                  Join Us!
                </Typography>
                <Typography align="center" color="text.secondary" variant="body1">
                  Limited seats available.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            py: 5,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography align="center" color="text.secondary" variant="body1">
            Get prepared for National & State level sport competitions!
          </Typography>
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Page;
