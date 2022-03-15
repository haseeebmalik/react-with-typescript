type GreetProps={

    name: string
    //question mark show that it may be optional
    messageCount?: number
    isLoggedIn:boolean
}

export const Greet=(props:GreetProps)=>{
    return (
        <div>
            <h2>
               {
               props.isLoggedIn? `welcome ${props.name}! You have ${props.messageCount} unread messages .`:'Welcome Guest' }
                
     
      </h2>
        </div>
    )
}