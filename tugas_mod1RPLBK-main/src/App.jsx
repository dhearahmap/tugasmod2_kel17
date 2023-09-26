import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  const data = [
    {
      nama: "Daffa Maulana Wisesa ",
      nim: "21120120140057",
      email: "daffamaulanawisesa@gmail.com",
      github: "github : dwiseee",
    },
    {
      nama: "Dhea Rahma Putri",
      nim: "21120120140164",
      email: "dhearhmpr@gmail.com",
      github: "github : dhearahmap",
    },
    {
      nama: "Fadel Rizky Nurfitanto",
      nim: "21120120140098",
      email: "fadelrizky11@gmail.com",
      github: "github : fadelrizky11",
    },
    {
      nama: "Muhammad Raihan Maulana ",
      nim: "21120120120027",
      email: "raihanmaulana@gmail.com",
      github: "github : raihanmaulana",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="flex-container"
        style={{ 
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh"
          
        }}
      >
        {data.map(d => (
          <User 
          key={d.nim} 
          nama={d.nama} 
          nim={d.nim} 
          email={d.email} 
          github={d.github} />
        ))}
      </div>
    </>
  );
}

export default App;
