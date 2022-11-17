import  {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazanCoreApi = createApi({
    reducerPath:'shazanCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) =>{
            headers.set('X-RapidAPI-Key','0a49227eccmshe441242e3ce8c49p11ba6bjsn8701003b110a')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
        getSongByCountry: builder.query({query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
        getSongsByGenre: builder.query({query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongsBySearch: builder.query({query: (searchTerm) => `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
});  
export const {
    useGetSongsByGenreQuery,
    useGetTopChartsQuery,
    useGetSongByCountryQuery,
    useGetSongsBySearchQuery,
} = shazanCoreApi;