import team from '../Assets/Main/workwithus/team.jpg';
import team1 from '../Assets/Main/workwithus/GFB-Culture.webp';
import team2 from '../Assets/Main/workwithus/GFB-Process.webp';
import News_compomnets from '../Components/news_compnent';
import WorkCard from '../Components/workwithuscomponent';
import footer from '../Assets/Main/footer3.PNG';
import Bottomnavbar from './bottomnavbar';

import CardCarousel from '../Components/slider';
// import WorkCard from '../Components/workwithuscomponent';
const cardData = [
    {
      image: 'https://placekitten.com/400/300',
      title: 'Card 1',
      description: 'This is the description for Card 1.',
      age: 3,
    },
    {
      image: 'https://placekitten.com/401/300',
      title: 'Card 2',
      description: 'This is the description for Card 2.',
      age: 5,
    },
    // Add more card data as needed
  ];

const CrewData=[
    {
        one: team1,
        title: 'Work Culture',
        description: 'Our work culture is built on strong grounds of ethics and values helping us to stay focused and achieve success and constantly look for the betterment of the employees.',
      },
      {
       one: team2,
        title: 'Process',
        description: 'We have a firm belief that our employees and our customers should get a clear understanding of all the processes. Our processes offer flexible solution which can be tailored to meet the exact needs of the business as it grows an evolves.',
      },
      {
       one: team,
        title: 'People',
        description: "We believe in our employee's capability to come up with new ideas not only reward success but also encourage dimensions, Our focus is to ensure every employee enjoys work and looks forward to coming to the office next day fully charged.",
      },

]
  
function Workus(){
    return (
        <div className='bg-black h-full'>
        <div>
            <img className='bg-black w-full'src={team} alt="logo"></img>
        </div>
        {/* <div>
                <p className='text-[#ffffff] text-center text-5xl my-4 pt-7 font-sans'>Good Flippin Human</p>
                <h2 className='text-[#ffffff] text-center text-xl font-moto leading-relaxed pb-8'>Good Flippin’ Human is an integral part our recognition initiative. It provides our employees the platform to voice their<br/> passion, journey and experience with us, motivating them to engage more and give their best to push their performance to <br/>next level.</h2>
        </div> */}

        <div>
        {/* <div className="flex-row items-center justify-center h-screen bg-black-200">
      <CardCarousel cards={cardData} />
    </div> */}
        </div>

        <div>
                <p className='text-[#ffffff] text-center text-5xl my-4 pt-7 font-sans'>
Join Our Team</p>
                <h2 className='text-[#ffffff] text-center text-xl font-moto leading-relaxed pb-8'>
We are a growing team of fun & passionate individuals looking for mavericks to join our team. Drop your resume at <span className='text-red-500'> pr@goodflippin.com </span>if you are ready to apply your <br/> knowledge and skills to exciting new challenges. From learning to leadership, this is your chance to grow an excellent career if you are as passionate about delivering a <br/> delicious burger as we are!</h2>
        </div>

        <div className='px-20 py-16 justify-center'>
        <div className='container mx-auto px-20 justify-center'>
            <div className='grid grid-cols-3 item'> 
            {CrewData.map((newsdata)=>{return (<WorkCard Workdata={newsdata}></WorkCard>);})}
            </div>
            </div>
            </div>
        
            <div className='flex w-full justify-center items-center pl-20 px-20'>
        <img className='bg-black mx-10 h-94 w-[1500px] p-20'src={footer} alt="logo"></img>
    </div>
    <Bottomnavbar></Bottomnavbar>
    

       </div>

       

    )
}

export default Workus;
