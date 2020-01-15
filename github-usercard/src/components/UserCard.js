import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 500px;
//   height: 275px;
//   font-size: 25px;
//   color: black;
//   background: lightblue;
//   margin: 10px;
//   padding: 0;
//   border-radius: 20px;
//   text-align: center;
// `;

export const UserCard = props => {
  return (
    // <Card>
    <div>
      <h3>{props.username}</h3>
    </div>
    // </Card>
  );
};
