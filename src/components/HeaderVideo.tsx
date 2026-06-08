import React from "react";
import FsLightbox from 'fslightbox-react'
import { useFela } from "react-fela";

import homepageVideoThumb from "../assets/images/dist/video-thumb.png";

export const HeaderVideo = React.memo(() => {
  const [toggler, setToggler] = React.useState<boolean>(false);
  const { css } = useFela();


  return (
    <>
      <div
        className={`homepage-section__video-thumb`}
        onClick={() => setToggler(prev => !prev)}
      >
        <img src={homepageVideoThumb} alt='video thumb' />
      </div>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=MIKwXR2OFFM&ab_channel=EigenheimWunsch"]}
      />
    </>
  );
});
