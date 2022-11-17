import { useNavigate } from "react-router-dom";
import '../components/style.css'


const ArtistCard = ({track}) => {
  const navigate = useNavigate();
   return(
    <div className="flex artistcard " >
      <img src={track?.images?.coverart} className="imgartist"/>
      <p>{track?.subtitle}</p>
    </div>
   )
};

export default ArtistCard;
