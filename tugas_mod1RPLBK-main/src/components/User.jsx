import styled from "styled-components";

const Div = styled.div`
  background: #302c34;
  max-width: 500px;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  margin: 50px;
  line-height: 1.5;
  font-size: 15pt;
`;

export default function User({ nama, nim, email, github}) {
  return (
    <Div className="user">
      <div className="nama">{nama}</div>
      <div className="nim">{nim}</div>
      <div className="email">{email}</div>
      <div className="github username">{github}</div>
    </Div>
  );
}
