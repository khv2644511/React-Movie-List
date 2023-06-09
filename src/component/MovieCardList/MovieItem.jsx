import React from "react";
import MovieContent from "./MovieContent";
import MovieImg from "./MovieImg";
import { useNavigate } from "react-router-dom";

// 영화 리스트 각 항목 컴포넌트
export default function MovieItem({ movieInfo, index, id }) {
  const navigate = useNavigate();

  return (
    <li
      // 클릭 시 MovieDetail 페이지로 이동
      onClick={() => {
        navigate(`/details/${id}`, { state: { movieInfo } });
      }}
      className="flex flex-col px-5  hover:cursor-pointer
     "
    >
      <MovieImg movieInfo={movieInfo} index={index} />
      <MovieContent movieInfo={movieInfo} />
    </li>
  );
}
