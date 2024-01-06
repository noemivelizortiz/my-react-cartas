import classes from "./ListCharacters.module.css";
import Character from "../Character/Character";

const ListCharacters = (props) => {
  const { listResult, searchLowerCase } = props;
  return (
    <div className={classes.Container}>
      {listResult.map((character) => {
        const firstName = character.name.toLowerCase();
        if (firstName.includes(searchLowerCase)) {
          return <Character character={character} key={character.id} />;
        }
        return null;
      })}
    </div>
  );
};

export default ListCharacters;