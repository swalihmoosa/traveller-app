$(document).ready(function(){
    $.ajax({
        type : "get",
        url : "https://traveller.talrop.works/api/v1/places",
        success : function(response){
            //console.log(response.data);
            let html_data = ""
            response.data.forEach(place => {
                html_data += `<div class="item">
                <a href="#">
                    <div class="top">
                        <img src="${place.image}" alt="Image" />
                    </div>
                    <div class="middle"><h3>${place.name}</h3></div>
                    <div class="bottom">
                        <img src="images/place.svg" alt="Image" />
                        <span>${place.location}</span>
                    </div>
                </a>
            </div>`
            });
            $(".items").html(html_data)
        },
        error : function(error){

        }
    });
    $.ajax({
        type : "get",
        url : "https://traveller.talrop.works/api/v1/places/categories",
        success : function(response){
            console.log(response.data);
            let html_place = ""
            response.data.forEach(top =>{
                html_place += `<li>
                <a href="#">
                    <img
                        class="rest"
                        src="${top.image}"
                        alt="Image"
                    />
                    <span>${top.name}</span>
                </a>
            </li>`
            });
            $("ul").html(html_place)
        },
        error : function(error){

        }
    })
});