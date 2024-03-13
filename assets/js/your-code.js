export function getAllDogs() {
    return fetch('/dogs')
    
}

export function getDogNumberTwo() {
    return fetch('/dogs/2')
}

export function postNewDog() {
    let body = new URLSearchParams({name: 'Storm', age: '5'})
    return fetch('/dogs',{
        method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: body  
    })
}

export function postNewDogV2(name, age) {
     let body = new URLSearchParams({name: name, age: age})
     let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
     };
     return fetch('/dogs', options);

}

export function deleteDog(id) {
      let options = {
        method: 'POST',
        headers: {
            'AUTH': 'ckyut5wau0000jyv5bsrud90y'
        }

      }
      return fetch(`/dogs/${id}/delete`, options)
}