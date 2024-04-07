import waterbottle from '../Assets/Main/story.jpg';
import team1 from '../Assets/Team/sijo-gfb.webp';
import team2 from '../Assets/Team/sid-gfb.webp';
import team3 from '../Assets/Team/viren-gfb.webp';
import Bottomnavbar from './bottomnavbar';
import footer from '../Assets/Main/footer3.PNG';

function Ourstory(){
return (
    <>
      <div className='bg-black h-full w-full'>
      <div className='flex justify-center pt-18 pl-10 px-20 py-20 font-moto'>
                <p className='text-[#ffffff] text-center text-5xl my-9'>
It Started With The Simple Dream Of Creating A Haven For Foodies</p>
            </div>

            <div className="w-full bg-black rounded-md shadow-lg mx-auto px-20">
    <div className="md:flex">
      {/* Left Side (Image) */}
      <div className="md:w-1/2">
        <a href="https://youtu.be/lUW00ZJRkbo" target="_blank" rel="noopener noreferrer"> <img 
          className="w-full h-64 object-cover md:h-[700px] md:w-full"
          src={waterbottle}
          alt="Card"
        /></a>
      </div>
      {/* Right Side (Title and Description) */}
      <div className="md:w-1/2 p-2 pt-2 px-20 pb-4">
        <div className='py-20'>
          <h2 className="text-5xl font-semibold text-[#ffffff] mb-2 pt-2 pb-8">
          Our Story
          </h2>
          <p className="text-2xl font-sans leading-normal text-[#ffffff] font-light leadingspace-4">
          GOOD FLIPPIN’ BURGERS® was launched in 2019 in Mumbai. The brand currently has a total of 30 outlets and rising across Mumbai and Delhi with a headcount of more than 350+ employees. With 20 stores across Mumbai, the brand has also made inroads in the Delhi NCR Region with 10 outlets.<br/><br/>

It started with the simple aim of creating a haven for foodies that serves fresh delicious burgers that are priced right. Since then, the burger chain has been flippin’ hearts from one customer to the next, every day across all its outlets.
          </p>
        
        </div>
          <div>
          <b className="bg-[#ec2449] hover:bg-[#ec2449cd] text-[#ffffff] text-sans p-4 ps-7 pe-7 rounded-md"> Know More</b>
        
        </div>
        </div>
    </div>
  </div>


  {/*  founder code */}
  
  <div className='p-20'>
    <div className="md:flex">
      <div className='text-[#ffffff] w-[700px] h-[400px] bg-black 
      rounded-md shadow-lg mx-auto px-2'>
        <h2 className='text-5xl pb-5'>Meet The Founders</h2>
        <p className='text-2xl leading-normal'>Founded by three passionate foodies – Sijo Mathew, Sid Marchant and Viren D’Silva who moved from their corporate backgrounds to start an entrepreneurial journey in the food and hospitality industry.</p>
        <h6 className='text-3xl font-bold'>”<br/>
The One Aim That Bound All Of Them Together Was The Dream To Become India’s Most Loved Burgers.</h6>

      </div>
      <div className='text-[#ffffff] ps-'>
        <img src={team1} className='h-[300px] w-[300px]'/>
        <h2 className='pt-3 text-2xl'>Co-founder</h2>
        <p className='pb-3 text-xl'>Sijo Marchant</p>
        
         <button className='text-red-500'>&#8594; Know More</button> 
        
      </div>
      <div className='text-[#ffffff] ps-7'>
        <img src={team2} className='h-[300px] w-[300px]'/>
        <h2 className='pt-3 text-2xl'>Co-founder</h2>
        <p className='pb-3 text-xl'>Sid Mathew</p>
        
         <button className='text-red-500'>&#8594; Know More</button> 
        
      </div>

      <div className='text-[#ffffff] ps-7'>
        <img src={team3} className='h-[300px] w-[300px]'/>
        <h2 className='pt-3 text-2xl'>Co-founder</h2>
        <p className='pb-3 text-xl'>Viren D’Silva</p>
        
         <button className='text-red-500'>&#8594; Know More</button> 
        
      </div>



    </div>
    </div>
    <div className='flex w-full justify-center pl-20 items-center px-20'>
        <img className='bg-black mx-10 h-94 w-[1500px] p-20'src={footer} alt="logo"></img>
    </div>
    <Bottomnavbar></Bottomnavbar>
    
        </div>
    </>
)
}

export default Ourstory;