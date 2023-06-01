import Results from "@/components/Results";

export default async function page({params}) {
    const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-us&include_adult=false`;
    const res = await fetch(api_url);    
    if(!res.ok){
        throw new Error(res.status);
    }    
    const data = await res.json();
    const results = data.results;
  return (
    <div>
      {results && results.length ===0 &&(
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Results results={results}/> }
    </div>
  )
}
