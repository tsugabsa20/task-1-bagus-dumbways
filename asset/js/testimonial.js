class Testimonial {
    
    #name = ""
    #image = ""
    #description = ""

    constructor(name, image, description) {
        this.name = name
        this.image = image
        this.description = description
    }

    set name (val) {
        this.#name = val
    }

    set image (val) {
        this.#image = val
    }

    set description (val) {
        this.#description = val
    }

    get name () {
        return this.#name
    }

    get image () {
        return this.#image
    }

    get description () {
        return this.#description
    }

    html () {
        return `  <div class="testimonial">
        <img src="${this.image}" class="image-testimonial"/>
        <p class="description">${this.description}</p>
        <p class="author">${this.name}</p>
    </div>`
    }

}

const testimonial1= new Testimonial ("John Doe", "https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=", "bagus bang")

const testimonial2= new Testimonial ("Rizal Muk", "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg", "yok bang semangat")
const testimonial3= new Testimonial ("Rizal Muk", "https://onemarketmedia.com/wp-content/uploads/2020/06/testimonial-video.jpg", "yok bang semangat")

const testimonials = [testimonial1, testimonial2, testimonial3]
let testimonilaHTML = ""

for(let index = 0; index < testimonials.length; index++) {
    testimonilaHTML += testimonials[index].html()
}

document.getElementById("testimoni").innerHTML = testimonilaHTML