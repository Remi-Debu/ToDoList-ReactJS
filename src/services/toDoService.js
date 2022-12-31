const URL = "http://localhost:3000/toDoList"

class ToDoService {

    findAll = () => {
        return fetch(URL).then((res, rej) => res.json())
    }

    findById = (id) => {
        return fetch(`${URL}/${id}`)
            .then(data => data.json())
    }

    delete = (id) => {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE',
        }).then((res, rej) => res.json())
    }

    patch = (id, element) => {
        return fetch(`${URL}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(element),
            headers: { "Content-Type": "application/json" }
        }).then((res, rej) => res.json())
    }

    post = (element) => {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify(element),
            headers: { "Content-Type": "application/json" }
        })
            .then((res, rej) => res.json())
            .catch(err => console.error(err))
    }

    put = (id, element) => {
        return fetch(`${URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(element),
            headers: { "Content-Type": "application/json" }
        })
            .then((res, rej) => res.json())
            .catch(err => console.error(err))
    }

}

export const toDoService = Object.freeze(new ToDoService())