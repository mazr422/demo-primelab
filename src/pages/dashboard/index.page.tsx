import React from "react";

import DemoCom from "../../components/DemoCom";
import { useIsOverClickedNumber } from "../../hooks/demo/useDemo";
import {
  DashboardContainerStyled,
  DashboardContentStyled,
  DashboardIsOverStyled,
} from "./index.styles";

const Dashboard = () => {
  const isOver = useIsOverClickedNumber();
  return (
    <DashboardContainerStyled>
      <DashboardContentStyled>
        <DemoCom
          title='Demo Button'
          onClicked={() => console.log("Demo Button Clicked!!!")}
        />
        {isOver && (
          <DashboardIsOverStyled>Clicked Number is Over!</DashboardIsOverStyled>
        )}
      </DashboardContentStyled>
    </DashboardContainerStyled>
  );
};

export default Dashboard;
