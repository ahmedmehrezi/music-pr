import { ArtistCard, Loader, SongCard} from '../components'
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import '../pages/pages.css'
const TopArtists = () => {
    const {data,isFetching, error} = useGetTopChartsQuery();


    if (isFetching) return <Loader title="Loading top charts" />;
    if(error) return <Error/>

    return(
        <div className="flex ">
            <h2 className="font">
                Top Artists
                </h2>
            <div className="flex blok ">
                {data?.map((track ) => (
                    <ArtistCard
                        key={track.key}
                        track={track }
                        />
                ))}
            </div>
        </div>
    )
}
export default TopArtists;
