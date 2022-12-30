import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummaryCard from '../../Shared/NewsSummaryCards/NewSummaryCard';

const Home = () => {
    const AllNews = useLoaderData()
    return (
        <div>
            <h3>Dragon New Home: {AllNews.length}</h3>
            {
                AllNews.map(news => <NewSummaryCard
                    key={news._id}
                    news={news}
                ></NewSummaryCard>)
            }
        </div>
    );
};

export default Home;