let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = true
let runnersAge = 32

if (runnersAge > 18 && isEarly === true)
{
  raceNumber += 1000
}

if(runnersAge > 18 && isEarly === true) 
{
  console.log(`Race number ${raceNumber} races at 9:30 am`)
}
else if (runnersAge > 18 && isEarly === false)
{
   console.log(`Race number ${raceNumber} races at 11:00 am`)
}
else if (runnersAge < 18) {
   console.log(`Race number ${raceNumber} races at 12:30 pm`)
}
else {
   console.log(`See the registration desk`)
}