

const getStudent = (rollno)=>{
    return new Promise((resolve,reject)=>{
        students = [10,20,30,40,50]
        isExist =  students.find(ele=>{
            return ele==rollno
        })

        if(isExist!=undefined)
            {
                resolve(isExist)
            }
            else
            {
                reject("Student with rollno not available")
            }
    })  
}


const studentDetails = (rollno)=>{

    return new Promise((resolve,reject)=>{
        students = [10,20,30,40]
         isExist =  students.find(ele=>{
        return ele==rollno
    })
    if(isExist!=undefined)
        {
            resolve("Student name : Xyz and Email : xyz@gmail.com")
        }
        else
        {
            reject("Student with rollno not available in student details")
        }
    })
}


// getStudent(10).then(data=>{
//    return studentDetails(data)
// }).then(resp=>{
//     console.log(resp);   
// }).catch(err=>{
//     console.log(err);
// })

const call = async ()=>{
    try{
        const data = await getStudent(100)
        const resp = await studentDetails(data)
        console.log(resp);
    }catch(err){
        console.log(err);
        
    }
    
    
}

call()
