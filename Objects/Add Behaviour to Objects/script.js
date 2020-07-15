var student = 
{
  skill1 : "HTML",
  skill2 : "CSS",
  skill3 : "JS",
  builtProjects : false,
  build: function()
  {
    this.builtProjects = true;  
    console.log("Built Projects and gained some experience");
    // p1.innerHTML = "Built Projects and gained some experience"+"<br>";
  },
  applyJobs : function()
  {
    if(this.builtProjects)
    {
      console.log("Applied to jobs, Yess got a Frontend Developer job role")+"<br>";
      // p2.innerHTML = "Applied to jobs, Yess got a Frontend Developer job role"+"<br>";
      
    }
    else{
      console.log("Applied to jobs, Failed got rejected. I need to build projects")+"<br>"
      // p2.innerHTML = "Applied to jobs, Failed got rejected. I need to build projects"+"<br>";
    }
  }
};

/*
var p1 = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");

var text = document.getElementById("text");
text.appendChild(p1);
text.appendChild(p2);
text.appendChild(p3);
*/
student.applyJobs();
student.build();
student.applyJobs();

