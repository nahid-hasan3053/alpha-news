import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({news}) => {

    const {author, image_url, title, details} = news;

    return (
        <div>
            <Card className='mt-3'>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <Image style={{width: '50px'}} src={author.img} roundedCircle />
                                <div className='ms-2'>
                                    <small>{author.name}</small>
                                    <br />
                                    <small>{author.published_date}</small>
                                </div>
                        </div>
                        <div>
                            <Button><FaShare></FaShare> Share</Button> 
                        </div>
                    </div>
                </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Image src={image_url} fluid />;
                        <Card.Text>
                            {
                                details.length > 200? 
                                <p>
                                    {details.slice(0,150)+'....'} <Link to={`/news/${news._id}`}>See more</Link>
                                </p>
                                :
                                <p>
                                    {details}
                                </p>
                            }
                        </Card.Text>
                    </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;