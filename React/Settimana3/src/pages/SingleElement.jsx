import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../providers/TodoProvider";


const SingleElement = () => {
  const { data } = useContext(TodoContext);
  const params = useParams();
  const element = data[params.id - 1];

  return (
    <>
      <span>{JSON.stringify(element, null, 2)}</span>
    </>
  )
}

export default SingleElement