import type { NewsCardType } from "../types/news";
import '../styles/newsCard.css';

function NewsCard({imagePath, title, summary, subject}: NewsCardType) {
    return(
        <div className="news-card">
            <img className="card-image" src={imagePath} alt="" />
            <h1 className="card-title">{title}</h1>
            <p className="card-summary">{summary}</p>
            <small className="card-subject">{subject}</small>
        </div>
    );
}
export default NewsCard;