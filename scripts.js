let url = 'http://localhost:3000/sneakers';

let container = document.querySelector('.container');
let create = document.querySelector('.create');
let update = document.querySelector('.update');
const del = document.querySelector('.delete');

let nameCreate = document.querySelector('.nameCreate');
let sizeCreate = document.querySelector('.sizeCreate');
let imageCreate = document.querySelector('.imageCreate')
let colorCreate = document.querySelector('.colorCreate')

let nameUpdate = document.querySelector('.nameUpdate');
let sizeUpdate= document.querySelector('.sizeUpdate');
let imageUpdate = document.querySelector('.imageUpdate');
let colorUpdate= document.querySelector('.colorUpdate');
let idUpdate = document.querySelector('.idUpdate');
const deleteId = document.querySelector('.deleteId');

create.addEventListener('click', addSneaker);
update.addEventListener('click', updateSneaker);
del.addEventListener('click', removeSneaker);

function addSneaker(){
    let sneaker = {
        name:  nameCreate.value,
        size:  sizeCreate.value,
        image: imageCreate.value,
        color: colorCreate.value,
       
    }
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(sneaker)

    })

    .catch(e => console.log(e))

    updatePage();
}

function updateSneaker(){
    event.preventDefault()
    let name = {
        name:  nameUpdate.value,
        size:  sizeUpdate.value,
        image: imageUpdate.value,
        color: colorUpdate.value
    }
    fetch(`${url}/${idUpdate.value}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(name)
    })
    .catch(e => console.log(e))
    
    updatePage();
}

function removeSneaker(){
    
    fetch(`${url}/${deleteId.value}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .catch(e => console.log(e))
}

function updatePage(){
    container.textContext = "";
    fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
    for (let i = 0; i < res.length; i++) {
        const element = res[i];
        console.log(element)   

        let sneaker = document.createElement('h1');
        let sneakerImage = document.createElement('img');
        sneakerImage.src = element.image
        let sneakerId = document.createElement('h1')
        
        sneakerId.innerHTML = `${element.id}`  
        sneaker.innerHTML = `${element.name} `

        sneaker.appendChild(sneakerImage)
        sneaker.appendChild(sneakerId) 

        container.prepend(sneaker);
        
    }

})

}

updatePage();