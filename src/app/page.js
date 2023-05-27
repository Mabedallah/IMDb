import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  let genre = searchParams.genere || "fetchTopRated"; 
  
  const api_url = `https://api.themoviedb.org/3/${
    genre==="fetchTopRated" ? "movie/top_rated" :
    "trending/all/week"}?api_key=${API_KEY}&language=en-us&page=1`;
  
  const res = await fetch(api_url,{ next: { revalidate: 10000 } });
if(!res.ok){
  throw new Error("Failed to fetch data");
}
  const data =await res.json();
  const results =data.results;  
  return (
      <div>
        <Results results={results}/>
      </div>

  )
}
