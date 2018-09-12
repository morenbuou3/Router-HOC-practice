import React from "react";

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.children[0] ? this.props.children[0].props.title : '',
        };
    }

    changeTab = (e) => {
        this.setState({content: e.currentTarget.text});
    }

    render() {
        let tabList = this.props.children.map(child =>
            <div>
                <a href="#" onClick={this.changeTab}>
                    {child.props.title}
                </a>
            </div>
        );
        return (
            <div style={{textAlign:'center'}}>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    {tabList}
                </div>
                <div>
                    {this.props.children.find(child => child.props.title === this.state.content)}
                </div>
            </div>
        );
    }
}

export default Tabs;