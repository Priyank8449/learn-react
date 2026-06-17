function Header(){
    return (

    
    <h4>i  am a header </h4>
    );
}


export function InputField (props){
    return (
        <>
        <input ref={props.ref} type="text" />
        </>
    )
}

export default Header; 