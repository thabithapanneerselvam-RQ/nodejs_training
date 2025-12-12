async function apiData(){
try{
const fetched = await fetch("/api/data")
const data = await fetched.json()
console.log(data)
}catch(err){
console.error(err)
}}
apiData()
