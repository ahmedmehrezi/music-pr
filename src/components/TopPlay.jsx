import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import '../components/style.css'
import 'swiper/css';
import 'swiper/css/free-mode'

const TopChartCard = ({song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
<div className=" flex bb ">
<h3 className="k" >{i + 1}</h3>
<div className="flex js ">
  <img width={"300px"} className="g" src={song?.images?.coverart} />
  <div className="flex mx">
    <Link to={`/songs/${song.key}`}>
      <p className="white">{song?.title}</p>
    </Link>
    <Link to={`/artists/${song.artists}`}>
      <p className="white">{song?.subtitle}</p>
    </Link>
  </div>
</div>
<PlayPause
  isPlaying={isPlaying}
  activeSong={activeSong}
  song={song} 
  handlePause={handlePauseClick}
  handlePlay={handlePlayClick}
/>  
</div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying} = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({behavior: 'smooth'});
  });

  const TopPlay = data?.slice(0, 5);

  const handlePauseClick = () =>{
    dispatch(playPause(false))
  };
  const handlePlayClick = (song, i) =>{
      dispatch(setActiveSong({song, data, i}));
      dispatch(playPause(true))
  };

  return(
    <div ref={divRef} className="flex col">
      <div className="flex">
        <div className="flex js ">
          <h2 className="white">Top Charts</h2>
          <Link to="/top-charts">
          <p className="pointer">See more</p>
          </Link>
        </div>
        <div className=" flex">
          {TopPlay?.map((song, i) => (
            <TopChartCard 
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className="full  f">
          <div className="flex js">
            <h2 className="white">Top Artists</h2>
            <Link to="/top-artists">
            <p className="pointer">See more</p>
            </Link>
          </div>
          <Swiper 
          slidesPerView="auto"
          spacesBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
          >
            {TopPlay?.map((song, i) => (
              <SwiperSlide
              key={song?.key}
              style={{width: '25%', height: 'auto',}}>
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                <img src={song?.images.background} className="imm"/>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


  );
};

export default TopPlay;
