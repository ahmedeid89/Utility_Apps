//@ts-check
import * as fsPromises from "fs/promises";
import * as path from "path";
// get the files names in the folder
// put them in array
// for every name create a text file
//@ts-ignore
const __filename = fileURLToPath(import.meta.url);
const thisDirName = path.dirname(__filename);
const currentFileName = path.basename(__filename);

clone_Files_With_Txt_Files(thisDirName, thisDirName);

async function clone_Files_With_Txt_Files(path_Of_Src_Dir, path_Of_Dist_Dir) {
	const arr = await fsPromises.readdir(path_Of_Src_Dir, {
		encoding: "utf-8",
		withFileTypes: false,
	});
	arr.forEach(async (file_Name, index) => {
		const new_Name_With_Txt_Type = file_Name.replace(/\..*/, "") + ".txt";
		const the_Full_Path_OfThe_Txt_File = path.join(
			path_Of_Dist_Dir,
			new_Name_With_Txt_Type
		);
		await fsPromises.writeFile(the_Full_Path_OfThe_Txt_File, "");
	});
}
