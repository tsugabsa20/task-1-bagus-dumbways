
const blogs = []

function addBlogger (e) {
    e.preventDefault()
    // console.log("hello")

    const name = document.getElementById("input-name").value
    const dateStart = document.getElementById("input-date-start").value
    const dateEnd = document.getElementById("input-date-end").value
    const description = document.getElementById("input-description").value
    const image = document.getElementById("input-image").files

    const blog = [
        name,
        dateStart,
        dateEnd,
        description,
        image
    ]

    blogs.push(blog)
    
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
                            <h3>Dumbways Mobile App - 2021</h3>
                            <h5>durasi : 3 bulan</h5>
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
                    </div>
                </div>`   
        } 
        document.getElementById("content").innerHTML = html
    }
    



renderBlog()
