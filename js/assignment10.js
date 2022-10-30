const section = document.querySelector('section');
const json= [
    
        
            {
                "first name" : "Sam",
                "department" : "Tech",
                "designation" : "Manager",
                salary: 40000,
                raise_eligible: true,
                  
              },
              {
                  "first name" : "Mary",
                  "department" : "Finance",
                  "designation" : "Trainee",
                  salary: 18500,
                  raise_eligible: true,
              },

              {
                  "first name" : "Bill",
                  "department" : "HR",
                  "designation" : "Executive",
                  salary: 21200 ,
                  raise_eligible: false, 
              }
            

    

  ]

  
console.log(json); //problem 1 


const section2 = document.querySelector('section');
const json2= [
    {
        "companyName" : "Tech Stars",
        "website" : "www.techstars.site",
        "employees" : [
            {
                "first name" : "Sam",
                "department" : "Tech",
                "designation" : "Manager",
                salary: 40000,
                raise_eligible: true,
                  
              },
              {
                  "first name" : "Mary",
                  "department" : "Finance",
                  "designation" : "Trainee",
                  salary: 18500,
                  raise_eligible: true,
              },

              {
                  "first name" : "Bill",
                  "department" : "HR",
                  "designation" : "Executive",
                  salary: 21200 ,
                  raise_eligible: false, 
              }
        


          ]
    
      }
    

  ]

  

  console.log(json2); //problem



 let anna = {"first name" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary": 25600,
    "raise_eligible": false}

    json2['employees'].push(anna);


    cosolelog(json2);  //problem 3
    


    const section4 = document.querySelector('section');
    const json4= [
        {
            "companyName" : "Tech Stars",
            "website" : "www.techstars.site",
            "employees" : [
                {
                    "first name" : "Sam",
                    "department" : "Tech",
                    "designation" : "Manager",
                    "salary": 40000,
                    "raise_eligible": true,
                      
                  },
                  {
                      "first name" : "Mary",
                      "department" : "Finance",
                      "designation" : "Trainee",
                      "salary": 18500,
                      "raise_eligible": true,
                  },
    
                  {
                      "first name" : "Bill",
                      "department" : "HR",
                      "designation" : "Executive",
                      "salary": 21200 ,
                      "raise_eligible": false, 
                  },
                
                  {
                    "first name" : "Anna",
                    "department" : "Tech",
                    "designation" : "Executive",
                    "salary": 25600,
                    "raise_eligible": false,
                }
    
    
              ]
        
          }
        
    
      ]  
      
      
console.log(json4)


  
  let indSalary = 0;
      
      for(let i = 0; i< json4.employees.length; i++)
      {
            indSalary+=json4.employees[i]['salary'];
      }


console.log(indSalary);  //problem 4




for(let i =0; i <json4.employees.length; i++)
{
    if (json4.employees[i]['raise_eligible'] == true) {
       
    json4.employees[i]['salary'] += (json4.employees[i]['raise_eligible']*0.1);
        
    json.employees[i]['raise_eligible'] = false;
    }

}

console.log(json4); //problem 5


/*let workingHome= ['Anna','Sam']

for(let i =0; i <json4.employees.length; i++)
{  
    let wfh= false;
    let name= json4.employees[i]['first name']

    for(let j =0;j <workingHome.length[j]['first name'];j++)
    {
       
    }

    if(wfh==true){
        employees[i]['wfh']=true;

    }


}
*/


const json5= [
    {
        "companyName" : "Tech Stars",
        "website" : "www.techstars.site",
        "employees" : [
            {
                "first name" : "Sam",
                "department" : "Tech",
                "designation" : "Manager",
                "salary": 40000,
                "raise_eligible": true,
                "Working from Home":false,
                  
              },
              {
                  "first name" : "Mary",
                  "department" : "Finance",
                  "designation" : "Trainee",
                  "salary": 18500,
                  "raise_eligible": true,
                  "Working from Home":false,
              },

              {
                  "first name" : "Bill",
                  "department" : "HR",
                  "designation" : "Executive",
                  "salary": 21200 ,
                  "raise_eligible": false, 
                  "Working from Home":false,
              },
            
              {
                "first name" : "Anna",
                "department" : "Tech",
                "designation" : "Executive",
                "salary": 25600,
                "raise_eligible": false,
                "Working from Home":false,
            }


          ]
    
      }
    

  ]  

for(let i=0;i<4;i++){

    let wfh= false;
    if(json5.employees[i]['firstname']=='Anna'|| json5.employees[i]['firstname']=='Sam'){
        wfh=true;
    }
    else{
       json5.employees[i]["Working from Home"]=false;
    }
}
console.log(json5); //problem 6




























