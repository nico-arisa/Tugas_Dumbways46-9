const testiData = [
    {
        image:  "./assets/image/testi1.jpg",
        quotes: "puyeng mas",
        author: "persson 1",
        rating: 5
    },
    {
        image:  "./assets/image/testi2.jpg",
        quotes: "mumet mas",
        author: "persson 2",
        rating: 5
    },
    {
        image:  "./assets/image/testi3.jpg",
        quotes: "paleng mas",
        author: "persson 3",
        rating: 4
    },
    {
        image:  "./assets/image/testi1.jpg",
        quotes: "palenggg mas",
        author: "persson 4",
        rating: 3
    },
    {
        image:  "./assets/image/testi3.jpg",
        quotes: "paleng mas",
        author: "persson 5",
        rating: 2
    }
]

function renderData() {
    let testiHtml = ''

    testiData.forEach((data) => {
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
renderData()

function filterRating(rating) {
    let testiHtml = ''

    const filterData = testiData.filter(function (data) {
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