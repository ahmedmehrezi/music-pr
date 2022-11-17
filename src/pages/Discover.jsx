import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import '../components/style.css'
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import '../pages/pages.css'
const Discover = () =>{
  const dispatch = useDispatch();
  const {activeSong, isPlaying, genreListId} = useSelector((state) => state.player );
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');



    if (isFetching) return <Loader title="Loading songs..." />;
    if (error) return <Error />;

    const genreTitle = genres.find(({value}) => value === genreListId )?.title;
    return(
     <div cLassName= "flex ">
       <div className= " flex justify ">  
         <h2 className= "txt">Discover {genreTitle}</h2>

        <select onChange={(e) => dispatch(selectGenreListId(e.target.value))}  value={genreListId || 'pop'} className="vv black ">
        {genres.map((genre) => <option key={genre.value} value={genre. value}>{genre. title}</option>)}
        </select>

        </div>
        <div className= "flex wrap ">
        {data?.map((song, i) => (
        <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />))}
        </div>

    </div>
   );
 };
export default Discover;
