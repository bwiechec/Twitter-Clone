import './home.css'
import Sidebar from "../../components/sidebar/Sidebar"

import Timeline from "../../components/timeline/Timeline";

function Home(){

  return(
    <main className={"main-panel content-style"}>
      <div className={"main-panel-content content-style"}>
        <div className={"main-panel-content2 content-style"}>
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default Home;