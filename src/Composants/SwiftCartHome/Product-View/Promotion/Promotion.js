import React from 'react'
import { Galleria } from 'primereact/galleria';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import image from '../../../../assets/images/Promation/1.jpg'
import image2 from '../../../../assets/images/Promation/2.jpg'
import image3 from '../../../../assets/images/Promation/3.jpg'
import image4 from '../../../../assets/images/Promation/4.jpg'
import image5 from '../../../../assets/images/Promation/5.jpg'
import image6 from '../../../../assets/images/Promation/6.jpg'
import image7 from '../../../../assets/images/Promation/9.jpg'
import Beauty from '../../../../assets/images/Promation/category/Beauty.jpg'
import Computers from '../../../../assets/images/Promation/category/Computers.jpg'
import Fashion from '../../../../assets/images/Promation/category/Fashion.jpg'
import Headphones from '../../../../assets/images/Promation/category/Headphones.jpg'
import Health from '../../../../assets/images/Promation/category/Health.jpg'
import Home from '../../../../assets/images/Promation/category/Home.jpg'
import TV from '../../../../assets/images/Promation/category/TVs.jpg'
import videoGames from '../../../../assets/images/Promation/category/Video Games.jpg'
import './Promotion.css';
import CardGroup from './CardGroup';
import ValidateurChaine from '../../../../function/ValiderChaine'; 
import { useNavigate } from 'react-router-dom';
import {Search}from '../../../../Context/SerachBar';
function Promotion({product,loaded}) {
    const{search,setSearch}=Search();
    const navigate=useNavigate();
    const products = [
        { name: 'Promotion 1', description: 'Description for Promotion 1', image: image },
        { name: 'Promotion 2', description: 'Description for Promotion 2', image: image2 },
        { name: 'Promotion 3', description: 'Description for Promotion 3', image: image3 },
        { name: 'Promotion 4', description: 'Description for Promotion 4', image: image4 },
        { name: 'Promotion 5', description: 'Description for Promotion 4', image: image5 },
        { name: 'Promotion 4', description: 'Description for Promotion 4', image: image6 },
        { name: 'Promotion 4', description: 'Description for Promotion 4', image: image7},

    
    ];
    const itemTemplate = (item) => {

        return <div className='ssssspppp' ><img src={item.image} alt={item.alt} style={{ width: '100%' ,objectFit:"cover"}}/></div>;
    }

  return (
   <div className='xzihedpiu9858949848'>
     <Galleria value={products}  
     autoPlay transitionInterval={2000}
             className='Galleria'   showThumbnails={false} showItemNavigators circular item={itemTemplate}  />
    {loaded&&<div className='ssiiidjij'>
    <div className='sniijsi556'>
     <CardGroup cardTitel={'Pick up where you left off'}
     List={[
            {photo:Beauty,titre:'Beauty'},
            {photo:Computers,titre:'Computers'},
            {photo:Fashion,titre:'Fashion'},
            {photo:Headphones,titre:'Headphones'}
     ]}
     
     />
     <CardGroup cardTitel={'Keep shopping for'}
     List={[
            {photo:product[0]?.media[0],titre:ValidateurChaine.reduireEtValiderChaine(product[0]?.name,12),onClik:()=>{navigate("/Swiftcart/product/"+product[0]?.id)}},
            {photo:product[2]?.media[0],titre:ValidateurChaine.reduireEtValiderChaine(product[2]?.name,12),onClik:()=>{navigate("/Swiftcart/product/"+product[2]?.id)}},
            {photo:product[3]?.media[0],titre:ValidateurChaine.reduireEtValiderChaine(product[3]?.name,12),onClik:()=>{navigate("/Swiftcart/product/"+product[3]?.id)}},
            {photo:product[4]?.media[0],titre:ValidateurChaine.reduireEtValiderChaine(product[4]?.name,12),onClik:()=>{navigate("/Swiftcart/product/"+product[4]?.id)}},
           
     ]}

     />
     <CardGroup cardTitel={'Spring deals by category'}
     List={
        [
            {photo:Beauty,titre:'Beauty',onClik:()=>{navigate('/Swiftcart/search?supcategories=Health+and+Beauty');
       
                    setSearch({...search,
                        supcategories:['Health and Beauty'],      
                      });
           
        }},
            {photo:Computers,titre:'Computers',onClik:()=>{navigate('/Swiftcart/search?categories=Computers+%26+Laptops&supcategories=Electronics+and+IT')
        ;setSearch({
            ...search,
            supcategories: ['Electronics and IT'],
            selectedCategories:['Computers Laptops']
        })
        }},
            {photo:Fashion,titre:'Fashion',onClik:()=>{navigate('/Swiftcart/search?supcategories=Clothing+and+Fashion');
        setSearch(
           { ...search,
            supcategories: ['Clothing and Fashion']
           })
        }},
            {photo:Headphones,titre:'Headphones',onClik:()=>{navigate('/Swiftcart/search?categories=Audio+%26+Headphones&supcategories=Electronics+and+IT');
            setSearch({
                ...search,
                supcategories: ['Electronics and IT'],
                selectedCategories:['Audio Headphones']
            })
        
        }}
        ]

     }

     />
     <CardGroup cardTitel={'Spring deals by category'}
       List={
        [
            {photo:Beauty,titre:'Beauty'},
            {photo:Computers,titre:'Computers'},
            {photo:Fashion,titre:'Fashion'},
            {photo:Headphones,titre:'Headphones'}
        ]

     }/>
     </div>
     <div className='sssooodood'>
     <CardGroup cardTitel={'Pick up where you left off'}
     List={[
            {photo:Beauty,titre:'Beauty'},
            {photo:Computers,titre:'Computers'},
            {photo:Fashion,titre:'Fashion'},
            {photo:Headphones,titre:'Headphones'}
     ]}
     
     />
     <CardGroup cardTitel={'Keep shopping for'}
     List={[
            {photo:Health,titre:'Health'},
            {photo:Home,titre:'Home'},
            {photo:TV,titre:'TVs'},
            {photo:videoGames,titre:'Video Games'}
     ]}

     />
     <CardGroup cardTitel={'Spring deals by category'}
     List={
        [
            {photo:Beauty,titre:'Beauty'},
            {photo:Computers,titre:'Computers'},
            {photo:Fashion,titre:'Fashion'},
            {photo:Headphones,titre:'Headphones'}
        ]

     }

     />
     <CardGroup cardTitel={'Spring deals by category'}
       List={
        [
            {photo:Beauty,titre:'Beauty'},
            {photo:Computers,titre:'Computers'},
            {photo:Fashion,titre:'Fashion'},
            {photo:Headphones,titre:'Headphones'}
        ]

     }/>
     
     </div>
    </div>}
    
   </div>
   
    
  )
}

export default Promotion