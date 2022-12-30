import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, IconName } from "react-icons/fa";

const NewSummaryCard = ({ news }) => {
    console.log(news)
    const { _id, title, details, image_url, author, rating, total_view } = news
    return (
        <Card className="mb-3">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex '>
                    <div >
                        <Image
                            className='me-3'
                            roundedCircle
                            variant="top"
                            src={author?.img}
                            style={{ height: '60px' }}
                        ></Image>
                    </div>
                    <div className='p-2'>
                        <p className='m-0' >{author?.name}</p>
                        <p className='m-0' >{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />

                </div>
            </Card.Header>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details?.length > 200 ?
                            <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-between ">
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning me-2' />
                    <p>{rating?.number}</p>
                </div>
                <div className='d-flex me-1 '>
                    <FaEye className='me-2'/>
                    <p>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewSummaryCard;