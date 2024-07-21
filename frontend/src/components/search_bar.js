const SearchBar = () => (
    <div class='home'>
        <form action="/" method="get">
            <label htmlFor="search_bar">
                <span className="search_text">Find the perfect <i>freelance</i> <br /> services for your business <br /></span>
            </label>
            <input
                type="text"
                id="search_bar"
                placeholder="Try Video Editing"
                name="s"
            />
            <svg class="svg-search" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
            <button type="submit" id="search_button">Search</button>
        </form>
    </div>
);

export default SearchBar;