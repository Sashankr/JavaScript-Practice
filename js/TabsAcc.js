function openTab(event, tabId) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //replace tablinks with active class name
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  //when a tablink is clicked append the active class to it and set visibility to visible

  document.getElementById(tabId).style.display = "block";
  document.getElementById(tabId).style.transition = "1.6s ease";
  event.currentTarget.className += " active";

}

var accordian = document.getElementsByClassName("accordian");

for(var i=0;i<accordian.length;i++)
{
  accordian[i].addEventListener("click",function()
  {
    var content = this.nextElementSibling;
    if(content.style.display === "block")
    {
      content.style.display = "none";
    }
    else
    {
      content.style.display = "block";
    }
  });
}