import {IModal} from "../../utills/interfaceses";
import {FC, MouseEvent, useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styles from './GamepadCircle.module.scss';

import {CSSProperties} from 'react'

import bublic from '/src/assets/bublik.svg';
import account from '/src/assets/account-plus.svg';
import dbExport from '/src/assets/database-export.svg';
import dbImport from '/src/assets/database-import.svg';
import GamepadCircleCell from "./GamepadCircleCell/GamepadCircleCell";

type RotateDirection = 'UP' | 'RIGHT' | 'DOWN' | 'LEFT'
const initialDirections: Record<RotateDirection, number> = {
  DOWN: 0,
  LEFT: 90,
  UP: 180,
  RIGHT: 270,
}

interface IGamepadCircleProps extends IModal {

}

const GamepadCircle: FC<IGamepadCircleProps> = ({
  isOpen,
  toggleModal,
  }) => {

  const intersectRef = useRef<SVGSVGElement | null>(null);
  const intersectDirectionRef = useRef<number | null>(null);

  const rootClasses = [
    styles['modal']
  ];

  const handleImportData = () => {};
  const handleExportData = () => {};
  const handleAddContact = () => {};
  const handleEditContacts = () => {};

  const handleHoverGamepadCell = (rotateDirection: RotateDirection) => {
    if (intersectRef.current) {
      intersectRef.current!.style.rotate = `${initialDirections[rotateDirection]}deg`
      if (intersectRef.current!.style.visibility === 'hidden') {
        console.log('visible')
        intersectRef.current!.style.visibility = 'visible'
      }
    }
  }

  const handleVisabilityGamepadCell = () => {
    if (intersectRef.current) {
      intersectRef.current!.style.visibility = 'hidden'
    }
  }

  return (
    <>
      {isOpen && createPortal(
        <div
          className={styles['modal-background']}
          onClick={toggleModal}
        >
          <div
            className={styles['gamepad-circle']}
            onClick={(event) => {
              event.stopPropagation()
            }}
          >

            <div className={styles['gamepad-circle__grid']}
            >
              <svg className={styles['outer-circle']} width="436" height="436" viewBox="0 0 436 436" xmlns="http://www.w3.org/2000/svg">
                <circle r="218" cx="50%" cy="50%"/>
              </svg>
              <svg style={{visibility: 'hidden'}} ref={intersectRef} className={styles['intersect']} width="436" height="436" viewBox="0 0 436 436" xmlns="http://www.w3.org/2000/svg">
                <circle r="218" cx="50%" cy="50%"/>
              </svg>

              <GamepadCircleCell
                onMouseEnter={() => handleHoverGamepadCell("UP")}
                // 180
                onMouseLeave={handleVisabilityGamepadCell}
              >
                <span>Добавить<br/>пользователя</span>
              </GamepadCircleCell>

              <GamepadCircleCell
                onMouseEnter={() => handleHoverGamepadCell("RIGHT")}
                // 270
                onMouseLeave={handleVisabilityGamepadCell}
              >
                <span>Экспортировать<br/>контакты</span>
              </GamepadCircleCell>

              <GamepadCircleCell
                onMouseEnter={() => handleHoverGamepadCell("LEFT")}
                // 90
                onMouseLeave={handleVisabilityGamepadCell}
              >
                <span>Импортировать<br/>контакты</span>
              </GamepadCircleCell>

              <GamepadCircleCell
                onMouseEnter={() => handleHoverGamepadCell("DOWN")}
                // 360
                onMouseLeave={handleVisabilityGamepadCell}

              >
                <span>Редактировать<br/>список</span>
              </GamepadCircleCell>

            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default GamepadCircle;
