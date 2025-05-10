// *****
// *****
// *****
// *****
// *****

// for(var j=1;j<=5;j++)
// {
//     for(var i=1;i<=5;i++)
//     {
//             process.stdout.write("*") 
//     }
//     console.log();
       
// }

// *
// **
// ***
// ****
// *****

// for(var i=1;i<=5;i++)
// {
//     for(var j=1;j<=i;j++)
//     {
//         process.stdout.write("*") 
//     }
//     console.log();  
// }

// var startcount = 1;
// for(var i=1;i<=5;i++)
// {
//         for(var j=1;j<=startcount;j++)
//         {
//             process.stdout.write("*") 
//         }
//         console.log();  
//         startcount+=1
// }


// *****
// ****
// ***
// **
// *

// var lines = 5
// var startcount = lines;
// for(var i=1;i<=lines;i++)
// {
//         for(var j=1;j<=startcount;j++)
//         {
//             process.stdout.write("*") 
//         }
//         console.log();  
//         startcount-=1
// }

//     *
//    **
//   ***
//  ****
// *****

// var lines  =5;
// var spacecount = lines-1
// var startcount = 1;
// for(var i=1;i<=5;i++)
// {
//         for(var k=1;k<=spacecount;k++)
//         {
//             process.stdout.write(" ") 
//         }
//         for(var j=1;j<=startcount;j++)
//         {
//             process.stdout.write("*") 
//         }
//         console.log();  
//         startcount+=1
//         spacecount-=1
// }

//   *
//  * *
// * * *

// var lines  =5;
// var spacecount = lines-1
// var startcount = 1;
// for(var i=1;i<=5;i++)
// {
//         for(var k=1;k<=spacecount;k++)
//         {
//             process.stdout.write(" ") 
//         }
//         for(var j=1;j<=startcount;j++)
//         {
//             process.stdout.write(" *") 
//         }
//         console.log();  
//         startcount+=1
//         spacecount-=1
// }

//      *
//     ***
//    *****
//   *******
//  *********

// var lines  =7;
// var spacecount = lines-1
// var startcount = 1;
// for(var i=1;i<=lines;i++)
// {
//         for(var k=1;k<=spacecount;k++)
//         {
//             process.stdout.write(" ") 
//         }
//         for(var j=1;j<=startcount;j++)
//         {
//             process.stdout.write("*") 
//         }
//         console.log();  
//         startcount+=2
//         spacecount-=1
// }

//     *
//    * *
//   * * *
//  * * * *
//   * * *
//    * *
//     *


// var lines  =9;
// var spacecount = lines-1
// var startcount = 1;
// var mid = Math.ceil(lines/2)
// for(var i=1;i<=lines;i++)
// {
//         for(var k=1;k<=spacecount;k++)
//         {
//             process.stdout.write(" ") 
//         }
//         for(var j=1;j<=startcount;j++)
//         {
//             process.stdout.write("* ") 
//         }
//         console.log();  
//         if(i<mid)
//         {
//             startcount+=1
//             spacecount-=1
//         }
//         else{
//             startcount-=1
//             spacecount+=1
//         }
     
      
// }


//     *
//    * *
//   *   *
//  *     *
//   *   *
//    * *
//     *


// var lines  =9;
// var spacecount = lines-1
// var startcount = 1;
// var mid = Math.ceil(lines/2)
// for(var i=1;i<=lines;i++)
// {
//         for(var k=1;k<=spacecount;k++)
//         {
//             process.stdout.write(" ") 
//         }
//         for(var j=1;j<=startcount;j++)
//         {
//             if(j==1 || j==startcount){
//                 process.stdout.write("* ") 
//             }
//             else{
//                 process.stdout.write("  ") 
//             }
            
//         }
//         console.log();  
//         if(i<mid)
//         {
//             startcount+=1
//             spacecount-=1
//         }
//         else{
//             startcount-=1
//             spacecount+=1
//         }     
// }

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15


// var lines=5
// var startcount = 1;
// var a = 1
// for(var i=1;i<=5;i++)
// {       
        
//         for(var j=1;j<=startcount;j++)
//         {   
//             process.stdout.write(a+"") 
//             a+=1;
//         }

//         console.log();  
//         startcount+=1
// }


// 1
// 12
// 123
// 1234
// 12345

// var lines=5
// var startcount = 1;

// for(var i=1;i<=5;i++)
// {       
        
//         for(var j=1;j<=startcount;j++)
//         {   
//             process.stdout.write(j+"") 
//         }
//         console.log();  
//         startcount+=1
// }


// 0
// 10
// 010
// 1010
// 01010


// var lines=5
// var startcount = 1;

// for(var i=1;i<=5;i++)
// {       
        
//         for(var j=1;j<=startcount;j++)
//         {   
//             if((i+j)%2==0)
//             {
//                 process.stdout.write("0") 
//             }
//             else{
//                 process.stdout.write("1") 
//             }
//         }
//         console.log();  
//         startcount+=1
// }


// *      *
// * *  * *
// *  *   *
// * *  * *
// *      *

//   *
// *** *
// ***   *
// *** *
//   *
   
// *****
//   *
//   * 
//   * 

// *   *
// *   *
// *****
// *   *
// *   *

// A 
// BC 
// DEF 
// GHIJ
// KLMNO


// var lines=5
// var startcount = 1;
// var a = 65
// for(var i=1;i<=5;i++)
// {       
        
//         for(var j=1;j<=startcount;j++)
//         {   
//             k = String.fromCharCode(a)
//             process.stdout.write(k+"") 
//             a+=1;
//         }

//         console.log();  
//         startcount+=1
// }

//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1


//prime

// var num = 13
// var flag = 0
// for(var i=2;i<num;i++)
// {
//     if(num%i==0)
//     {
//         flag=1
//         break
//     }
// }

// if(flag==0)
// {
//     console.log("prime number");
    
// }
// else{
//     console.log("Not prime");
    
// }

//153


// var n = 8208;
// var number = n;
// var count = 0
// while(n!=0)
// {
//     n%10
//     n= Math.floor(n/10)
//     count+=1
// }

// var temp = number
// var sum = 0
// while(number!=0)
// {
//     var rem = number%10
//     //sum += Math.pow(rem,count)
//     var mul = 1;
//     for(var i=1;i<=count;i++)
//     {
//         mul*=rem
//     }
//     sum +=mul
//     number = Math.floor(number/10) 
// }
// if(temp==sum)
// {
//     console.log("Armstrong");
// }
// else{
//     console.log("not armstrong"); 
// }




