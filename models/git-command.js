class GitCommand {
    constructor(working_directory){
        this.working_directory = working_directory;
    }
    //Command: git init 
    init(){
        this.staging = [];
        this.local_repository = [];
        return "Initialized as empty Git repository.";
    }

    //Command: git status
    status(){        
        /*
            For assignment #1:
            Create logic here and run unit testing.
        */
        let wd_property_names = Object.getOwnPropertyNames(this.working_directory.new_changes);
        let message = `You have ${wd_property_names.length} change/s.`;
        if(wd_property_names.length == 0) message += '\n';
        for(let i=0; i<wd_property_names.length; i++){
            message += '\n' + wd_property_names[i];
        }
        return 'fail' // to fail the test case for this feature ..
        return message;
    }

    //Command: git add <filename/file directory/wildcard> 
    add(path_file){
        let modified_files = this.working_directory.new_changes;
        
        if(modified_files[path_file]){
            this.staging.push(modified_files[path_file]);
            delete modified_files[path_file];
        }
        /*
            For assignment #2:
            Create logic here and run unit testing.
            Don't forget to uncomment the unit tests.
        */
        else{
            return `Failed to add ${path_file}! File is not modified or missing.`;
        }
        return "Successfully added as index file/s.";
    }

    //Command: git commit -m "<message>"
    commit(message){
        if(this.staging.length > 0){
            this.local_repository.push({ "message": message, "files": this.staging });
            this.staging = [];
            return "Done committing to local repository.";
        }
        return "Nothing to commit.";
    }

    //Command: git push
    push(){   
        if(this.local_repository.length > 0){
            return "Done pushing to remote repository.";
        } 
        else {
            return "Nothing to push. No committed file found.";
        }     
    }
}


module.exports = GitCommand;