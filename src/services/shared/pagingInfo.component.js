import React from 'react';

const PagingInfo = (props) => {
    if (props.paging.count === 0) {
        return null;
    }
    const leftText = ((props.paging.page - 1) * 20) + 1;
    const rightText = Math.min(((props.paging.page) * 20), props.paging.count);

    return <div className="service-selected-option-showing-results-count">
    Showing {leftText} - {rightText} of {props.paging.count} results for {props.type}
  </div>
}

export default PagingInfo;