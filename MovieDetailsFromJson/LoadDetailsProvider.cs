using ITOps.Composition;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Threading.Tasks;

namespace MovieDetailsFromJson
{
    public class LoadDetailsProvider : IProvideData
    {
        public bool Matches(RouteData routeData, HttpRequest request)
        {
            var controller = ((string)routeData.Values["controller"]).ToLowerInvariant();
            var action = ((string)routeData.Values["action"]).ToLowerInvariant();

            return controller == "data" && request.Query.ContainsKey("moviedetails");
        }

        public async Task<MovieDetails> LoadMovieFromJson(string movieId)
        {
            return JsonConvert.DeserializeObject<MovieDetails>(await File.ReadAllTextAsync(movieId + ".json"));
        }

        public async Task PopulateData(dynamic viewModel, RouteData routeData, HttpRequest request)
        {
            viewModel.MovieDetails = await LoadMovieFromJson(request.Query["moviedetails"]);
        }
    }

    public class MovieDetails
    {
        public string Title { get; set; }
        public string Summary { get; set; }
        public string PosterUrl { get; set; }
    }
}