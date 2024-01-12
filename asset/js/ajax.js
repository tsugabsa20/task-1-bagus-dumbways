function getAPI () {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.npoint.io/678ce7655faf744f2af7', true)
        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.response)
                resolve(response)
            } else {
                reject("Error Loading Data")
            }
        }
        xhr.oneerror = () => {
            reject("Network Error")
        }

        xhr.send()
    })
}

async function allTestimonial () {
    const testimonial =  await getAPI()
    
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

async function ratingTestimonial (stars) {
    const testimonial = await getAPI()
    console.log(testimonial)
    
    const filterTestimonial =  testimonial.filter((value) => value.stars === stars)
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
allTestimonial()