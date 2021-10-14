export function header() {
    return `
        <div class="header">
            <div class="input">
                <div class="inputBox">
                    <input type="text" name="inputSpace" id="inputSpace" placeholder="Search">
                </div>
                <div class="searchIcon" onclick="fetchData()">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <a href="./receipeOfDay.html">Receipe of the day</a>
            <a href="./latest.html">Latest receipe</a>
        </div>
    `
}

export 


export function displayCard(data){
    var mainContainer = document.querySelector('.foodContainer')
    var container = document.createElement('div')
    console.log(data.meals);
    const {strMeal,strCategory,strInstructions,strArea} = data.meals[0] 
    container.innerHTML = `
        <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="">
        <p>${strMeal}</p>
        <p>${strCategory}</p>
        <p>${strArea}</p>
        <p>${strInstructions}</p>
    `
    mainContainer.append(container)
}

// var exports = {
//     header,fetchData
// }

// export default exports;