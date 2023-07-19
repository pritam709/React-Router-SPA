import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent"

const Error=()=>{
    const error= useRouteError();

    let title ="an error occured"
    let message="somthing went wrong"

    if(error.status===500){
        message=error.data.message;
    }
    if(error.status===404){
        title="not found"
        message="events can not be found at requested url";
    }

    return <PageContent title={title}><p>{message}</p></PageContent>
}
export default Error;