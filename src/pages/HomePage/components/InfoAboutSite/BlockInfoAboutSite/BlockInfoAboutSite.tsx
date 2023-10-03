import './BlockInfoAboutSite.scss';
import React from 'react';

interface BlockInfoAboutSiteProps {
  poster: string;
  text: string;
}

const BlockInfoAboutSite = (props: BlockInfoAboutSiteProps) => {
  return (
    <div className="block-info-about-site">
      <img src={props.poster} alt="" />
      <span>{props.text}</span>
    </div>
  );
};

export default BlockInfoAboutSite;
