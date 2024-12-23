import React, { useState } from 'react';



function CommentForm() {
    const [comment, setComment] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted comment:', comment); 
        setComment(''); 
    };
    return(
        <div></div>
    );
}

