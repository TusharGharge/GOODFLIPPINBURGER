import { Link, NavLink } from 'react-router-dom';
import logo from '../Assets/Main/gfb-logo.png';
import classes from '../Pages/Root.module.css';
function MainNavbar(){
    const textcolor="text-[#ffffff] text-center my-8 text-weight-10 font-medium pe-4 hover:underline";
    const linkclassactive="text-[#ffffff] text-center ps-2 pe-2 mt-6 text-weight-10 font-medium pe-4 hover:underline underline-offset-8 decoration-[#ec2449] active:underline underline-offset-8 decoration-[#ec2449] focus:underline underline-offset-8 decoration-[#ec2449]"; 
    const linkclassinactive="text-[#ffffff] text-center my-8 ps-60 pe-4 text-weight-10 font-medium";
    return (
  
    <>
    <header className='py-2 px-2 flex justify-center max-w-700 bg-black stciky top-0 mx-auto flex-wrap' >
        <nav>
            <ul className='flex pe-2'>
                <li>
                    <img src={logo} alt="logo" className='max-w-60 max-h-20'></img>
                </li>
                <li className='md:my-8 md:pl-40'>
                    {/* <Link to="our-story" className={({isActive}) => isActive ?linkclassinactive:linkclassinactive}>OUR STORY</Link> */}
                    <Link to="our-story" className={linkclassactive}>OUR STORY</Link>
                </li>
                <li className='md:my-8 '>
                    <Link to="menu" className={linkclassactive}>MENU</Link>
                </li>
                <li className='md:my-8'>
                    <Link to="good-giving-living" className={linkclassactive}>GOOD GIVING LIVING</Link>
                   
                </li>
                <li className='md:my-8'>
                    <Link to="in-the-news" className={linkclassactive}>IN THE NEWS</Link>
                </li>
                <li className='md:my-8'>
                    <Link to="work-with-us"className={linkclassactive} >WORK WITH US</Link>
                </li>
                <li className='md:my-8'>
                    <Link to="contact-us"className={linkclassactive}>CONTACT US</Link>
                </li>
                <li className='gap-2 ' >
                    <button className="my-7 ps-2 pe-2 px-1 py-1 rounded-md text-[#ffffff] text-center bg-[#ec2449] hover:bg-[#ec2449cd]"> ORDER NOW </button>
                </li>
                
            </ul>
        </nav>
    </header>
    </>
)
}

export default MainNavbar;