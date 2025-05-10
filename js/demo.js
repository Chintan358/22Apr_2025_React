



const getStudent = (rollno,callback)=>{

    students = [10,20,30,40,50]
    isExist =  students.find(ele=>{
        return ele==rollno
    })
    
    if(isExist!=undefined)
    {
        callback(isExist)
    }
    else
    {
        callback(undefined,"Student with rollno not available")
    }
}


const studentDetails = (rollno,callback)=>{

    students = [10,20,30,40,50]
    isExist =  students.find(ele=>{
        return ele==rollno
    })
    if(isExist!=undefined)
        {
            callback("Student name : Xyz and Email : xyz@gmail.com")
        }
        else
        {
            callback(undefined,"Student with rollno not available")
        }

}

getStudent(100,(data,err)=>{
  
    if(err){
         console.log(err);     
    }
    else
    {
        studentDetails(data,(data1,err1)=>{
            if(err1)
            {
                console.log(err1);
                
            }
            else{
                console.log(data1);
                
            }
        })   
    }
})