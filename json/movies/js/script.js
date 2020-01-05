function searchMovie() {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '5d49748b',
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;
                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <img src="${data.Poster}" class="card-img-top" alt="${data.Title}">
                            <div class="card-body">
                            <h5 class="card-title">${data.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                            <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `)
                });
                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                <div class="col">
                <h1 class="text-center"> ${result.Error}</h1>
                </div>`);
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.keyCode == 13) {
        searchMovie();
    }
});

// event bubbling problem
// use event binding
$('#movie-list').on('click', '.see-detail', function () {
    // console.log($(this).data('id'));
    $.ajax({
        url: 'http://omdbapi.com',
        dataType: 'json',
        type: 'get',
        data: {
            'apikey': '5d49748b',
            'i': $(this).data('id')
        },
        success: function (movie) {
            if (movie.Response === "True") {
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${movie.Poster}" class="img-fluid" alt="${movie.Title}">
                            </div>
                            <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>${movie.Title}</h3></li>
                                <li class="list-group-item">Released : ${movie.Released}</li>
                                <li class="list-group-item">Genre : ${movie.Genre}</li>
                                <li class="list-group-item">Director : ${movie.Director}</li>
                                <li class="list-group-item">Actors : ${movie.Actors}</li>
                                <li class="list-group-item">Writer : ${movie.Writer}</li>
                                <li class="list-group-item">Language : ${movie.Language}</li>
                                <li class="list-group-item">Country : ${movie.Country}</li>
                                <li class="list-group-item">Awards : ${movie.Awards}</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
        }
    });
});