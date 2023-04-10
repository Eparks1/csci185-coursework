// photos[5]

const photos = [
    "images/img1-600x400.jpg",  //0
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;
// for (let i=0; i< photos.length; i++) {

// }

/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() { 
    console.log('Show image');

    document.querySelector('#numberone').src=photos[idx];

    document.querySelector('.caption').innerHTML = `${idx+1} out of ${photos.length}`;
    

}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    console.log('forward');
    // ++idx;
    showImage();

    if (idx == photos.length-1) {
        idx=0;
    }

    else {
        ++idx;
    }
      
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    console.log('back');
    // --idx;
    showImage();

    if (idx == 0) {
        idx=photos.length-1;
    }

    else {
        --idx;
    }

}
