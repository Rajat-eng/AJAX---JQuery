var breedImage = $("#breed-image");
var dropdown = $("#dog-breeds");
var breed;


$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    
    for (let breed in dogBreeds) {
        dropdown.append(`<option value="${breed}">${breed}</option>`);
    }
});


$("form button").click(function (e) {
    e.preventDefault();
    breed = dropdown.val();
    displayDog(breed);

});

$("#next a").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});

function displayDog(breed) {
    let url = `https://dog.ceo/api/breed/${breed}/images/random`;

    $("#breed-image img").remove();

    $.get(url, (data, status) => {
            let imageUrl = data.message;
            breedImage.append(`<img src="${imageUrl}" alt="${breed}">`);
        });

}
