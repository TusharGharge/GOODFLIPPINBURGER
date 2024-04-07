import news from '../Assets/Main/news.jpg';
import Brewdata from '../Components/brew_data';
import News_compomnets from '../Components/news_compnent';
import Newsdatadetails from '../Components/news_data';
import footer from '../Assets/Main/footer3.PNG';
import Bottomnavbar from './bottomnavbar';


function News(){
    return (
        <div className='bg-black '>
    <div className='bg-black' >
        <img className='bg-black w-full'src={news} alt="logo"></img>
    </div>
   
    {/* <div className="max-w-sm rounded overflow-hidden shadow-lg p-20">
      <img className="w-full h-48 object-cover" src={news} alt='jhgsdjg' />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#ffffff]">'wkjhdkhjfdawef';l,w;e'k,f';plk2ep';kfp';lkwe';fk';wekf';lkewf';kep';fk;ekf;lfeklkfedjml;jmewqfplkmqlfekmlmefpmekmflkmfelmkefm</div>
      </div>
    </div>
      */}
      <div className='px-14'> 
      <div className='px-20 py-20 justify-center '>
    <div className='container grid grid-cols-4 gap-10 item'> 
         {/* <div className=' rounded overflow-hidden shadow-lg'>
      
         <img className='w-full h-[70%] ' src={newsdata[0].one} alt='jhgsdjg'></img>   
         <div className='w-95'>
            <h2 className='text-2xl text-[#ffffff] leading-loose px-5'>{newsdata[0].title}</h2>
            </div>
      </div> */}
      {Newsdatadetails.map((newsdata)=>{return (<News_compomnets newsdata={newsdata}></News_compomnets>);})}
     </div>
     </div>

     <div className='flex justify-center pt-18 pl-10'>
                <p className='text-[#ffffff] text-center text-4xl my-9'>GOOD FLIPPIN BREW</p>
                
            </div>
            <div className='px-20 py-20 justify-center'>
            <div className='container grid grid-cols-4 gap-10 item'> 
            {Brewdata.map((newsdata)=>{return (<News_compomnets newsdata={newsdata}></News_compomnets>);})}
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

export default News;