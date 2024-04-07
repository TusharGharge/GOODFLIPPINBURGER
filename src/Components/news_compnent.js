
function News_compomnets({newsdata}){
    return (
        <div className='overflow-hidden shadow-lg'>
            <a href={newsdata.link} target="_blank">
        <img className='w-full h-[80%] ' src={newsdata.one} alt='jhgsdjg'></img>   
        <div className='w-95'>
           <h2 className='text-xl text-[#ffffff] leading-normal font-sans pt-2 pb-2'>{newsdata.title}</h2>
           </div>
           </a>
     </div>
    )
}

export default News_compomnets;
