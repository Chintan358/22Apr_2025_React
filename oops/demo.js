

// const abc = ()=>{
//     console.log("calling");
    
// }

// class Demo
// {
//     a = 10

//     constructor(number){
//         console.log("constructor calling..."+number);  
//     }

   
//     abc()
//     {
//         console.log("Hello");
//         console.log(this.a);
        
//     }  
// }


// d1 = new Demo()
// d1.a = 20
// d1.abc()

// d2 = new Demo(10)
// d2.abc()



class Student{

    
    constructor(id,name="abc",email="abc@gmail.com")
    {
        this.id=id
        this.name = name
        this.email = email    
    }
    display()
    {
        console.log(this.id+" "+this.name+" "+this.email);
        
    }

    static show()
    {
        console.log("Show method calling...");     
    }
}


Student.show()


s  =new Student(20,"sbc","harsh@gmail.com")
s.display()


s1 = new Student(20,"Kishan","kishan@gmail.com")
s1.display()

// console.log(Student.a);

