const lista = document.getElementById('lista')

console.log(lista)
Sortable.create(lista,{
    animation:150,
    chosenClass:"seleccionado",
    //ghostClass:"fantasma"
    dragClass: "drag",
    onEnd: ()=>{
       // console.log('se incerto un elemento')
    },
    group:"lista-persona",
    store:{
        //? funcion para guardar el orden de la lista
       
        set:(Sortable)=>{
           const orden = Sortable.toArray();
           localStorage.setItem(Sortable.options.group.name, orden.join('-'));
        },
       //? obtenemos el orden
        
       get:(Sortable)=>{
           const orden= localStorage.getItem(Sortable.options.group.name);
           return orden ? orden.split('-') :[];
        }

    }
})