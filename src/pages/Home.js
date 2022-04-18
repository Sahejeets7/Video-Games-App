import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useHistory, useLocation } from "react-router-dom";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";

const Home = ({ enableLoader, disableLoader }) => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const history = useHistory();
  //FETCH GAMES
  const dispatch = useDispatch();

  // Grab State
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );  

  useEffect(() => {
      dispatch(loadGames());
      enableLoader()
    } ,[dispatch])
  
  //make loader false
  useEffect(() => {
    if(popular.length > 0){
      disableLoader()
    }
  }, [popular])
  
  useEffect(() => {
    if(searched.length > 0){
      disableLoader()
    }
  }, [searched])
  
  const closeDetailPopup = (e) => {
    const element = e.target;
    if(e.key === "Escape" && element.href.includes("/game/")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  }

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show" onKeyDown={closeDetailPopup}>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game name={game.name} released={game.released} id={game.id} image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game name={game.name} released={game.released} id={game.id} image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game name={game.name} released={game.released} id={game.id} image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game name={game.name} released={game.released} id={game.id} image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
