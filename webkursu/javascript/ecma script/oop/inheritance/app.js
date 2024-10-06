class Person{
    firstname = "emre";
    write(){
        console.log(this.firstname);
    }

   
}

class Student extends Person{
    write(){
        
        console.log(`bu person sınıfından geldi ${this.firstname }`)
    }
        
}

const student = new  Student();
student.write();