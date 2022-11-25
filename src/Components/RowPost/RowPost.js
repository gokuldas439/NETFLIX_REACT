import React, { useEffect, useState } from "react";
import "./RowPost.css";
// import "./listItem.scss";
import axios from "../../constants/axios";

import { API_KEY, imageUrl } from "../../constants/constants";
import Modal from "../Modal/Modal";




function RowPost(props) {
    const [isHovered, setIsHovered] = useState(false);
  const [movies, setMovies] = useState([]);
  const [posterid,setPosterId]=useState('')
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios.get(props ? props.url : "").then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  const handleMovie = (obj) => {
    // setUrlId(id)
    setIsHovered(true)
    axios.get(`/movie/${obj.id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response)
        if (response.data.results.length>0){
            console.log(response.data.results[0])
            setUrlId(response.data.results[0].key)
            }else{
                console.log("array empty")
            }
    })
       setPosterId(obj)
  };







  return (
    <>
    
    <div className="row" >
      <h2>{props.name}</h2>
      <div className="posters">
        {movies.map((obj) => (
             obj.backdrop_path&&
             <div>
          <img
          onClick={() => handleMovie(obj)}
        //   onMouseLeave={() => setIsHovered(false)}
            className={`poster ${props.small}`}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
          
           
          </div>
        
        ))}
       
      </div>
      <Modal open={isHovered} onClose={() => setIsHovered(false)} ytubeid={urlId} movieDetail={posterid} />
           {/* {isHovered && (
          <>
           {urlId?
           <ReactPlayer url={`https://www.youtube.com/watch?v=${urlId}`} playing={true}/>
           :
           <img className="thumbnail" src={`${imageUrl + posterid.backdrop_path}`} ></img>
           }
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>Movie : {posterid.original_title}</span><br />
                <span>Released On : {posterid.release_date}</span>
              </div>
              <div className="desc">Description : {posterid.overview}</div>
            </div>
          </>
        )} */}
      
    </div>
   
    {/* <div
        className="listItem"
        // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movies?.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movies.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movies.duration}</span>
                <span className="limit">+{movies.limit}</span>
                <span>{movies.year}</span>
              </div>
              <div className="desc">{movies.desc}</div>
              <div className="genre">{movies.genre}</div>
            </div>
          </>
        )}
      </div> */}
  </>
  );
}

export default RowPost;
