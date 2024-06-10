
import { useNavigate } from "react-router-dom";

function Profile({ user }) {

  const navigate = useNavigate();

  const click = () => {
    navigate(-1);
  }

  return (
    <>
      <button onClick={() => click()}>Click</button>
    </>
  );
};

export default Profile;
