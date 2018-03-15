import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class MovieDetails extends React.Component<any, any> {
    public render() {
        if (this.props.movieDetails.loading) {
            return <div><i>Loading...</i></div>;
        }

        return <div className="movie-details">
            <h2 className="title">{this.props.movieDetails.title}</h2>

            <div className="synopsis">{this.props.movieDetails.summary}</div>

            <img src={this.props.movieDetails.posterUrl} className="poster" />
        </div>;
    }
}