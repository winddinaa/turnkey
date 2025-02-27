import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { LogoIcon, NotViewIcon, ViewIcon } from "../../components/Icon";
import InputComponent from "../../components/Input/InputComponent";
import SwitchComponent from "../../components/Input/SwitchComponent";
import ButtonComponent from "../../components/common/Button";
import { setPermission } from "../../reduxs/auth/authSlice";
import loginSVG from "../../assets/images/login.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const isLargScreen = useSelector((state) => state.screenSize.isLargeScreen);
  return (
    <div className="flex flex-row vw-[100vw] vh--[100vh] bg-localWhite ">
      <div
        className="w-[50vw] h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${loginSVG})` }}
      />

      <Formik
        initialValues={{ username: "", password: "", remember: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("=> values", values);
          if (["admin", "employee"].includes(values.username)) {
            console.log("=> username");
            if (values.username === "employee") {
              dispatch(setPermission(["emp"]));
              localStorage.setItem("permission", ["employee", "admin"]);
              navigate("/AreaLevel");
            } else {
              dispatch(setPermission(["employee", "admin"]));
              localStorage.setItem("permission", ["employee", "admin"]);
              navigate("/admin-kpis-department");
            }
          }
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
          <form onSubmit={handleSubmit}>
            <div
              className={`flex flex-col items-center justify-center gap-5 w-[50vw] h-[100vh] bg-localWhite ${
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

              <InputComponent
                label="Username"
                variant="static"
                placeholder="Enter your username"
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: "username",
                      value: e.target.value,
                    },
                  });
                }}
              />
              <InputComponent
                label="Password"
                variant="static"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                icon={
                  showPassword ? (
                    <div
                      className="cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    >
                      <ViewIcon />
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    >
                      <NotViewIcon />
                    </div>
                  )
                }
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: "password",
                      value: e.target.value,
                    },
                  });
                }}
              />
              <div className="flex flex-row justify-between w-[100%] ">
                <div className="flex flex-row gap-5">
                  <SwitchComponent />
                  <Typography variant="paragraph">Remember Me</Typography>
                </div>
                <Typography variant="paragraph" className="text-localError">
                  Forget Password?
                </Typography>
              </div>
              <ButtonComponent type="submit" className="bg-primary">
                Login
              </ButtonComponent>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
