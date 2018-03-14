import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { MovieDetails }from '../../moviedetails';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <MovieDetails />
        </div>;
    }
}
