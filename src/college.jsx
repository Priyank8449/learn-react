function College2({college}){
    return (
        <div style={{backgroundColor:"#ccc",padding:'10px',borderRadius:'10px',margin:'10px',width:'500px',boxShadow:'3px 5px 10px black'}}>
             <h1>name:{college.name}</h1>
                        <ul>
                            <li>
                                <h3>city:{college.city}</h3>
                            </li>
                            <li>
                                <h3>city:{college.website}</h3>
                            </li>

                            <li>
                                <h3>students</h3>
                                {
                                college.student.map((student)=>(
                                    
                                    <ul>
                                        <li>name:{student.name }</li>
                                    </ul>
                                   
                                ))
                            }
                            </li>
                        </ul>
        </div>
    )
}

export default College2;