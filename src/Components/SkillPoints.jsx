export default function SkillPoints(props) {
  let listObj = {
    list1: [],
    list2: [],
    list3: [],
    list4: [],
    list5: [],
  };

  if (props.windowWidth > 1000) {
    for (let index = 0; index < props.ListOfPoints.length; ) {
      props.ListOfPoints[index] && listObj.list1.push(<li key={index}>{props.ListOfPoints[index]}</li>);
      index++;
      props.ListOfPoints[index] && listObj.list2.push(<li key={index}>{props.ListOfPoints[index]}</li>);
      index++;
      props.ListOfPoints[index] && listObj.list3.push(<li key={index}>{props.ListOfPoints[index]}</li>);
      index++;
      props.ListOfPoints[index] && listObj.list4.push(<li key={index}>{props.ListOfPoints[index]}</li>);
      index++;
      props.ListOfPoints[index] && listObj.list5.push(<li key={index}>{props.ListOfPoints[index]}</li>);
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
    for (let index = 0; index < props.ListOfPoints.length; ) {
      props.ListOfPoints[index] && listObj.list1.push(<li key={index}>{props.ListOfPoints[index]}</li>);
      index++;
      props.ListOfPoints[index] && listObj.list2.push(<li key={index}>{props.ListOfPoints[index]}</li>);
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
