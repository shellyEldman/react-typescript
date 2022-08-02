import "./App.css";
import { Hello } from "./components/Hello";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Continer";

function App() {
  const personName = {
    first: "Shelly",
    last: "Eldman",
  };

  const nameList = [
    {
      first: "Shelly",
      last: "Eldman",
    },
    {
      first: "Itai",
      last: "Peretz",
    },
    {
      first: "Bonny",
      last: "Bonanza",
    },
  ];

  return (
    <div className="App">
      <Hello name="Shelly" massageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Some Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Paris!</Heading>
      </Oscar>
      <Hello name="Itai" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log("clickkk", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log("event", event)} />
      <Container styles={{ color: "blue" }} />
    </div>
  );
}

export default App;
