import fs from "fs/promises"
import path from "path"

const filepath = path.join(__dirname, "data.json")

async function readFileEg() {
    try{
        const data = await fs.readFile(filepath, "utf8")
        console.log(data)
    }catch(err){
        console.error(err)
    }
}



async function writeFileEg() {
    try{
        await fs.writeFile("writefile.txt","hai this file is for write")
        await fs.writeFile("delefile.txt","hai this file is for delete")

        const data = {name: "thabitha", age: 21}
        await fs.writeFile("data.json", JSON.stringify(data,null,2))
    }catch(err){
        console.error(err)
    }
    
}

async function deleteFile(){
    try{
        await fs.unlink("delefile.txt")

    }catch(err){
        console.error(err)
    }
}

async function appendFileEg(){
    try{
        const data = await fs.readFile(filepath, "utf8")
        const jsondata = JSON.parse(data)
        jsondata.message = "this is thabitha"
        await fs.writeFile(filepath,JSON.stringify(jsondata,null,2))
        console.log("after appending:\n", jsondata)
        await fs.appendFile("writefile.txt","\nthis is for checking append")

    }catch(err){
        console.error(err)
    }
}


async function main(){
    await writeFileEg()
    await readFileEg()
    //await deleteFile()
    await appendFileEg()
}

main()