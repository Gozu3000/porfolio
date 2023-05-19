import Sales from '../images/sales.PNG'
import CarritoResponsive  from '../images/laptops/carrito_responsive.PNG'
import Carrito  from '../images/laptops/carrito.PNG'
import LaptopId  from '../images/laptops/laptop_id.PNG'
import Pokedex from '../images/pokedex/pokedex.PNG'
import Pokedex_desktop from '../images/pokedex/pokedex_desktop.PNG'
import Pokedex_responsive from '../images/pokedex/pokedex_responsive.PNG'
import CreditCardDatos from '../images/credit/credit-card-datos.PNG'
import CreditCardErrors from '../images/credit/credit-card-errors.PNG'
import Polleria from '../images/polleria/polleria.PNG'
import PolleriaResponsive from '../images/polleria/polleria_responsive.PNG'
import PolleriaVista from '../images/polleria/polleria_vista.PNG'


export const proyectos =[
    {
        name:'Tienda de laptops',
        description:'Una tienda de laptops con su respectivo carrito de compras. Para ello cree un api falsa(mockapi) para poder consumir los datos e utilicé redux para el carrito de compras.',
        tecnology:['React', 'Material UI', 'Redux Toolkit'],
        images:[Sales, CarritoResponsive, Carrito, LaptopId],
        link:'https://sale-of-laptops-main.vercel.app/'
    },
    {
        name:'Fronted-Mentor: Validación de tarjeta',
        description:'Resuelvo un challenge de fronted mentor. El cual pide una tarjeta de crédito responsive, que se actualice los datos ingresados en los inputs y se muestre en la tarjeta.',
        tecnology:['React'],
        images:[CreditCardDatos, CreditCardErrors ],
        link:'https://modelo-prueba-tarj.vercel.app/'
    },
    {
        name:'Pokédex',
        description:'Desarrollo de una pokédex empleando la PokeApi. Puedes encontrar tu pokemon favorito con solo escribir el nombre o su id.',
        tecnology:['React'],
        images:[Pokedex, Pokedex_desktop, Pokedex_responsive],
        link:'https://pokedex-dun-kappa.vercel.app/'
    },
    {
        name:'Pollería',
        description:'En este proyecto creo una página web para una pollería ficticia. Esta es una SPA responsive y con rutas.',
        tecnology:['React'],
        images:[Polleria, PolleriaVista, PolleriaResponsive],
        link:'https://page-polleria.vercel.app/',
    }
]