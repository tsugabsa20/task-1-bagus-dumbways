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

    set name (val) {
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
    


}