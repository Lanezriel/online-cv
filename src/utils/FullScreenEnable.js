import React from 'react';
import { useFullScreenHandle } from 'react-full-screen';

export const fullScreenEnable = (Component) => {
  return (props) => {
    const fsHandle = useFullScreenHandle();

    return <Component fsHandle={fsHandle} {...props} />;
  }
}