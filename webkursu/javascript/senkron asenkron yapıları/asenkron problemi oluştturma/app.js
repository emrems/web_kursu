//ASENKRON PROBLEMİ

const users = [
    {
        userId:5,
        post:"emre post1"
    },
    {
        userId:5,
        post:"emre post 2"
    },
    {
        userId:5,
        post:"emre post 3"
    },
    {
        userId:6,
        post:"emre post 1"
    }

]

//!örnek userıId'si 5 olanın postlarını getir
function getUserId(callback){
    
    setTimeout(() => {//servise gidip userId 5 olarak aldım ve bu 1 sn sürdü
        let userId =5;
        callback(userId);
    }, 1000);
}

function getPostByUserId(userId){
    
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.userId === userId){
                console.log(user.post);
            }
        })

    },500)//0.5 sn surecek

}

getUserId(getPostByUserId);

//burada bir çıktı alamayacağız çünkü getPostByUserId fonk. daha önce çalışacak ama ilk önce getUserId fonk. çalışıp id yakalamam gerekli 