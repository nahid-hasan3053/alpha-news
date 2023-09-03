import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>This all our TERMS@CONDITIONS</h3>
            <small>Go back to <Link to='/register'>Register</Link></small>
        </div>
    );
};

export default TermsAndCondition;