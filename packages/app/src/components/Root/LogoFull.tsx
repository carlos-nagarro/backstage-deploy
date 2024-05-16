import React from 'react';
import { makeStyles } from '@material-ui/core';
import CustomLogo from "/img/aswatson.png"

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  image: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  const classes = useStyles();

  return <img className={classes.image} src="/img/aswatson.png" alt="Logo" />


};

export default LogoFull;
