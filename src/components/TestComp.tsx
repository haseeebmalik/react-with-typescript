

type TestProps={
    stringNames:(string | number)[]
}

export const TestComp=(props:TestProps)=>{
    return (
        <div>
            {props.stringNames.map((val,i)=>{
              return(
                  <h1 key={i}>
                      {val}
                  </h1>
              )
            })}
        </div>
    )
}