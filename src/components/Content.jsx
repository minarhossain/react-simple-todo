import React, { useState } from 'react';

const Content = () => {
    const [text, setText] = useState('');

    const [clearText, setClearText] = useState('');



    const handleClick = () => {
        setText(document.getElementById('textArea').value);
        setClearText(document.getElementById('textArea').value = clearText);
    };

    return (
        <div className="container mx-auto">

            <div className="mx-auto">
                <textarea className="mt-5" id="textArea" rows="4" cols="50" placeholder='Write your text here and click the button' />
                <br />
                <button className="mt-2 mb-2 btn btn-success" onClick={handleClick}>Show Text</button>

                <p className='mt-3'>{text}</p>
            </div>
        </div>
    );
};

export default Content;