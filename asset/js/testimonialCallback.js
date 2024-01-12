const  testimonial = [
    {
    name: "Rizal Muk",
    image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
    description: "yok bang semangat",
    stars: 5
    },
    {
    name: "Debi",
    image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
    description: "haloo bang",
    stars: 3
    },
    {
    name: "Adnin Diba",
    image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
    description: "bagus bang kontennya",
    stars: 4
    },
    {
    name: "Moch. Danny",
    image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
    description: "pasti bisa bang",
    stars: 5
    },
    {
    name: "Gustan",
    image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
    description: "yok bang semangat",
    stars: 3
    },
    {
    name: "Evi",
    image: "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg",
    description: "yok bang semangat",
    stars: 5
    }
    
]
console.log(testimonial)




function ratingTestimonial (stars) {
    const filterTestimonial = testimonial.filter((value) => value.stars === stars)
    const newTesti = filterTestimonial.map((value) => {
        return `
        <div class=" testimonial">
        <img src="${value.image}" class="image-testimonial"/>
        <p class="description">${value.description}</p>
        <p class="author">${value.name}</p>
        </div>`
    })
    document.getElementById("testimonialhtml").innerHTML = newTesti
}

function allTestimonial () {
    const newTesti = testimonial.map((value) => {
        return `
        <div class=" testimonial">
        <img src="${value.image}" class="image-testimonial"/>
        <p class="description">${value.description}</p>
        <p class="author">${value.name}</p>
        </div>`
    })
    document.getElementById("testimonialhtml").innerHTML = newTesti
}
allTestimonial()



