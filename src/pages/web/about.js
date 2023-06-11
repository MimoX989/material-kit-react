import React from "react";
import Head from "next/head";
import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import { Layout as WebLayout } from "src/layouts/web/layout";

const Page = () => {
  return (
    <>
      <Head>
        <title>About | Kedsports</title>
      </Head>
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: "center",
            }}
          >
            <img
              alt="Under development"
              src="/assets/errors/error-404.png"
              style={{
                display: "inline-block",
                maxWidth: "100%",
                width: 400,
              }}
            />
          </Box>
          <Typography align="center" sx={{ mb: 3 }} variant="h3">
            About Page!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

Page.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Page;
