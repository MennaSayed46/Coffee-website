import React from 'react';
import style from './Loading.module.css';
import { Grid } from 'react-loader-spinner';

export default function Loading() {
  return (
    <>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#945d34"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />

    </>
  )
}
