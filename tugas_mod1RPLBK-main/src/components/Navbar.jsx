import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";

const Nav = styled.nav`
  background: #302c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  margin-bottom: 20px; /* Add margin-bottom as desired */
`;

export default function Navbar() {
  return (
    <Nav>
      <div>
        <TextInput />
        <Button>Search</Button>
      </div>
      <span style={{ fontWeight: "bold" }}>Kelompok 17</span>
      
    </Nav>
  );
}
