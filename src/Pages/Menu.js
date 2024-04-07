import logodata from '../Assets/Main/Clucket-Bucket-Banner.jpg.webp';
import item from '../Assets/Main/menuitem.PNG';
import footer from '../Assets/Main/footer.PNG';
import Bottomnavbar from './bottomnavbar';
// import Chicken from '../Assets/Burgers/Chicken/Cluckinator.webp';
// import MainNavbar from './MainNavbar';
import MenuComponent from '../Components/Menucompnent';
import Menudata from '../Components/Menu_data';
import MenuDeatail from '../Components/Menudetails';
import MenuDeataildata from '../Components/MenuDetaildata';
const borderactive="flex flex-row ps-2 border-dashed border-r-3 border-[#ec2449] px-2 mb-7";
const borderinactive="flex flex-row ps-2";

const bred='bg-[#ec2449]';
const bgreen='bg-[#008000]';
function Menu() {
  
return (
    <>
    <div className='bg-black'>
    <div>
        <img className='bg-black w-full'src={logodata} alt="logo"></img>
    </div>
    <div className='py-2 px-2 flex justify-center w-full bg-[#ec2449] top-0 mx-auto'>
        <ul className='flex justify-between underline underline-offset-8 py-3 text-2xl text-[#ffffff] pb-5 font-medium'>
            <li className='md:pe-5 ' >
               <a href="#Burgers">Burgers</a>            
            </li>
            <li className='md:pe-5'>
            <a href="#wraps">Wraps</a>  
            </li>
            <li className='md:pe-5'>
            <a href="#hotdog">Hot Dogs</a>          
            </li>
            <li className='md:pe-5'>
            <a href="#sides">Sides</a>   
            </li>
            <li className='md:pe-5'>
            <a href="#shake">Shakes   </a>        
            </li>
            <li className='md:pe-5'>
            <a href="#cofee">Coffee       </a>    
            </li>
        </ul>
        </div>
        </div>
        <div classname='w-fit h-fit justify-center size-full px-20'>
            <div className='bg-black justiy-center px-[300px] py-[150px]' >
            <div className='bg-black justify-center'>
             
            </div> 
        
            
           <div>
           <div id="Burgers">
                <p className='text-[#ec2449] text-center text-8xl underline decoration-1 underline-offset-8 font-poppins'>BURGERS</p>
            
          
        <MenuDeatail title='Chicken' colordata={bred} data={Menudata.BURGERS["Chicken"]}></MenuDeatail>
          
        <MenuDeatail title='Meat' colordata={bred} data={Menudata.BURGERS["Meat"]}></MenuDeatail>
        <MenuDeatail title='Veg' colordata={bgreen} data={Menudata.BURGERS["Veg"]}></MenuDeatail>
        </div>
        <div id="wraps">
                <p className='text-[#ec2449] text-center text-8xl underline decoration-1 underline-offset-8 font-poppins'>WRAPS</p>
            </div>
            <MenuDeatail title='Veg' colordata={bgreen} data={Menudata.WRAPS["Veg"]}></MenuDeatail>
        <MenuDeatail title='Non Veg' colordata={bred} data={Menudata.WRAPS["Non_Veg"]}></MenuDeatail>
        </div>

        <div id="hotdog">
                <p className='text-[#ec2449] text-center text-8xl underline decoration-1 underline-offset-8 font-poppins'>HOT DOGS</p>
          
            <MenuDeataildata data={Menudata.HOTDOGS["Non_veg"]}></MenuDeataildata>
            
            </div>
            
            <div id="sides">
                <p className='text-[#ec2449] text-center text-8xl underline decoration-1 underline-offset-8 font-poppins'>SIDES</p>
         
            <MenuDeatail title='Chicken' colordata={bred} data={Menudata.SIDES["Chicken"]}></MenuDeatail>
            <MenuDeatail title='Veg' colordata={bgreen} data={Menudata.SIDES["Veg"]}></MenuDeatail>
            </div>


            <div id="shake">
                <p className='text-[#ec2449] text-center text-8xl underline decoration-1 underline-offset-8 font-poppins'>SHAKES</p>
         
            <MenuDeatail title='Thicc Shakes' colordata={bgreen} data={Menudata.SHAKES["Thicc_Shakes"]}></MenuDeatail>
            <MenuDeatail title='Milkshakes' colordata={bgreen} data={Menudata.SHAKES["Milkshakes"]}></MenuDeatail>
            </div>

            <div id="cofee">
                <p className='text-[#ec2449] text-center text-8xl underline decoration-1 underline-offset-8 font-poppins'>COFFEE</p>
         
            <MenuDeataildata data={Menudata.COFFEE["Thicc_Shakes"]}></MenuDeataildata>
             </div>



             <div>
        <img className='bg-black w-full mx-1'src={item} alt="logo"></img>
    </div>
    <div>
        <img className='bg-black w-full mx-10'src={footer} alt="logo"></img>
    </div>
    <Bottomnavbar></Bottomnavbar>
        
        </div>

        
        
            </div>
 
        
    </>
)
}

export default Menu;