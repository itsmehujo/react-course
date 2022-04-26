import React, { FC } from 'react';
import s from './Swatch.module.css';

type AvailableChoices = 'color' | 'size' | string;

interface Props {
  name: AvailableChoices
  val: string
  onClick: () => void
  dataSelected: boolean
}

const Swatch: FC<Props> = ({ name, val, onClick, dataSelected }) => {
  return (<>
    <button
      className={s.option}
      onClick={onClick}
      style={name === 'color' ? { backgroundColor: val } : {}}
      data-selected={dataSelected}
    >{name === 'size' ? val : ''}</button>
  </>)
}

export default Swatch;