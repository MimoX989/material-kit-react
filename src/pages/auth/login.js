import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import { MuiOtpInput } from "mui-one-time-password-input";
import { display } from "@mui/system";

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [method, setMethod] = useState("otplogin");
  const [loading, setLoading] = useState(false);
 
  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

  const formikadmin = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),

    onSubmit: async (values, helpers) => {
      try {
        setLoading(true);
        if (method === "adminlogin") {
          
          await auth.adminSignIn(values.email, values.password);
          router.push("/");
        } else {
          setLoading(false);
          console.log(values, "Invalid Authentication!");
        }
      } catch (err) {
        setLoading(false);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const formikstd = useFormik({
    initialValues: {
      email: "",
      otp: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      // sotp: Yup.string().max(255).required("OTP"),
    }),

    onSubmit: async (values, helpers) => {
      try {
        setLoading(true);
        if (method === "otplogin") {
          // console.log(values,"otplogin");
          await auth.studentSignIn(values.email, values.otp);
          router.push("/reports");
        } else {
          setLoading(false);
          console.log(values, "Invalid Authentication!");
        }
      } catch (err) {
        setLoading(false);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const handleComplete = (otpval) => {
    formikstd.values.otp = otpval;
  };

  const [otp, setOtp] = useState("");
  const handleChange = (notp) => {
    setOtp(notp);
  };

  const handleSkip = useCallback(() => {
    auth.skip();
    router.push("../web/home");
  }, [auth, router]);

  return (
    <>
      <Head>
        <title>Login | Kedsports</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <Tabs onChange={handleMethodChange} sx={{ mb: 3 }} value={method}>
              <Tab label="Student" value="otplogin" />
              <Tab label="Admin" value="adminlogin" />
            </Tabs>
            {method === "otplogin" && (
              <form noValidate onSubmit={formikstd.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={!!(formikstd.touched.email && formikstd.errors.email)}
                    fullWidth
                    helperText={formikstd.touched.email && formikstd.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formikstd.handleBlur}
                    onChange={formikstd.handleChange}
                    type="email"
                    value={formikstd.values.email}
                  />

                  <Box
                    sx={{
                      my: 5,
                      backgroundColor: "rgba(254, 242, 241, 0.73)",
                      p: 3,
                      borderRadius: 1,
                    }}
                  >
                    <Stack spacing={1}>
                      <Typography variant="body2">Enter your OTP</Typography>
                      <MuiOtpInput
                        value={otp}
                        onChange={handleChange}
                        onComplete={handleComplete}
                      />
                    </Stack>
                    <FormHelperText sx={{ mt: 2, textAlign: "center" }}>
                      Please enter one time password (OTP) sent at your provided email !
                    </FormHelperText>
                  </Box>
                </Stack>

                {formikstd.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formikstd.errors.submit}
                  </Typography>
                )}
                <LoadingButton
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  loading={loading}
                  variant="contained"
                >
                  <span>Continue</span>
                </LoadingButton>
                {/* <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                  Continue
                </Button> */}
                <Button fullWidth size="large" sx={{ mt: 3 }} onClick={handleSkip}>
                  Go to Homepage
                </Button>
                <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                  <div>
                    You can use <b>user@kedsports.in</b> and demo OTP <b>4321</b>
                  </div>
                </Alert>
              </form>
              // <div>
              //   <Typography sx={{ mb: 1 }} variant="h6">
              //     Not available
              //   </Typography>
              //   <Typography color="text.secondary">OTP login is under development mode!</Typography>
              // </div>
            )}
            {method === "adminlogin" && (
              <form noValidate onSubmit={formikadmin.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={!!(formikadmin.touched.email && formikadmin.errors.email)}
                    fullWidth
                    helperText={formikadmin.touched.email && formikadmin.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formikadmin.handleBlur}
                    onChange={formikadmin.handleChange}
                    type="email"
                    value={formikadmin.values.email}
                  />
                  <TextField
                    error={!!(formikadmin.touched.password && formikadmin.errors.password)}
                    fullWidth
                    helperText={formikadmin.touched.password && formikadmin.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formikadmin.handleBlur}
                    onChange={formikadmin.handleChange}
                    type="password"
                    value={formikadmin.values.password}
                  />
                </Stack>
                <FormHelperText sx={{ mt: 1 }}>
                  Enter password provided at the time of registration!
                </FormHelperText>
                {formikadmin.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formikadmin.errors.submit}
                  </Typography>
                )}
                <LoadingButton
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  loading={loading}
                  variant="contained"
                >
                  <span>Continue</span>
                </LoadingButton>
                {/* <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                  Continue
                </Button> */}
                <Button fullWidth size="large" sx={{ mt: 3 }} onClick={handleSkip}>
                  Go to Homepage
                </Button>
                <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                  <div>
                    You can use <b>user@kedsports.in</b> and password <b>Pass123</b>
                  </div>
                </Alert>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
