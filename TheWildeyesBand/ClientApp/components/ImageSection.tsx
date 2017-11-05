import * as React from 'react';
import * as image from '../images/wildeyes_title.jpg';
export class ImageSection extends React.Component<{}, {}> {
    public render() {
        return <div className="section-header">
            <img width="100px" height="100px" src="{require(url('{image}')}"/>
               </div>;
    }
}