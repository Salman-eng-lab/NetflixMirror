import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    Route,
    Routes,
    useNavigate
} from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { deleteUserData, setUserData } from "../../Store/Slices/userSlice";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Search from "../Search/Search";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, displayName, email, emailVerified } = user;
        dispatch(
          setUserData({ accessToken, displayName, email, emailVerified })
        );
        navigate("/Home");
      } else {
        dispatch(deleteUserData());
        navigate("/");
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  );
};

export default AppRoutes;