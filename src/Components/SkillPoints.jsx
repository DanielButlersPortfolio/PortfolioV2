import React from 'react';
import { darkModeContext, screenWithContext } from '../Context';

export default function SkillPoints(props) {
  const { darkMode } = React.useContext(darkModeContext);
  const { windowWidth } = React.useContext(screenWithContext);

  let coveredPoints = props.coveredPoints.split(',');

  let listObj = {
    list1: [],
    list2: [],
    list3: [],
    list4: [],
    list5: [],
  };

  if (windowWidth > 1000) {
    for (let index = 0; index < coveredPoints.length; ) {
      coveredPoints[index] &&
        listObj.list1.push(
          <li key={index} className={darkMode ? ' text-light' : ' text-dark'}>
            {coveredPoints[index]}
          </li>
        );
      index++;
      coveredPoints[index] &&
        listObj.list2.push(
          <li key={index} className={darkMode ? ' text-light' : ' text-dark'}>
            {coveredPoints[index]}
          </li>
        );
      index++;
      coveredPoints[index] &&
        listObj.list3.push(
          <li key={index} className={darkMode ? ' text-light' : ' text-dark'}>
            {coveredPoints[index]}
          </li>
        );
      index++;
      coveredPoints[index] &&
        listObj.list4.push(
          <li key={index} className={darkMode ? ' text-light' : ' text-dark'}>
            {coveredPoints[index]}
          </li>
        );
      index++;
      coveredPoints[index] &&
        listObj.list5.push(
          <li key={index} className={darkMode ? ' text-light' : ' text-dark'}>
            {coveredPoints[index]}
          </li>
        );
      index++;
    }
    return (
      <div className='skill-modal-skillPoints d-flex justify-content-space '>
        <ul>{listObj.list1}</ul>
        <ul>{listObj.list2}</ul>
        <ul>{listObj.list3}</ul>
        <ul>{listObj.list4}</ul>
        <ul>{listObj.list5}</ul>
      </div>
    );
  } else {
    for (let index = 0; index < coveredPoints.length; ) {
      coveredPoints[index] &&
        listObj.list1.push(
          <li key={index} className={darkMode ? ' text-light' : ' text-dark'}>
            {coveredPoints[index]}
          </li>
        );
      index++;
      coveredPoints[index] &&
        listObj.list2.push(
          <li key={index} className={darkMode ? ' text-light' : ' text-dark'}>
            {coveredPoints[index]}
          </li>
        );
      index++;
    }
    return (
      <div className='skill-modal-skillPoints d-flex justify-content-space '>
        <ul>{listObj.list1}</ul>
        <ul>{listObj.list2}</ul>
      </div>
    );
  }
}
