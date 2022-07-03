import createStyles from "@material-ui/styles/createStyles";
import { makeStyles } from "@material-ui/core/styles";

const useSpinnerStyle = makeStyles((theme) => createStyles({
  tableResponsiveCenterWindow: {
    position: "fixed",
    display: "block",
    width: "100%",
    height: "100%",
    top: "41%",
    left: 0,
    textAlign: "center",
    opacity: 0.7,
    zIndex: 99,
  },
  spinner: {
    color: theme.palette.primary.main,
  },
  box: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  text: {
    color: theme.palette.primary.main,
    fontSize: "20px",
    FontWeight: "bold",
    position: "absolute",
  },
}));

export default useSpinnerStyle;
