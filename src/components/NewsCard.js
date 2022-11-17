import React from 'react';

function NewsCard(props) {
    return (
        <div className='container newscard'>
            <div className='row'>
                <div className='columnleft'>
                    <label>{props.title}</label>
                </div>
                <div className='columnright'>
                    <button className='admineditbtn'>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;