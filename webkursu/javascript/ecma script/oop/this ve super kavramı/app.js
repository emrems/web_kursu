class Person{
    constructor(firstname,lastname,salary){
        this.firstname=firstname;
        this.lastname=lastname;
        this.salary=salary;
    }

    writeInfo(){
        console.log(this.firstname , this.lastname, this.salary);
    }
    
   
}

class Student extends Person{
    constructor(ad,soyad,maaş){//burdan değerlerimizi alıcaz
        super(ad,soyad,maaş);// aldıgımız degerleri ust sınıfa gonderecgiz

    }
    write(){
        super.writeInfo();//write fonksiyonu üzerinden writeInfo fonksiyonuna geçiş yapacağız
    }

}

class Engineer extends Person{
    constructor(firstname,lastname,salary){
        super(firstname,lastname,salary);
    }

    write(){
        super.writeInfo();
    }
}

const student1 = new Student("emre","almamış",51212);
student1.write();
const engineer = new Engineer("ali","çelik",65656);
engineer.write();
