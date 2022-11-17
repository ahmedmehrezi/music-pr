import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard} from '../components'
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import '../pages/pages.css'
const TopCharts = () => {
    const {activeSong, isPlaying} = useSelector((state) => state.player)

    const {data,isFetching, error} = useGetTopChartsQuery();


    if (isFetching) return <Loader title="Loading top charts" />;
    if(error) return <Error/>

    return(
        <div className="flex ">
            <h2 className="font">
                Discover Top Charts
                </h2>
            <div className="flex blok ">
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                        />
                ))}
            </div>
        </div>
    )
}
export default TopCharts;
