import React from 'react'

const DisplayMultiQuestion = (props) => {
    let arr=props.item.Options;
    console.log("props",props)
    return (
        <div>
            <h3>{props.item.questionDes}</h3>
           {arr.map((item)=>{
               return (
                   <div>
           <input type="checkbox" id={item} />
           <label for={item}> {item}</label><br/>
           </div>
            )
           })}
           {/* {arr} */}
           <br/>
        </div>
    )
}

export default DisplayMultiQuestion
