const box_wrapper = document.querySelector(".box-wrapper");

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a2b1a4120mshbd11a722231a885p15ebf7jsnf6e148aa86af',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

const fetchingData = async() => { 
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        data.map((user)=> {
            const html = `
            <div class="box">
            <img src=${user.thumbnail} alt="">
            <div class="icons">
                <i class="fa-brands fa-playstation" style="color: #ffffff;"></i>
                <i class="fa-brands fa-windows" style="color: #ffffff;"></i>
                <i class="fa-brands fa-xbox" style="color: #ffffff;"></i>
            </div>
            <h1 class="heading">${user.title}</h1>
            <h3>Release Date : ${user.release_date}</h3>
            <h3>Catagory : ${user.genre}</h3>
            <h3>Developer : ${user.developer.slice(0,15)}...</h3>
            <p>${user.short_description.slice(0,40)}...</p>
            <a href=${user.freetogame_profile_url} target="_blank"><button>Play</button></>
            </div>
            `
            box_wrapper.insertAdjacentHTML("afterbegin", html)
        })
    } catch (error) {
        console.log(error);
    }
}
fetchingData()

const search = () => {
    const input = document.getElementById("input").value.toUpperCase()
    const box = document.querySelectorAll(".box")
    const heading = document.querySelectorAll(".heading")
    for(var i=0; i < heading.length; i++){
        let match = box[i].getElementsByTagName("h1")[0]
        if(match){
            let textvalue = match.innerHTML || match.textContent;
            if(textvalue.toUpperCase().indexOf(input) > -1){
                box[i].style.display = "";
            }else{
                box[i].style.display = "none";
            }
        }
    }
}
