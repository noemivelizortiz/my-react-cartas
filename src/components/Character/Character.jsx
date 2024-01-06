import classes from "./Character.module.css";

const Character = (props) => {
  const { character } = props;
  return (
    <div
      className={`${classes.Container} ${
        character.gender === "Male" ? classes.Male : classes.Female
      }`}
    >
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.type}</p>
      <p>{character.gender}</p>
      <img
        src={character.image}
        alt={character.name}
        className={classes.Avatar}
      />
    </div>
  );
};

export default Character;