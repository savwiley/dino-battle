import { useState } from "react";
import trianglify from 'trianglify';
import LevelButton from "../Icons/LevelButton";
import RulesButton from "../Icons/RulesButton";
import { App, AppHeader, AppLink, AppExtras } from './styled';

const Home = () => {
  const [pattern] = useState(
    trianglify({
      cellSize: 200,
      height: 3840,
      width: 2160,
      xColors: 'YlGn',
      colorFunction: trianglify.colorFunctions.shadows(),
    })
      .toSVGTree()
      .toString()
  );
  const [ rulesShown, setRulesShown ] = useState(false);

  const rulesClick = () => {
    setRulesShown(true);
  };

  return (
    <App background={pattern}>
      {rulesShown && <Rules setShown={setRulesShown} />}
      <AppHeader>
        <p className="title">
          Dino-War
        </p>
        <AppLink
          href="#"
          title="New Game"
        >
          New Game
        </AppLink>

        <AppExtras>
          <LevelButton />
          <RulesButton onClick={rulesClick} />
        </AppExtras>
      </AppHeader>
    </App>
  );
};

export default Home;