import Card from './Card'; 

function Tours({tours,removeTour,notremoveTour}){
  return(
    <div className='container'>
        <div>
               <h2 className='title'>Plan with Love And Family</h2>
        </div>
        <div className='cards'>
            {
                tours.map((tour) =>{
                 return <Card {...tour} removeTour={removeTour}  notremoveTour={notremoveTour} ></Card>  
                }
                )
            }
        </div>
     
    </div>
  );
}

export default Tours;