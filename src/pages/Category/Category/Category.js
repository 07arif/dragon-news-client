import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummaryCard from '../../Shared/NewsSummaryCards/NewSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h2>This is Category has news:{categoryNews.length}</h2>
            {
                categoryNews.map(news =>
                    <NewSummaryCard
                        key={news._id}
                        news={news}
                    />
                )
            }
        </div>
    );
};

export default Category;