const firebaseConfig = {
    apiKey: "AIzaSyCsTD5XSRNl7VG-i6Ir0F3D1X1PxWk2Rfs",
    authDomain: "shopify-30670.firebaseapp.com",
    databaseURL: "https://shopify-30670-default-rtdb.firebaseio.com",
    projectId: "shopify-30670",
    storageBucket: "shopify-30670.appspot.com",
    messagingSenderId: "792157900529",
    appId: "1:792157900529:web:32d02d2d8b3fe05d94e350",
    measurementId: "G-MZC38NN5BZ"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// HTML input element


// JavaScript to handle file selection
// document.getElementById('fileInput').addEventListener('change', function (event) {
//     var file = event.target.files[0]; // Get the selected file
//     if (file) {
//         var reader = new FileReader(); // Create a FileReader
//         reader.onload = function (e) {
//             var contents = e.target.result; // The file's text content is in e.target.result
//             //console.log(contents);

//         };
//         reader.readAsText(file); // Read the file as text
//     }
// });

const uploadBtn = document.querySelector("#upload")
uploadBtn.addEventListener("click", () => {
    upload()
})
function upload(){

    const path = document.querySelector("#path")
    let postRef = firebase.database().ref('shopless/' + path.value);
    const imgUrl = document.querySelector("#imgURL")
    const name = document.querySelector("#name")
    const price = document.querySelector("#price")
    const description = document.querySelector("#description")
    const quantity = document.querySelector("#qty")
    let wordToCheck = "ads/"
    let filepath = path.value
    if (filepath.includes(wordToCheck)) {
console.log(contents)
        
        postRef.set({
            'product_image': imgUrl.value,
        })
        alert("this is adds " + path.value)

    } else {
        postRef.push({
            'product_name': name.value,
            'product_image': imgUrl.value,
            'product_price': price.value,
            'product_description': description.value,
            'quantity': quantity.value
        })
            .then(res => {
                // console.log(res.getKey()) // this will return you ID
                // setTimeout(clearTitle, 50)
                // setTimeout(clearSubTitle, 100)
                // setTimeout(clearImage, 200)
                // setTimeout(clearColor, 300)
                // setTimeout(clearUrl, 400)

                alert("Success")

            })
            .catch(error => console.log(error));

    }



}


//-------


