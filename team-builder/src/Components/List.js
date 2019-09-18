import React from 'react';

export default function List (props) {
    const {personList} = props;
    return (
        <div>This is the list:
            {
                personList.map( person => (
                    <div>{`${person.name}, ${person.email}, ${person.position} with id of ${person.id}`}</div>
                ))
            }
        </div>
    )
}