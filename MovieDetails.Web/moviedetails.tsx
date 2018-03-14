import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class MovieDetails extends React.Component<any, any> {
    public render() {
        if (this.props.movieDetails.loading) {
            return <div><i>Loading...</i></div>;
        }

        return <div>
            <h2>{this.props.movieDetails.title}</h2>

            <em>{this.props.movieDetails.summary}</em><br/>
            <img src={this.props.movieDetails.posterUrl} />
        </div>;
    }
}