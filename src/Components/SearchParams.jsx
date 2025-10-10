import { useSearchParams } from "react-router-dom";
function SearchParams() {
  const [SearchParams, setSearchParams] = useSearchParams();
  const handle = () => {
    console.log(SearchParams.get("q"));
    alert(SearchParams.get("q"));
  };
  return (
    <div>
      <form>
        <label> Search here</label>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchParams({ q: e.target.value })}
        />
        <input type="button" onClick={handle} value={"click"}></input>
        <input type="reset" onClick={() => setSearchParams({})} />
      </form>
    </div>
  );
}

export default SearchParams;
