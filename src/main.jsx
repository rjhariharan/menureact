
import { createRoot } from 'react-dom/client'
import './index.css'
import RecipeCard from './components/App';
import data from './data';


const root=createRoot(document.getElementById('root'));


function Page(){
  return(  <div className='page'>

            <h1 className='main-head'>Recipe Menu</h1>

            <div className='main-parent'>

           
            {
              data.map((item, index)=>{
                return(
                  <RecipeCard key={index} item={item}/>
                )
              })
            }
            </div>
    </div>
  );
}


root.render(<>
<Page/>
</>);





