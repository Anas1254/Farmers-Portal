function addCards() {
    var temp = document.getElementsByTagName("template")[0];
    var clon1 = temp.content.cloneNode(true);
    var clon2 = temp.content.cloneNode(true);
    var clon3 = temp.content.cloneNode(true);
    document.getElementById("card").appendChild(clon1);
    document.getElementById("card").appendChild(clon2);
    document.getElementById("card").appendChild(clon3);

    var docs = [];

    try {

        db.collection('product').get().then((snapshot) => {
            // console.log(snapshot.docs);
            var index = 0;
            snapshot.docs.forEach(doc => {
                docs[index++] = doc.data();
            });
            docs = docs.slice(3, docs.length);
            profileDisplay1(docs);
        });

    } catch (error) {

        console.log(error);
    }
}



function profileDisplay1(data) {
    const productImg1 = document.querySelectorAll('#product-img-new');
    const productBody1 = document.querySelectorAll('#product-body-new');
    console.log(productImg1.length, productBody1.length);

    // titleArray = ;
    console.log(data);

    // descriptionArray = ;
    // console.log(descriptionArray);

    for (i = 0; i < productImg1.length; i++) {

        let img = document.createElement('img');
        img.src = data[i].image;
        img.height = 160;
        img.setAttribute('align', 'middle');
        productImg1[i].appendChild(img);
    };
    for (i = 0; i < productBody1.length; i++) {

        let h5 = document.createElement('h5');
        let p = document.createElement('p');
        // console.log(docs.data().title);
        h5.textContent = data[i].title;
        p.textContent = data[i].description;

        productBody1[i].appendChild(h5);
        productBody1[i].appendChild(p);

    }
    return data;

}