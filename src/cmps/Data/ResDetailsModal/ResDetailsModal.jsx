import React, { useContext, useEffect, useState } from "react";
import { utilService } from "services/utilService";
import { PopoverHeader } from "cmps/shared/PopoverHeader";
import styled from "styled-components";
import { layouts } from "cmps/shared/styles/mixin";
import { store } from "store/store";
import { excelDataService } from "services/excelDataService";

export const ResDetailsModal = React.forwardRef(({ pos, close, item }, ref) => {
  const { state } = useContext(store);
  const { excels } = state.excelReducer;
  const [headerLeft, setHeaderLeft] = useState(0);

  useEffect(() => {
    excelDataService.getCorrelatedCells(excels, item);
  }, []);

  const onScroll = ({ target }) => {
    setHeaderLeft(target.scrollLeft);
  };

  return (
    <S.DetailsModal onScroll={onScroll} ref={ref}>
      <PopoverHeader left={headerLeft} onClose={close}>
        {item}
      </PopoverHeader>
      <div className="modal-body">
        <section className="correlated-values">
          <h3 className="correlated-values-title">Correlated Values:</h3>
          <div className="grid correlated-values-grid">
            <div className="header">bla</div>
            <div className="header">bla</div>
            <div className="header">bla</div>
            <div className="header">bla</div>
            <div className="cell">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quis?
            </div>
            <div className="cell">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quis?
            </div>
            <div className="cell">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quis?
            </div>
            <div className="cell">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quis?
            </div>
          </div>
        </section>
      </div>
    </S.DetailsModal>
  );
});

const S = {};

S.DetailsModal = styled.div`
  background-color: #fff;

  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 6;
  width: 80vw;
  transform: translate(-50%, -50%);
  overflow-x: auto;
  .modal-body {
    ${layouts.modal}
    margin-top: 100px;
  }

  .correlated-values {
    &-title {
      text-align: start;
      margin-bottom: 20px;
    }
    &-grid {
      grid-template-columns: repeat(4, 200px);
      grid-template-rows: 100px 300px;
      grid-column-gap: 20px;
    }
  }
`;
