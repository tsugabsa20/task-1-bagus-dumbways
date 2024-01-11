
const blogs = []
    
function addBlogger (e) {
    e.preventDefault()
    // console.log("hello")

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

    // let technology = []
    // for (let x = 0; x < technology.length; x++) {
    //     if (technology[x].checked) {
    //         technology.push(technology[x].value)
    //     } 
        
    // }


    const createdAt = new Date()

    const blog = {
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
    
    blogs.unshift(blog)
    
    renderBlog()
    console.log("blogs", blog)
}

    

    function renderBlog() {
        
        let html = ""

        for(let index = 0; index < blogs.length; index++) {
            let technology = ""
            if (blogs[index].nodejs) {
                technology += `<i class="fa-brands fa-node-js"></i>`
            } if (blogs[index].python) {
                technology += `<i class="fa-brands fa-python"></i>`
            } if (blogs[index].reactjs) {
                technology += `<i class="fa-brands fa-react"></i>`
            } if (blogs[index].javascript) {
                technology += `<i class="fa-brands fa-js"></i>`
            }
            html += `
            <div class="content-blogger">
                    <div class="post-card-blog">
                        <img src="${blogs[index].image}" class="image-blog"/>
                        <div class="text-content">
                            <h3> 
                                <a class="name-blogger" href="bloggerWeb.html" target="_blank"> ${blogs[index].name}</a>
                            </h3>
                            <h5>durasi : ${getFullTime(blogs[index].dateStart, blogs[index].dateEnd)}</h5>
                            <p>${blogs[index].description}</p>
                        </div>
                        <div class="icon-content">
                            ${technology}
                        </div>
                        <div class="button-content">
                            <button class="edit-content">Edit</button>
                            <button class="delete-content">Delete</button>
                        </div>
                        <p> ${bloggerPosting(blogs[index].createdAt)}</p>
                    </div>
                </div>`   
        } 
        document.getElementById("content").innerHTML = html
    }
    
function getFullTime(start, end) {
   
    const dateOne = new Date(start)
    const dateTwo = new Date(end)
    const time = Math.abs(dateTwo - dateOne)
    const days = Math.floor(time/(1000*60*60*24))
    const month = Math.floor(time/(1000*60*60*24*30))
    const year = Math.floor(time/(1000*60*60*24*30*12))

    let distance = []
    
    if (days < 24) {
        distance += `${days} days`
    } else if (month < 12) {
        distance += `${month} months`
    } else {
        distance += `${year} years`
    }
    console.log(distance)
    return distance

}
    



function bloggerPosting (timePost) {
    let timeNow = new Date()
    let posting = timeNow-timePost

    const seconds = Math.floor(posting/1000)
    const minutes = Math.floor(posting/1000/60)
    const hours = Math.floor(posting/1000/60/60)
    const day = Math.floor(posting/1000/60/60/24)

    if (seconds < 60) {
        return `${seconds} second a go`
    } else if (minutes < 60) {
        return `${minutes} minutes a go`
    } else if (hours < 24) {
        return `${hours} hours a go`
    } else if (day < 7) {
        return `${day} days a go`
    }

}


renderBlog()

setInterval(() => {
    renderBlog()
}, 1000)
