import store from  '../Assets/Main/our-stores-background.webp';
import footer from '../Assets/Main/footer3.PNG';
import Bottomnavbar from './bottomnavbar';

function Contactus(){
    return (
        <div class='bg-black'>
    <div>
        <img class='bg-black w-full'src={store} alt="logo"></img>
    </div>
    <div class='bg-black h-full w-full'>

    </div>
    <div className='flex w-full justify-center items-center pl-20 px-20'>
        <img className='bg-black mx-10 h-94 w-[1500px] p-20'src={footer} alt="logo"></img>
    </div>
    <Bottomnavbar></Bottomnavbar>
    
    </div>
    )
}

export default Contactus;