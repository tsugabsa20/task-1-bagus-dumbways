
const blogs = [{
    name: "Dumbways Mobile App - 2021",
    dateStart: new Date(),
    dateEnd: new Date(),
    description: "description",
    image: "image",
    createdAt: new Date(),
    
}]
    
function addBlogger (e) {
    e.preventDefault()
    // console.log("hello")

    const name = document.getElementById("input-name").value
    const dateStart = document.getElementById("input-date-start").value
    const dateEnd = document.getElementById("input-date-end").value
    const description = document.getElementById("input-description").value
    const image = document.getElementById("input-image").files
    const createdAt = new Date()

    const blog = [
        name,
        dateStart,
        dateEnd,
        description,
        image,
        createdAt
        

    ]

    blogs.unshift(blog)
    
    renderBlog()
    console.log("blogs", blog)
}

    

    function renderBlog() {
        let html = ""

        for(let index = 0; index < blogs.length; index++) {
            html += `
            <div class="content-blogger">
                    <div class="post-card-blog">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnDneHEkgdhzUHF5OxnQ8qGcY1dk95y8wkg&usqp=CAU" class="image-blog"/>
                        <div class="text-content">
                            <h3> 
                                <a class="name-blogger" href="bloggerWeb.html" target="_blank"> ${blogs[index].name}</a>
                            </h3>
                            <h5>durasi : 3 bulan </h5>
                            <p>App that used for dumbways student, it was deployed and can downloaded on playstore.
                                Happy download
                        </div>
                        <div class="icon-content">
                            <i class="fa-brands fa-google-play"></i>
                            <i class="fa-brands fa-android"></i>                   
                            <i class="fa-brands fa-java"></i> 
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
    
// function getFullTime() {
//     const dateOne = new Date()
//     const dataTwo = new Date()
//     const time = Math.abs(dateOne-dataTwo)
//     const days = Math.floor(time/1000*60*60*24)
//     const month = Math.floor(days/30)
//     const year = Math.floor(month/12)
//     const hours = Math.floor(time/1000/60/60)
//     const minute = Math.floor(hours/60)
//     const second = Math.floor(minute/60)

//     let distance = []
    
//     if (days < 24) {
//         distance += `${days} days`
//     } else if (month < 12) {
//         distance += `${month} months`
//     } else {
//         distance += `${year} years`
//     }
//     console.log(distance)
//     return distance


    // // console.log(typeof d)
    // const minute = d.getMinutes()
    // let hour = d.getHours()
    // const date = d.getDate()
    // const month = d.getMonth()
    // const year = d.getFullYear()

    // if (hour < 10) {
    //     hour = "0"+ hour
    // }

    // if (minute < 10) {
    //     minute = "0"+ minute
    // }

    // const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    // return `${date} ${months[month]} ${year} ${hour}:${minute} WIB`



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
