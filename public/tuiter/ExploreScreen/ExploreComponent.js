import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
        <!-- search field and cog -->
        <div class="row mb-2">
            <div class="d-flex align-items-center">
                <div class="flex-grow-1 input-icon me-4">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" class="form-control" placeholder="Search Tuiter"/>
                </div>
                <a href="../explore-settings.html"><i class="fa-solid fa-gear fa-2x"></i></a>
            </div>
        </div>
        <!-- tabs -->
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="../for-you.html">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../trending.html">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-inline-block">
              <a class="nav-link" href="../entertainment.html">Entertainment</a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="card mb-2">
            <img src="../images/starship.jpeg" class="card-img">
            <div class="card-img-overlay">
                <h3 class="card-title text-light fw-bold">SpaceX's Starship</h3>
            </div>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
