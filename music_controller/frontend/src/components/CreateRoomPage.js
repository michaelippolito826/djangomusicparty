import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core/TextField";
import { FormHelperText } from "@material-ui/core/FormHelperText";
import { FormControl } from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import { Radio } from "@material-ui/core/Radio";
import { FormControlLabel } from "@material-ui/core/FormControlLabel";

export default class CreateRoomPage extends Component {
  defaultValue = 2;

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography></Typography>
        </Grid>
      </Grid>
    );
  }
}
