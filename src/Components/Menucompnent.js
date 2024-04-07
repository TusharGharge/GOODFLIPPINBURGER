
function MenuComponent({data,color}){
    const size=data.length;
    console.log(size);

return (
    <div className={color} key={data}>
    <div className='text-[#ffffff] px-2 justify-between'>
    <h1 className='text-3xl pb-3 font-poopins'>{data.title}</h1>
    <h1 className='pb-2 font-normal leading-7 text-grey font-sans'>{data.description}</h1>
<h1 className='pb-2 font-normal leading-6 font-sans'>{data.size}</h1>
<h1 className='pb-2 font-normal leading-6 font-sans'>{data.price}</h1>
    </div>
   
    <div className='bg-black w-full max-w-48 h-[200px] justify-between' >
    <img src={data.img} alt="logo"></img>
    </div>
    
 </div>

)
}

export default MenuComponent