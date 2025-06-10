import type { NewsCardType } from "../types/news";

function NewsCard({title, summary, reference}: NewsCardType) {
    return(
        <div className="news-card">
            <h1 className="card-title">{title}</h1>
            <p className="card-summary">{summary}</p>
            <small className="card-reference">Fonte: {reference}</small>
        </div>
    );
}
export default NewsCard;