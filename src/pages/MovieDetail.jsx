import React from "react";
import { useLocation } from "react-router-dom";
import Title from "../component/MovieDetail/Title";
import Headers from "../component/common/Headers";
import Info from "../component/MovieDetail/Info";
import TabMenu from "../component/MovieDetail/TabMenu";
import BackButton from "../component/common/BackButton";

export default function MovieDetail() {
  // MovieItem 컴포넌트에서 useNaviget를 통해 영화 정보를 받아옵니다.
  const {
    state: {
      movieInfo: {
        adult,
        genre_ids,
        overview,
        release_date,
        title,
        vote_average,
        original_title,
        poster_path,
        popularity,
      },
    },
  } = useLocation();

  return (
    <>
      <BackButton />
      <Headers>영화 상세 페이지</Headers>
      <div className="flex my-10 min-w-detail">
        <img
          className="w-52"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="영화포스터"
        />
        <div className="flex flex-col gap-8 pl-8">
          <div className="flex flex-col text-left">
            <Title level={1} title={title} />
            <Title level={1} original_title={original_title} />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Info info={release_date}>개봉</Info>
            <Info info={genre_ids}>장르</Info>
            <Info info={adult ? "청불" : "19세 이상관람가능"}>등급</Info>
            <Info info={vote_average}>평점</Info>
            <Info info={popularity}>누적관객</Info>
          </div>
        </div>
      </div>
      <div className="min-w-detail">
        <TabMenu overview={overview} defaultTab={1} />
      </div>
    </>
  );
}
