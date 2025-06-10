import type { NewsCardType } from "../types/news";
import NewsCard from "./NewsCard";
import '../styles/newsCardsArray.css'

interface NewsCardsArrayProps {
    news: NewsCardType[];
}

function NewsCardsArray ({news}: NewsCardsArrayProps) {
    return (
        <div className="news-container">
            {
                news.map((news) => (
                    <NewsCard 
                        key={news.id}
                        id={news.id}
                        imagePath={news.imagePath}
                        title={news.title}
                        summary={news.summary}
                        subject={news.subject}
                    />
                ))
            }
        </div>
    );
};
export default NewsCardsArray;