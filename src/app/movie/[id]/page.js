import Image from "next/image";

async function getMovie(movieId){
    const api_url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`;    
    const res = await fetch(api_url);
     return await res.json();
}
export default async function Moviepage({params}) {
    const movie_id = params.id;     
    const movie = await getMovie(movie_id);
    
  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path||movie.poster_path}`}
            width={500}
            height={300}
            className="rounded-lg"
            style={{
              maxWidth:"100%",
              height: "100%",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="The movie poster"
            />               
            <div className="p-2">
            <h2 className="text-lg mb-3 font-bold text-amber-400">{movie.title||movie.name}</h2>
            <p className="text-lg mb-3">
                <span className="font-semibold mr-1">OverView:</span>{movie.overview}
            </p>
            <p className="mb-3">
                <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-3">
                <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
            </p>
            </div> 
        </div>
    </div>
  )
}
