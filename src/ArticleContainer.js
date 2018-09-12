import React from "react";
import ArticleContent from "./ArticleContent"
import FilterHOC from "./DirtyFilter"
import StateLessArticleContent from "./StateLessComponent"

class ArticleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                width: '600px',
                height: '600px',
                overflow: 'auto',
                textAlign: 'center',
                margin: 'auto auto'
            },
            buttonDisplay: {},
        };
        console.log("ArticleContainer constructor")
    }

    componentWillMount() {
        console.log("ArticleContainer will mount")
    }

    componentDidMount() {
        let element = this.refs.divElement;
        if (!(element.clientHeight < element.scrollHeight)) {
            this.setState({buttonDisplay: {display: 'none'}});
        }

        console.log("ArticleContainer did component");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("ArticleContainer update component")
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("ArticleContainer will update")
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("ArticleContainer did update")
    }

    readMore = () => {
        this.setState({
            style: {
                width: '600px',
                height: '600px',
                textAlign: 'center',
                margin: 'auto auto'
            },
            buttonDisplay: {display: 'none'},
        });
    };

    changeDisplay = (e) => {
        if (e.target.text === 'scroll') {
            this.setState({
                style: {
                    width: '600px',
                    height: '600px',
                    overflow: 'auto',
                    textAlign: 'center',
                    margin: 'auto auto'
                }
            });
        } else {
            this.setState({
                style: {
                    width: '600px',
                    height: '600px',
                    textAlign: 'center',
                    margin: 'auto auto'
                }
            });
        }
    };

    render() {
        console.log("ArticleContainer render")
        const Filter = FilterHOC(ArticleContent);
        return (
            <div style={{textAlign:'center'}}>
                <div style={this.state.style} ref="divElement">
                    <a href="javascript:void(0)" onClick={this.changeDisplay}>scroll</a>
                    <a href="javascript:void(0)" onClick={this.changeDisplay} style={{marginLeft: 10}}>full</a>
                    {this.props.articles.map((article, index) => <Filter key={index} title={article.title} text={article.text}/>)}
                </div>
                <button style={this.state.buttonDisplay} onClick={this.readMore}>阅读更多</button>
            </div>
        );
    }
}

export default ArticleContainer;