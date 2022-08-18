$.ajax({
    url:'https://api.nasa.gov/planetary/apod',
    status:'get',
    success:displayImage,
    data:{
        api_key:'DEMO_KEY',
    }
});
    

function displayImage(data){
    // var img=$("document.createElement('img')");
    // img.attr('src',data.url);
    // img.appendTo('#image-container');
    $("image-conatainer").append(`<img src="${data.url}">`);
}
    
