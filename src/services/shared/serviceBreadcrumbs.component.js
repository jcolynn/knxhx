import React from 'react';
import { Breadcrumb } from 'antd';

const ServiceBreadcrumbs = (props) => (
    <Breadcrumb className="service-selected-breadcrumbs">
            <Breadcrumb.Item><a onClick={() => props.history.push('/services')}>Services</a></Breadcrumb.Item>
            <Breadcrumb.Item>{props.current}</Breadcrumb.Item>
        </Breadcrumb>
)

export default ServiceBreadcrumbs;