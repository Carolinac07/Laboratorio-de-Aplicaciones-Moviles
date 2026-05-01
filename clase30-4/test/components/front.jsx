export function Front ({children, srcImg}){
    return(

        <div>

            <h1>{children}</h1>
            <img src={srcImg}/>

        </div>
    )
}

