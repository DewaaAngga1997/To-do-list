import "./App.css";
import PostsList from "./component/PostsList";
import MainHeader from "./component/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function openModalHandler() {
    setModalIsVisible(true);
  }

  function closeModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={openModalHandler} />
      <main>
        <PostsList
          newPosting={modalIsVisible}
          onStopPosting={closeModalHandler}
        />
      </main>
    </>
  );
}

export default App;
