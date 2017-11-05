import * as React from 'react';
import { ImageSection } from "./ImageSection";


export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div>Test text</div>
                    <ImageSection />
                </div>
            </div>
        </div>;
    }
}
