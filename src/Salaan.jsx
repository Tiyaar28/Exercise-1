const Salaan = ({currentUser, role, age}) => {
    
    return (
        <>
    <h2>Hello, {currentUser}</h2>
    <span>Your role is : {role}</span>
    <span>Your age is : {age}</span>
    </>
    )
}

export default Salaan;