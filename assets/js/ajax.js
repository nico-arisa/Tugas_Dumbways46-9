const testiData = new Promise((resolve, reject) =>  {
 const xhr = new XMLHttpRequest()

 xhr.open("GET", "https://api.npoint.io/dd763f91c5cce1ad615f", true)
 
 xhr.onload = function(){
    if(xhr.status == 200) {
        resolve(JSON.parse(xhr.response))
    } else{
        reject("Error loading data")
    }
 }

 xhr.onerror = function(){
    reject("Netwrok Error")
 }
 xhr.send()
})


async function getAllTesti(){
    const response = await testiData
    console.log (response)

    let testiHtml = ""
    response.forEach((data) => {
        testiHtml += `
        <div class="card shadow" id="testi">
            <div class="testiContent">
                <div>
                    <img src="${data.image}" alt="" class="testiImg">
                </div>
                <div>
                    <p class="quotes">"${data.quotes}"</p>
                </div>
                <div>
                    <p class="author">- ${data.author}</p>
                </div>
                <div>
                    <p class="rating">${data.rating} </p>
                </div>
            </div>
        </div>
        ` 
    })
    document.getElementById("testi").innerHTML = testiHtml
}


getAllTesti()

async function filterRating(rating) {
    const response = await testiData
    let testiHtml = '';

    const filterData = response.filter(function (data) {
        return data.rating === rating
    })
    console.log(filterData)

    if (filterData.length === 0) {
        testiHtml = `<h1>Data Not Found</h1>`
    } else {
        filterData.forEach((data) => {
            testiHtml += `
<div class="card-testi shadow" id="testi">
    <div class="testiContent">
        <div>
            <img src="${data.image}" alt="" class="testiImg">
        </div>
        <div>
            <p class="quotes">"${data.quotes}"</p>
        </div>
        <div>
            <p class="author">- ${data.author}</p>
        </div>
        <div>
            <p class="author">${data.rating}</p>
        </div>
    </div>
</div>
        `
        })
    }

    document.getElementById("testi").innerHTML = testiHtml
}