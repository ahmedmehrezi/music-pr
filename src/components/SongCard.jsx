import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import '../components/style.css'

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {  
    const dispatch = useDispatch();
    const handlePauseClick = () =>{
        dispatch(playPause(false))
    };
    const handlePlayClick = () =>{
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true))
    };

    return(
    <div className="flex ggg pp " >
        <div className=" m">
        <img className='im' src={song.images?.coverart}/>
            <div className={`absolute ${activeSong?.title === song.title ? 'flex ':'hidden'} `}>
                <PlayPause 
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={song} 
                handlePause={handlePauseClick}
                handlePlay={handlePlayClick}
                
                />
            </div>
            
        </div>
        <div className='mt flex'>
            <div>
                <p to={`/songs/${song?.key}`} >
                {song.title}
                </p>
            </div>
            
            <div className=' jj'>
                <p to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'} >
                {song.subtitle}
                </p>
            </div>
        </div> 
    </div>
    )
};

export default SongCard;