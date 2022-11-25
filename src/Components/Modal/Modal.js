import React from "react";
import ReactPlayer from "react-player";
import { imageUrl } from "../../constants/constants";


import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
  } from "@material-ui/icons";

const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    zIndex: 1000,
  };
  
  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .9)",
    zIndex: 1000,
  };

  const color={color:"green"}

export default function Modal({ open, onClose, ytubeid, movieDetail }) {
    if (!open) return null;
  
    return (
      <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <button onClick={onClose} className="button">
            X
          </button>
            {ytubeid?<ReactPlayer url={`https://www.youtube.com/watch?v=${ytubeid}`} playing={true}/>:<img className="thumbnail" src={`${imageUrl + movieDetail.backdrop_path}`} alt=""></img>}
       
          <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
          <h1 style={color}>{`${movieDetail.vote_average}/10 RATING`}</h1>
          <h2>{movieDetail.original_title}</h2>
          <br></br><span>{`Released On : ${movieDetail.release_date}`}</span><br></br>
          <p>{`Description : ${movieDetail.overview}`}</p>
        </div>
      </>
    );
  }