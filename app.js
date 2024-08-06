const images = [ 
    { 
    previewUrl: "./images/github.png",
    thumbnailUrl: "./images/github.png"
    },
    { 
    previewUrl: "./images/google.png",
    thumbnailUrl: "./images/google.png"
    },
    { 
    previewUrl: "./images/linkedin.png",
    thumbnailUrl: "./images/linkedin.png"
    },
    { 
    previewUrl: "./images/pinterest.png",
    thumbnailUrl: "./images/pinterest.png"
    },
    { 
    previewUrl: "./images/twitter.png",
    thumbnailUrl: "./images/twitter.png"
    }
];

console.log(images);

const preview = document.querySelector("#preview");
const thumbs = document.querySelector("#thumbs");

// create thumbnails
function createImages() {
    // create ul element
    const ul = document.createElement("ul");

    for (let i = 0; i < images.length; i++ ) {
        // create image element
        const img = document.createElement("img");
        const li = document.createElement("li"); 

        img.src = images[i].thumbnailUrl; 
    
        img.classList.add('thumbnailUrl');
        li.appendChild(img);
        ul.appendChild(li);
        thumbs.appendChild(ul); 

        img.addEventListener('click', previewImages); 
    }
}

console.log(createImages());

// preview image
function previewImages(event) {
    console.log(event.target.getAttribute("src")); 
    console.log(images[0].thumbnailUrl);

    const img = document.createElement("img");

    for (let i = 0; i < images.length; i++ ) {

        if(event.target.getAttribute("src") === images[i].thumbnailUrl) {
            img.setAttribute("width", "350");
            img.setAttribute("height", "350");

            img.src = images[i].previewUrl; 
            preview.innerHTML = "";
            preview.appendChild(img);
        }
    }
}



