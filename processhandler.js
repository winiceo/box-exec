const stage = require("./stage.js");
const lang_string = require("./lang.js");
const docker_image = require("./dockerimage_lib.js");
const exec_commands = require("./exec_commands.js");

const handler = (emitter)=>{
	
	switch(emitter.language){

		case "python2":

			stage.one(docker_image["python2"],"python2").then(()=>{

				return stage.two("python2",emitter.codefile);

			}).then((data)=>{

				return stage.four("python2",emitter.codefile,emitter.testcasefile,exec_commands["python2"]);
			
			}).then((data)=>{

				emitter.output = data.trim();
				emitter.emit("output");

			}).catch((error)=>{

				emitter.error = true;
				emitter.errortext = error;
				emitter.emit("error");

			});
			break;

		case "python3":

			stage.one(docker_image["python3"],"python3").then(()=>{

				return stage.two("python3",emitter.codefile);

			}).then((data)=>{

				return stage.four("python3",emitter.codefile,emitter.testcasefile,exec_commands["python3"]);
			
			}).then((data)=>{

				emitter.output = data.trim();
				emitter.emit("output");

			}).catch((error)=>{

				emitter.error = true;
				emitter.errortext = error;
				emitter.emit("error");

			});
			break;
		
		case "c":

			stage.one(docker_image["c"],"c").then(()=>{

				return stage.two("c",emitter.codefile);

			}).then((data)=>{

				return stage.three("c",emitter.codefile);

			}).then((data)=>{

				return stage.four("c",emitter.codefile,emitter.testcasefile,exec_commands["c"]);

			}).then((data)=>{

				emitter.output = data.trim();
				emitter.emit("output");

			}).catch((error)=>{

				emitter.error = true;
				emitter.errortext = error;
				emitter.emit("error");

			});
			break;
		
		case "cpp":

			stage.one(docker_image["cpp"],"cpp").then(()=>{

				return stage.two("cpp",emitter.codefile);

			}).then((data)=>{

				return stage.three("cpp",emitter.codefile);

			}).then((data)=>{

				return stage.four("cpp",emitter.codefile,emitter.testcasefile,exec_commands["cpp"]);

			}).then((data)=>{

				emitter.output = data.trim();
				emitter.emit("output");

			}).catch((error)=>{

				emitter.error = true;
				emitter.errortext = error;
				emitter.emit("error");

			});
			break;

		default:
			//empty

	}
}

module.exports = handler;