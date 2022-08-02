// private async importFile(filePath: string) {
//     return (await import(filePath))?.default;
// }

import {glob} from 'glob'
import {promisify} from 'util'
import {terminal} from "../structures/terminal"
import {request} from "../typings/client";
import express from "express";
const globPromise =  promisify(glob);

async function importFile(filePath: string) {
 return (await import(filePath))?.default
}

export async function registerFiles(router:express.Router,path:string){
  const files = await globPromise(path)
  Promise.all(files).then((fileList)=>{
   fileList.forEach(async (file)=>{
    let command: request.RequestType = await importFile(file);
    terminal.api(`Registering ${command.path} with method ${command.method}`);
    try{
     switch (command.method) {
      case 'get':
       router.get(command.path,command.run)
      case 'post':
       router.post(command.path,command.run);
      case 'put':
       router.put(command.path,command.run);
      case 'delete':
       router.delete(command.path,command.run);
      case 'all':
       router.all(command.path,command.run);
      default:
       break;
     }

    } catch (e) {
      terminal.api(`Error when registering:${command.path}`)
    }


  });
 })
}




