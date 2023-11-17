import React from 'react';
import ListItem from './ListItem';

const Body = ({ items }) => {
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <ListItem key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    )
}

export default Body;