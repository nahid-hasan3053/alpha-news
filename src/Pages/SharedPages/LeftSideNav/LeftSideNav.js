import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categorise, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            {
                categorise.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;