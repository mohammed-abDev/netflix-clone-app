import React from 'react'
import ReasonsToJoin from '../ReasonsToJoin/ReasonsToJoin'
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ThreePIcon from "@mui/icons-material/ThreeP";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";


function ReasonsToJoinList() {
  return (
    <div className="reason-card-outer">
      <h2>More Reasons to Join</h2>
      <div className="reasons-list">
        <ReasonsToJoin
          title="Enjoy on your TV"
          description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          icon={<OndemandVideoIcon />}
        />
        <ReasonsToJoin
          title="Download your shows to watch offline"
          description="Save your favorites easily and always have something to watch."
          icon={<ArrowDownwardIcon className="Downlod-icon" />}
        />
        <ReasonsToJoin
          title="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          icon={<AutoFixHighIcon />}
        />
        <ReasonsToJoin
          title="Create profiles for kids"
          description="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
          icon={<ThreePIcon />}
        />
      </div>
    </div>
  );
}


export default ReasonsToJoinList
