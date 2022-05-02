import React from "react";

import Lottie from "react-lottie";

const LottieFile = ({ name, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../../illustration/${name}.json`),
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieFile;
