import React from "react";
import Head from "next/head";
import { Layout as WebLayout } from "src/layouts/web/layout";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Container, Chip, Button, Link, Stack, TextField, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Page = () => {
  const router = useRouter();
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      name: Yup.string().max(255).required("Name is required"),
      message: Yup.string().max(255).required("Message cannot be blank!"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signUp(values.email, values.name, values.password);
        router.push("/");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Contact Us | Kedsports</title>
      </Head>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            md: "row",
            xs: "column",
          },
        }}
      >
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
              Contact Us!
            </Typography>
            <Typography align="center" color="text.secondary" variant="body1">
              Fill out the form and a member from our team will soon get in touch with you within a
              min, or DM us on any of our social links provided below.
            </Typography>

            <Stack
              spacing={3}
              direction="row"
              sx={{
                mt: 5,
              }}
            >
              <Chip label="Facebook" href="#basic-chip" clickable icon={<FacebookRoundedIcon />} />
              <Chip label="LinkedIn" href="#basic-chip" clickable icon={<LinkedInIcon />} />
              <Chip label="Gmail" href="#basic-chip" clickable icon={<EmailRoundedIcon />} />
            </Stack>
          </Box>
        </Container>
        <Container>
          <Box
            sx={{
              maxWidth: 550,
              px: 3,
              py: 8,
              width: "100%",
            }}
          >
            <div>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Typography variant="h4">Get in touch!</Typography>
                <Typography color="text.secondary" variant="body2">
                  Have any query? &nbsp;
                </Typography>
              </Stack>
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Message"
                    name="message"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    multiline
                    rows={4}
                    value={formik.values.message}
                  />
                </Stack>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                  Continue
                </Button>
              </form>
            </div>
          </Box>
        </Container>
      </Box>
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
    </>
  );
};

Page.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Page;
