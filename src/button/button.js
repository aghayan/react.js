



export function Custom({text,background,color}){
    return(
        <div>
            <button  style={{background:background? background : 'purple', color:'white', height:'35px',width:'80px',borderRadius:'20px'}}>{text?text:text='Button'} </button>
        </div>
    )
};

