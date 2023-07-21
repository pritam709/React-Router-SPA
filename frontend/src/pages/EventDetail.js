import { json ,useRouteLoaderData} from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  // const params = useParams();
 const data =useRouteLoaderData("event-details");
//  console.log(data);
  return (
    <>
    
     <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({request,params}){

  const id=params.eventId;

  const response = await fetch("http://localhost:8080/events/"+id)

  if(!response.ok){

    return json({message:"unable to find event details"},{status:500})


  }

      //  const responseData= await response.json()
      //  console.log(response);

           return response;

}