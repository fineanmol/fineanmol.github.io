import React, { Suspense } from "react";
import Lottie from "react-lottie-player";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = ({ animationData }) => {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Lottie
          loop
          animationData={animationData}
          play
        />
      </div>
    </Suspense>
  );
};

export default DisplayLottie;
