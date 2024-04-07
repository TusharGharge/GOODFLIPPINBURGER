import MenuComponent from '../Components/Menucompnent';
const borderactive="flex ps-2 justify-between border-dashed border-r-2 border-[#ec2449] px-4 mb-7 font-poppins justify-between";
const borderinactive="flex flex-row ps-2 font-poppins ps-4 justify-between justify-item-end";

function MenuDeatail({title,colordata,data}){
return (
    <>
       <div className='flex justify-center pt-18 pl-10'>
                <p className='text-[#ffffff] text-center text-5xl my-9 font-poppins'>{title}</p>
                <p className={`h-8 w-8 ${colordata} border-solid border-2 text-[#ffffff] my-12 pt-2 mx-10 font-poppins`}></p>
            </div>
            <div className='container ml-auto '>
                <div className=' grid grid-cols-2 justify-between'>
                {data.map((Menudata,index)=>{return (<MenuComponent key={index} data={Menudata} color={`${index%2===1 ? borderinactive : borderactive}`}></MenuComponent>);})}:
                
             </div>
           </div></>
)
}

export default MenuDeatail;