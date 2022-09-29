import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({select}) {
    const[selected, setSelected] = useState(10);

    //get feedback from FeedbackContext
    const {feedbackEdit} = useContext(FeedbackContext);

    useEffect(()=>{
      setSelected(feedbackEdit.item.rating);
    },[feedbackEdit])

    const handleChange = (e) =>{
        //set e to number by adding +
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value)
    }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect