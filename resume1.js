const skillButoon=document.querySelector(".skill-button");
const Alert=document.querySelector(".alert");
var skillArray=[];
var fullInfo={};
const skillInput=document.querySelector("#skill");
const generateButton=document.querySelector("#generate-cv");

// personal variables 
const fname=document.querySelector("#fname");
const lname=document.querySelector("#lname");
const email=document.querySelector("#email");
const number=document.querySelector("#number");
const address=document.querySelector("#address");


// links variable 
const fblink=document.querySelector("#fblink");
const glink=document.querySelector("#glink");
const ilink=document.querySelector("#ilink");
const llink=document.querySelector("#llink");

// qualification variables 

const passingYear10=document.querySelector("#tenthyear");
const passingYear12=document.querySelector("#twelthyear");

const percentage10=document.querySelector("#tenthpercentage");
const percentage12=document.querySelector("#twelthpercentage");


skillButoon.addEventListener('click',()=>{

   if(skillInput.value.trim()!='')
   {
      Alert.style.display='block';
      skillArray.push(skillInput.value);
      skillInput.value='';
   }
   else{
       window.alert("Enter Value");
   }
   
    
});

const cvForm=document.querySelector(".cv-form");
const cvTempelate=document.querySelector(".cv-template");
const linky=document.querySelector(".linky");
const tenthTeplate=document.querySelector(".tenth-template");
const twelthTemplate=document.querySelector(".twelth-template");


generateButton.addEventListener('click',()=>{
    if(fname.value && lname.value && email.value && number.value &&fblink.value && glink.value && ilink.value && llink.value && passingYear10.value && passingYear12.value && percentage10.value && percentage12.value && address.value)
    {
        fullInfo={Name:fname.value , Lname: lname.value , email: email.value , number:number.value ,fblink:fblink.value , glink: glink.value ,ilink: ilink.value ,llink: llink.value , passingYear10:passingYear10.value , passingYear12:passingYear12.value ,percentage10: percentage10.value , percentage12:percentage12.value,address:address.value};

        cvForm.style.display='none';
        cvTempelate.style.display='block';

        const skillList=document.querySelector('.skill-list');
        
        skillArray.map((ele)=>{
            var div=`<h6 style="font-weight: 900; font-size: 13px; " class="text-dark text-capitalize"><i class="fas fa-spider "> ${ele}</i></h6>`;
            skillList.innerHTML+=div;
        });
        document.querySelector(".fname-template").innerHTML=`${fullInfo.Name}`;
        document.querySelector(".lname-template").innerHTML=`${fullInfo.Lname}`;
        document.querySelector(".add-template").innerHTML=`${fullInfo.address}`;
        document.querySelector(".number-template").innerHTML=`${fullInfo.number}`;
        document.querySelector(".email-template").innerHTML=`${fullInfo.email}`;
        var div2=`<a href=${fullInfo.ilink} style="line-height: .9rem; font-size: 14px;"><i class="fab fa-instagram mx-2"></i>Instagram</a>
        <br>
    <a href=${fullInfo.glink} style="line-height: .9rem; font-size: 14px;"><i class="fab fa-github mx-2"></i>Github</a>
        <br>
    <a href=${fullInfo.fblink} style="line-height: .9rem; font-size: 14px;"><i class="fab fa-facebook mx-2"></i>Facebook</a>
        <br>
    <a href=${fullInfo.llink} style="line-height: .9rem; font-size: 14px;"><i class="fab fa-linkedin mx-2"></i>Linkedin</a>`;
    linky.innerHTML=div2;

    tenthTeplate.innerHTML=`Pass 10th in ${fullInfo.passingYear10} Year With ${fullInfo.percentage10} Percentage/CGPA`; 

    tenthTeplate.innerHTML=`Pass 12th in ${fullInfo.passingYear12} Year With ${fullInfo.percentage12} Percentage/CGPA`; 

        
    }
    else{
        alert("Enter All Details !  Please To Make Your Resume Better :) ");
    }

    
})

