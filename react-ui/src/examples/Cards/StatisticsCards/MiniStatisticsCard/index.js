/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function MiniStatisticsCard({ backgroundColor, title, count, percentage, icon, direction }) {
  return (
    <Card>
      <SuiBox backgroundColor={backgroundColor} backgroundGradient>
        <SuiBox p={2}>
          <Grid container alignItems="center">
            {direction === "left" ? (
              <Grid item>
                <SuiBox
                  backgroundColor={backgroundColor === "white" ? icon.color : "white"}
                  width="3rem"
                  height="3rem"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  color={backgroundColor === "white" ? "white" : "dark"}
                  boxShadow="md"
                  backgroundGradient
                >
                  <Icon fontSize="small" color="inherit">
                    {icon.component}
                  </Icon>
                </SuiBox>
              </Grid>
            ) : null}
            <Grid item xs={8}>
              <SuiBox ml={direction === "left" ? 2 : 0}>
                <SuiTypography
                  variant="button"
                  textColor={backgroundColor === "white" ? "text" : "white"}
                  opacity={backgroundColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                  {title.text}
                </SuiTypography>
                <SuiTypography
                  variant="h5"
                  fontWeight="bold"
                  textColor={backgroundColor === "white" ? "dark" : "white"}
                >
                  {count}{" "}
                  <SuiTypography variant="button" textColor={percentage.color} fontWeight="bold">
                    {percentage.text}
                  </SuiTypography>
                </SuiTypography>
              </SuiBox>
            </Grid>
            {direction === "right" ? (
              <Grid item xs={4}>
                <SuiBox
                  backgroundColor={backgroundColor === "white" ? icon.color : "white"}
                  width="3rem"
                  height="3rem"
                  marginLeft="auto"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  color={backgroundColor === "white" ? "white" : "dark"}
                  boxShadow="md"
                  backgroundGradient
                >
                  <Icon fontSize="small" color="inherit">
                    {icon.component}
                  </Icon>
                </SuiBox>
              </Grid>
            ) : null}
          </Grid>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
MiniStatisticsCard.defaultProps = {
  backgroundColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
  direction: "right",
};

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCard.propTypes = {
  backgroundColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default MiniStatisticsCard;
