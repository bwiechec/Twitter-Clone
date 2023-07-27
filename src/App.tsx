import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Banner from "./components/banner/Banner";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import NoPage from "./pages/noPage/NoPage";
import Messages from "./pages/messages/Messages";
import Notifications from "./pages/notifications/Notifications";
import Lists from "./pages/lists/Lists";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Profile from "./pages/profile/profile";
import More from "./pages/more/More";

function App() {
  return (
    <div className={"base-content content-style"}>
      <Banner />
      <BrowserRouter basename="/Twitter-Clone/">
        <Routes>
          <Route path={"/Twitter-Clone/"} element={<Home />} />
          <Route path={"/Twitter-Clone/#/home"} element={<Home />} />
          <Route path="/Twitter-Clone/#/explore" element={<Explore />} />
          <Route path="/Twitter-Clone/#/Notifications" element={<Notifications />} />
          <Route path="/Twitter-Clone/#/Messages" element={<Messages />} />
          <Route path="/Twitter-Clone/#/Lists" element={<Lists />} />
          <Route path="/Twitter-Clone/#/Bookmarks" element={<Bookmarks />} />
          <Route path="/Twitter-Clone/#/Profile" element={<Profile />} />
          <Route path="/Twitter-Clone/#/More" element={<More />} />
          <Route path="/Twitter-Clone/#/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
