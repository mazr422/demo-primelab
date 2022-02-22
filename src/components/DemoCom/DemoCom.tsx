import React, { FC, useState, useEffect } from "react";

import { ContainerDemoStyled } from "./DemoCom.styles";
import { setFlag } from "../../store/demo";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

interface DemoComProps {
  title: string;
  onClicked?: () => void;
}

const DemoCom: FC<DemoComProps> = ({ title, onClicked }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [numClicked, setNumClicked] = useState<number>(0);
  const handleClicked = () => {
    setNumClicked(numClicked + 1);
    onClicked && onClicked();
  };
  useEffect(() => {
    if (numClicked > 10) {
      dispatch(setFlag(true));
    }
  }, [numClicked]);

  return (
    <ContainerDemoStyled>
      <div className='title-demo'>This is Demo Component</div>
      <div>{numClicked}</div>
      <button className='button-demo' onClick={handleClicked}>
        {title}
      </button>
    </ContainerDemoStyled>
  );
};

export default DemoCom;
