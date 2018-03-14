import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class MovieDetails extends React.Component<any, any> {
    movieId: string;

    constructor(props: any) {
        super(props);

        this.movieId = props.movieId;
        this.state = { loading: true };

        fetch('api/Data/?moviedetails=' + this.movieId)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    title: data.MovieDetails.title,
                    summary: data.MovieDetails.summary,
                    posterUrl: data.MovieDetails.posterUrl
                });
            });
    }

    public render() {
        if (this.state.loading) {
            return <div><i>Loading...</i></div>;
        }

        return <div>
            <h2>{this.state.title}</h2>

            <em>{this.state.summary}</em><br/>
            <img src={this.state.posterUrl} />
        </div>;
    }
}