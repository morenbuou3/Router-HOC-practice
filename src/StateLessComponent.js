import React from "react";

const StateLessArticleContent = (props) => {
        const style = {
            fontSize: 32,
            color: '#8ca5e3',
            border: '1px solid black',
            textAlign: 'center',
            height: '300px'
        };
        return (
            <div style={style} key={props.index}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        );
}

export default StateLessArticleContent;
