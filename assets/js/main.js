
const alldata=[
    {mainheader:'Welcome To Our Website'},
    {mainparaghraph:'please insert your favorite movie with prod year and the main character hero name:'},
    {movies:[]}
]


let header=document.getElementById('header'),
    h1=document.getElementById('h1'),
    para=document.getElementById('para'),
    button=document.getElementById('button'),
    Date1=document.getElementById('Date1'),
    Movie1=document.getElementById('Movie'),
    Character1=document.getElementById('Character'),
    tbody=document.getElementById('tbody'),
    form1=document.getElementById('form1'),
    moviesArray=alldata[2].movies;


h1.innerHTML=alldata[0].mainheader;
para.innerHTML=alldata[1].mainparaghraph;


function tablefunc(){
    let data='';
    moviesArray.push({Movie:(Movie1.value),Date:(Date1.value),Character:(Character1.value)});
    moviesArray.forEach((element,index) => {
            
        data+=
        `<tr>
            <th>${index+1}</th>
            <td>${element.Movie}</td>
            <td>${element.Date}</td>
            <td>${element.Character}</td>
            <td><button class='del' onclick=deletitem(${index})>Delete</button></td>
        </tr>`;
    });
    tbody.innerHTML=data;
    form1.reset()
};



function deletitem(number){
    console.log(number)
    moviesArray.splice(number);
    data=''
    moviesArray.forEach((element,index) => {
            
        data+=
        `<tr>
            <th>${index+1}</th>
            <td>${element.Movie}</td>
            <td>${element.Date}</td>
            <td>${element.Character}</td>
            <td><button onclick=deletitem(${index})>Delete</button></td>
        </tr>`;
    });
    tbody.innerHTML=data;
    
}
