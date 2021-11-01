const userName = document.querySelector('#username');

function profileDisplay(docs) {
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');

    h2.textContent = docs.data().username;
    h3.textContent = docs.data().location;

    userName.appendChild(h2);
    userName.appendChild(h3);
}

db.collection('user').get().then((snapshot) => {
    snapshot.docs.forEach(docs => {
        profileDisplay(docs);
    });
})