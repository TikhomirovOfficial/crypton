import React from 'react';

interface ListProps<T> {
    items: T[];
    className:string;
    render: (item: T) => React.ReactNode
}

function List<T>(props: ListProps<T>) {
    return (
        <div className={props.className}>
            {props.items.map(props.render)}
        </div>
    )
}

export default List;