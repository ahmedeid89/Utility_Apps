import * as fsPromises from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";
//----------------------------------------------------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const thisDirName = path.dirname(__filename);
const currentFileName = path.basename(__filename);
clone_Files_Of_A_Directory_As_Empty_Files(thisDirName, thisDirName, ".txt");
//----------------------------------------------------------------------------------------------------------------
async function clone_Files_Of_A_Directory_As_Empty_Files(src_Dir_Path, dist_Dir_Path, the_NewFiles_Type_With_The_Dote) {
    let arr_FilesNames_Without_FileType = [];
    try {
        arr_FilesNames_Without_FileType = await fsPromises.readdir(src_Dir_Path, {
            encoding: "utf-8",
            withFileTypes: false,
        });
        console.log(arr_FilesNames_Without_FileType);
        console.log("Finished reading all the files names in the directory");
        for (let file_Name of arr_FilesNames_Without_FileType) {
            console.log(`dis_Dir_Path = ${dist_Dir_Path}`);
            console.log(`file_Name = ${file_Name}`);
            const the_Current_File_Name_With_Its_Type = file_Name.includes(".")
                ? file_Name.replace(/\..*/, the_NewFiles_Type_With_The_Dote)
                : file_Name + the_NewFiles_Type_With_The_Dote;
            console.log(`the_Current_File_Name_With_Its_Type = ${the_Current_File_Name_With_Its_Type}`);
            console.log(`the_Current_File_Name_With_Its_Type = ${the_Current_File_Name_With_Its_Type}`);
            const path_OfThe_Current_FileName = path.join(dist_Dir_Path, the_Current_File_Name_With_Its_Type);
            console.log(`The joined path = ${path_OfThe_Current_FileName}`);
            await fsPromises.writeFile(path_OfThe_Current_FileName, "");
        }
        console.log("Finished creating all the cloned files");
    }
    catch (err) {
        console.log();
        console.log("Caught the following error:-");
        console.log(err);
        console.log();
    }
}
//----------------------------------------------------------------------------------------------------------------
//# sourceMappingURL=../src/map/index.js.map