import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Not Found Page Component
 */
export default function NotFound() {
    return (
        <div>
            <h1>404 - Page not found</h1>
            <Link to='/'>return to shop</Link>
        </div>
    )
}
