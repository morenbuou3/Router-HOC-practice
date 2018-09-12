import React from "react";

const FilterHOC = (ArticleContent) => {
    return class Filter extends React.Component {
        render() {
            const { text, ...rest } = this.props;
            return <ArticleContent {...rest} text={text.replace('fuck', '****')} />
        }
    }
};

export default FilterHOC;