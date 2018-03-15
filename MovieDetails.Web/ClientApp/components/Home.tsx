import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { MovieDetails }from '../../moviedetails';

export default class Home extends React.Component<RouteComponentProps<{}>, any> {
    constructor() {
        super();

        this.state = {
            movieDetails: {
                loading: true
            }
        };

        fetch('api/Data/?moviedetails=Black Panther')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movieDetails: {
                        loading: false,
                        title: data.MovieDetails.title,
                        summary: data.MovieDetails.summary,
                        posterUrl: data.MovieDetails.posterUrl
                    }
                });
            });
    }

    public render() {
        return <div>
            <MovieDetails movieDetails={this.state.movieDetails} />
        </div>;
    }
}
