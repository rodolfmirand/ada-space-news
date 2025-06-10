import type { NewsCardType } from "../types/news";
import NewsCard from "./NewsCard";

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
                    title={news.title}
                    summary={news.title}
                    reference={news.reference}
                />
              ))
            }
        </div>
    );
};
export default NewsCardsArray;