

export const getProductsByName = ( products, q = '') => {

    q = q.toLocaleLowerCase().trim();

    if(q.length === 0) return [];

    console.log(products) // cada vez que cambia el input lanza petición :( No en la primera recarga

    return products.filter(
        product => product.name.toLocaleLowerCase().includes( q )
    )

}