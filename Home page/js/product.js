const productImg = document.querySelectorAll('#product-img');
const productBody = document.querySelectorAll('#product-body');


function profileDisplay(data) {
    console.log(productImg.length, productBody.length);

    // titleArray = ;
    console.log(data);

    // descriptionArray = ;
    // console.log(descriptionArray);

    for (i = 0; i < productImg.length; i++) {

        let img = document.createElement('img');
        img.src = data[i].image;
        img.height = 160;
        img.setAttribute('align', 'middle');
        productImg[i].appendChild(img);
    };

    for (i = 0; i < productBody.length; i++) {

        let h5 = document.createElement('h5');
        let p = document.createElement('p');
        // console.log(docs.data().title);
        h5.textContent = data[i].title;
        p.textContent = data[i].description;

        productBody[i].appendChild(h5);
        productBody[i].appendChild(p);

    }
    return data;

}

var docs = [];

try {

    db.collection('product').get().then((snapshot) => {
        // console.log(snapshot.docs);
        var index = 0;
        snapshot.docs.forEach(doc => {
            docs[index++] = doc.data();
        });

        profileDisplay(docs);
    });

} catch (error) {

    console.log(error);
}