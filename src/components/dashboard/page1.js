import { useHistory } from "react-router-dom";

function Page1() {
  const history = useHistory();

  function handleClickLogin() {
    history.push(`/todo`);
  }

  return (
    <div>
      <div>Click button login redirect todo page</div>
      <button onClick={handleClickLogin}>Login</button>
    </div>
  );
}

export default Page1;
