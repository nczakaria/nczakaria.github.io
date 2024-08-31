const images = [ 
    { 
    previewUrl: "./gallery/blueHeron3.jpg",
    thumbnailUrl: "./gallery/blueHeron3.jpg"
    },
    { 
    previewUrl: "./gallery/swan.jpg",
    thumbnailUrl: "./gallery/swan.jpg"
    },
    { 
    previewUrl: "./gallery/redneckGrebe.jpg",
    thumbnailUrl: "./gallery/redneckGrebe.jpg"
    },
    { 
    previewUrl: "./gallery/easternKingbird.jpg",
    thumbnailUrl: "./gallery/easternKingbird.jpg"
    },
    { 
    previewUrl: "./gallery/mockingBird.jpg",
    thumbnailUrl: "./gallery/mockingBird.jpg"
    },
    { 
    previewUrl: "./gallery/houseFinch.jpg",
    thumbnailUrl: "./gallery/houseFinch.jpg"
    },
    { 
    previewUrl: "./gallery/flicker.jpg",
    thumbnailUrl: "./gallery/flicker.jpg"
    },
    { 
    previewUrl: "./gallery/tuftedTitmouse.jpg",
    thumbnailUrl: "./gallery/tuftedTitmouse.jpg"
    },
    { 
    previewUrl: "./gallery/baldEagle.jpg",
    thumbnailUrl: "./gallery/baldEagle.jpg"
    },
    { 
    previewUrl: "./gallery/barredOwl.jpg",
    thumbnailUrl: "./gallery/barredOwl.jpg"
    },
    { 
    previewUrl: "./gallery/americanKestrel.jpg",
    thumbnailUrl: "./gallery/americanKestrel.jpg"
    },
    { 
    previewUrl: "./gallery/scarlettTanager.jpg",
    thumbnailUrl: "./gallery/scarlettTanager.jpg"
    },
    { 
    previewUrl: "./gallery/cardinal.jpg",
    thumbnailUrl: "./gallery/cardinal.jpg"
    },
    { 
    previewUrl: "./gallery/whiteTailDeer.jpg",
    thumbnailUrl: "./gallery/whiteTailDeer.jpg"
    },
    { 
    previewUrl: "./gallery/capeMay.jpg",
    thumbnailUrl: "./gallery/capeMay.jpg"
    },
    { 
    previewUrl: "./gallery/paceBend.jpg",
    thumbnailUrl: "./gallery/paceBend.jpg"
    },
    { 
    previewUrl: "./gallery/dollySods.jpg",
    thumbnailUrl: "./gallery/dollySods.jpg"
    },
    { 
    previewUrl: "./gallery/deerRun.jpg",
    thumbnailUrl: "./gallery/deerRun.jpg"
    },
    { 
    previewUrl: "./gallery/deerRun2.jpg",
    thumbnailUrl: "./gallery/deerRun2.jpg"
    },
    { 
    previewUrl: "./gallery/singapore.jpg",
    thumbnailUrl: "./gallery/singapore.jpg"
    },
    { 
    previewUrl: "./gallery/singapore2.jpg",
    thumbnailUrl: "./gallery/singapore2.jpg"
    },
    { 
    previewUrl: "./gallery/malaysia.jpg",
    thumbnailUrl: "./gallery/malaysia.jpg"
    },
    { 
    previewUrl: "./gallery/malaysia2.jpg",
    thumbnailUrl: "./gallery/malaysia2.jpg"
    },
    { 
    previewUrl: "./gallery/malaysia3.jpg",
    thumbnailUrl: "./gallery/malaysia3.jpg"
    },
    { 
    previewUrl: "./gallery/bridgePA.jpg",
    thumbnailUrl: "./gallery/bridgePA.jpg"
    },
    { 
    previewUrl: "./gallery/austin.jpg",
    thumbnailUrl: "./gallery/austin.jpg"
    },
    { 
    previewUrl: "./gallery/london.jpg",
    thumbnailUrl: "./gallery/london.jpg"
    },
    { 
    previewUrl: "./gallery/london2.jpg",
    thumbnailUrl: "./gallery/london2.jpg"
    },
    { 
    previewUrl: "./gallery/niagaraFalls.jpg",
    thumbnailUrl: "./gallery/niagaraFalls.jpg"
    },
    { 
    previewUrl: "./gallery/seoul.jpg",
    thumbnailUrl: "./gallery/seoul.jpg"
    },
    { 
    previewUrl: "./gallery/seoul2.jpg",
    thumbnailUrl: "./gallery/seoul2.jpg"
    },
    { 
    previewUrl: "./gallery/seoul3.jpg",
    thumbnailUrl: "./gallery/seoul3.jpg"
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
            img.setAttribute("width", "600");
            img.setAttribute("height", "400");

            img.src = images[i].previewUrl; 
            preview.innerHTML = "";
            preview.appendChild(img);
        }
    }
}



