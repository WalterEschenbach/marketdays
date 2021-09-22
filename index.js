(async () => {
    try {
        const arr = await (await fetch("https://api.polygon.io/v1/marketstatus/upcoming?apikey=zxrKIdcxSdOI0ALehIMkYNkqVVubghId")).json()
        console.log('c%Market Holidays:', "color: blue", arr)
        document.querySelector('.marketHolidayList').innerHTML = createHtml(arr);
    } catch (error) {
        console.log(error)
    }

})()

const createHtml = (array) => {
    let html = ''
    array.forEach(element => {
        let htmlSegment = `
        <div class="row ">
            <div class="col ">
            <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">${element.exchange}</a>
            </div>
          </div>
            </div>
        </div>
        `
        html += htmlSegment;
    })
    return html;
}