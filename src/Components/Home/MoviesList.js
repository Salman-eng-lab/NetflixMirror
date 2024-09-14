import React from "react";
import MovieCard from "./MovieCard";
import { onGetMovieTrailer } from "../../NetworkLayer/apiServices";
import { useDispatch } from "react-redux";

const MoviesList = ({ data, title }) => {
    const dispatch = useDispatch();
  return (
    <div className="pl-12">
    <h1 className="font-bold text-white text-2xl my-6">{title}</h1>
    <div className="flex overflow-x-scroll">
      {data?.map((item) => (
        <div onClick={()=>{
            onGetMovieTrailer(dispatch,item.id)
        }} className='w-48 cursor-pointer mr-6 transform transition-transform duration-300 hover:scale-110' key={item.id}>
        <MovieCard item={item} />
      </div>
      ))}
    </div>
  </div>
    
  );
};

export default MoviesList;
