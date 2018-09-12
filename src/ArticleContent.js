import React from "react";

class ArticleContent extends React.PureComponent {
    constructor(props) {
        super(props)
        console.log("ArticleContent constructor")
    }

    componentWillMount() {
        console.log("ArticleContent will mount")
    }

    componentDidMount() {
        console.log("ArticleContent did component")
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("ArticleContent will update")
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("ArticleContent did update")
    }

    render() {
        const style = {
            fontSize: 32,
            color: '#8ca5e3',
            border: '1px solid black',
            textAlign: 'center',
        };
        console.log("ArticleContent render")
        return (
            <div style={style} key={this.props.index}>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default ArticleContent;
