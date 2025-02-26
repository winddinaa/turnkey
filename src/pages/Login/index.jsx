import React from "react";
import loginSVG from "../../assets/images/login.svg";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { LogoIcon } from "../../components/Icon";
import { Typography } from "@material-tailwind/react";
import InputComponent from "../../components/Input/InputComponent";
import SwitchComponent from "../../components/Input/SwitchComponent";
import ButtonComponent from "../../components/common/Button";
const LoginPage = () => {
  const dispatch = useDispatch();
  const isLargScreen = useSelector((state) => state.screenSize.isLargeScreen);
  console.log("=> isLargScreen", isLargScreen);
  return (
    <div className="flex flex-row vw-[100vw] vh--[100vh] bg-localWhite ">
      <div
        className="w-[50vw] h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${loginSVG})` }}
      />
      <div
        className={`flex flex-col items-center justify-center gap-5 w-[50vw] h-[100vh] bg-localLightGrey ${
          isLargScreen ? "px-[10vw]" : "px-[5vw]"
        }`}
      >
        <LogoIcon
          width={`${isLargScreen ? "222.8" : "111.4"}`}
          height={`${isLargScreen ? "84.99" : "42.5"}`}
        />
        <Typography variant="h2" className="text-primary">
          Welcome to Turkey
        </Typography>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("=>values", values);

            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <>
              <InputComponent
                label="Username"
                variant="static"
                placeholder="Enter your username"
              />
              <InputComponent
                label="Password"
                variant="static"
                placeholder="Enter your password"
              />
              <div className="flex flex-row justify-between w-[100%] ">
                <div className="flex flex-row gap-5">
                  <SwitchComponent />
                  <Typography variant="p">Remember Me</Typography>
                </div>
                <Typography variant="p" className="text-localError">
                  Forget Password?
                </Typography>
              </div>
              <ButtonComponent className="bg-primary">Login</ButtonComponent>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
