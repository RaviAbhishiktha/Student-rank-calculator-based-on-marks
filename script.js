const form = document.getElementById("studentForm")
const tableBody = document.getElementById("tableBody")

const totalStudents = document.getElementById("totalStudents")
const average = document.getElementById("average")
const highest = document.getElementById("highest")
const lowest = document.getElementById("lowest")

const sampleBtn = document.getElementById("sampleBtn")

let students=[]

form.addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let roll=document.getElementById("roll").value

let math=Number(document.getElementById("math").value)
let physics=Number(document.getElementById("physics").value)
let chemistry=Number(document.getElementById("chemistry").value)
let english=Number(document.getElementById("english").value)
let cs=Number(document.getElementById("cs").value)

let total=math+physics+chemistry+english+cs
let percentage=total/5

let grade=""

if(percentage>=90) grade="A+"
else if(percentage>=80) grade="A"
else if(percentage>=70) grade="B"
else if(percentage>=60) grade="C"
else if(percentage>=50) grade="D"
else grade="F"

students.push({
name,
roll,
total,
percentage:percentage.toFixed(2),
grade
})

update()

form.reset()

})

function update(){

students.sort((a,b)=>b.total-a.total)

tableBody.innerHTML=""

students.forEach((s,i)=>{

tableBody.innerHTML+=`
<tr>
<td>${i+1}</td>
<td>${s.name}</td>
<td>${s.roll}</td>
<td>${s.total}</td>
<td>${s.percentage}%</td>
<td>${s.grade}</td>
</tr>
`

})

updateStats()

}

function updateStats(){

let totals=students.map(s=>s.total)

totalStudents.innerText=students.length

let sum=totals.reduce((a,b)=>a+b,0)

average.innerText=(sum/students.length||0).toFixed(2)

highest.innerText=Math.max(...totals,0)

lowest.innerText=Math.min(...totals,0)

}

sampleBtn.onclick=function(){

students=[

{name:"Alice",roll:"101",total:430,percentage:86,grade:"A"},
{name:"Bob",roll:"102",total:390,percentage:78,grade:"B"},
{name:"Charlie",roll:"103",total:450,percentage:90,grade:"A+"}

]

update()

}