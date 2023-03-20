//auxiliar del sw

//Guardar caché dinámico
function actualizaCacheDinamico(dynamicCache, req, res){
    if(res.ok){
        //la respuesta tiene data para almacenar en el cache
        caches.open(dynamicCache).then(cache=>{
            cache.put(req, res.clone())
            return res.clone()
        })
    }else{
        //falló la red y el cache
        //no hay nada q hacer
        return res
    }
}