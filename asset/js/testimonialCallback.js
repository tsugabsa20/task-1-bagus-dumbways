const  testimonial = [
    {
    name: "Rizal Muk",
    image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
    description: "yok bang semangat"
    },
    {
    name: "Rizal Muk",
    image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
    description: "yok bang semangat"
    },
    {
    name: "Rizal Muk",
    image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
    description: "yok bang semangat"
    },
    {
        name: "Rizal Muk",
        image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
        description: "yok bang semangat"
    },
    {
        name: "Rizal Muk",
        image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
        description: "yok bang semangat"
    },
    {
        name: "Rizal Muk",
        image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
        description: "yok bang semangat"
    }
    
]
console.log(testimonial)


const newTesti = testimonial.map((value) => {
    return `
    <div class="testimonial">
    <img src="${value.image}" class="image-testimonial"/>
    <p class="description">${value.description}</p>
    <p class="author">${value.name}</p>
    </div>`
})




document.getElementById("testimonialhtml").innerHTML = newTesti