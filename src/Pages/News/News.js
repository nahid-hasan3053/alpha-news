import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaBackward } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {

    const news = useLoaderData();

    return (
        <div>
            <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src={news.image_url} fluid/>
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                            <Card.Text>
                            {news.details}
                            </Card.Text>
                        <Button variant="primary"> <FaBackward></FaBackward> <Link className='text-white' to={'/'}>Home</Link></Button>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default News;