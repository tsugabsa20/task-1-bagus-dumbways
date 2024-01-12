const bloger = []

function detailBlog (e) {
    e.preventDefault()

    const name = document.getElementById("input-name").value
    let dateStart = document.getElementById("input-date-start").value
    let dateEnd =  document.getElementById("input-date-end").value
    
    dateStart = new Date(dateStart)
    dateEnd = new Date(dateEnd)
    const description = document.getElementById("input-description").value
    let image = document.getElementById("input-image").files

    image = URL.createObjectURL(image[0])
    const nodejs = document.getElementById("nodejs").checked
    const python = document.getElementById("python").checked
    const reactjs = document.getElementById("reactjs").checked
    const javascript = document.getElementById("javascript").checked

    const createdAt = new Date()

    const blogers = {
        name,
        dateStart,
        dateEnd,
        description,
        image,
        nodejs,
        python,
        reactjs,
        javascript,
        createdAt
    }

    renderBlogers()
    console.log("bloger",blogers)

}

function renderBlogers () {
    let newHtml = ""

    newHtml += `<div class="text-blogger">
    <p class="name-blogger">Dumbways Web App</p>
    <div class="data-blogger">
        <img class="image-blogger" src="https://media.istockphoto.com/id/1439425791/id/foto/teknologi-digital-konsep-pengembangan-perangkat-lunak-pemrogram-pengkodean-bekerja-pada-laptop.jpg?s=612x612&w=0&k=20&c=I0gVRKxhGaVBVKozmXuHtQ_YvoqhNuutZLlGxSCn0X8=" alt="it-image"/>
        <div class="information-text">
            <h3 >Duration</h3>
            <div class="time">
                <i class="fa-regular fa-calendar-days"></i>
                <p>12 Jan 2021 - 11 Feb 2021</p>
            </div>
            <div class="time">
                <i class="fa-regular fa-clock"></i>
                <p>1 month</p>
            </div>
            <h3>Technologies</h3>
            <div class="icon">
                <div class="image-and-text">
                    <i class="fa-brands fa-react"></i>
                    <p>ReactJs</p>
                </div>
                <div class="image-and-text">
                    <i class="fa-brands fa-node-js"></i>
                    <p>NodeJs</p>
                </div>
                <div class="image-and-text">
                    <i class="fa-brands fa-js"></i>
                    <p>JavaScript</p>
                </div>
                <div class="image-and-text">
                    <i class="fa-brands fa-ioxhost"></i>
                    <p>Socket IO</p>
                </div>
            </div>
        </div>
    </div>
    <p class="text-lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt assumenda eveniet aperiam eaque, corporis molestiae sunt doloremque quas. Explicabo dolorem atque quo rerum odio esse quia cum ipsa labore rem ad molestias quas ipsam, ut at deserunt quis alias reiciendis ea! Asperiores facere hic ex perspiciatis beatae delectus maiores dolores excepturi voluptatem nam aliquid molestiae deleniti accusamus quidem numquam, vitae explicabo animi quam optio tempore tempora harum officia? Reiciendis illum cum quidem corrupti porro consequuntur expedita harum magni quos, necessitatibus distinctio soluta fugiat laborum qui maxime rem quasi aut, assumenda velit repellat! Culpa beatae esse facilis suscipit, optio doloremque!</p>
</div>`

document.getElementById("content").innerHTML = newHtml
}

renderBlogers()