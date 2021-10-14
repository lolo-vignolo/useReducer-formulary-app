
const initialState = [{
    id:1,
    todo: "comprar pan",
    done : false
}];

const todoReducer = (state = initialState , action) =>{

    if(action?.type ==="agregar"){
        return[...state, action.payload]
    }

     
};

//si lo dejo asi me devuelve el state uno solo. 
let myReducer = todoReducer();
//
const newObject = {
    id:2,
    todo: "comprar leche",
    done : false
};

const add = {
    type : "agregar",
    payload : newObject
};

// uso como argumneto myReducer por que eso en realidad lo unico que hace es devolver el stado inicial.
myReducer = todoReducer(myReducer, add);

console.log(myReducer)


























// let todoes = todoReducer();

// const secondState = {
//     id:2,
//     todo: "comprar leche",
//     done : false
// }

// const agregarNewValue = {
//     type : "agregar",
//     payload : secondState

// }

// todoes = todoReducer(todoes, agregarNewValue );

// console.log(todoes);