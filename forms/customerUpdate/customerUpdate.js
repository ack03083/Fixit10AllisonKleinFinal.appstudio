customerUpdate.onshow=function(){
     let query = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
    if (req1.status == 200) { 
            allNames = JSON.parse(req1.responseText)
                    if (allNames == 0) {
} else {
  let message = ""
  for (i = 0; i <= allNames.length - 1; i++) {
    message = message + allNames[i][0] + "\n"
    }
    txtNameOptions.value = message
  }
    } else {
        NSB.MsgBox("Error: " + req1.status);
    }  
  
}

btnSubmit3.onclick=function(){
let currentName = inptCurrentName.value
let newName = inptNewName.value
 var query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + currentName + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
if (req1.status == 200) {
      if (req1.responseText == 500) {
      NSB.MsgBox("The name has been updated.")
  
  
       let query = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
    if (req1.status == 200) { 
            allNames = JSON.parse(req1.responseText)
                    if (allNames == 0) {
} else {
  let message = ""
  for (i = 0; i <= allNames.length - 1; i++) {
    message = message + allNames[i][0] + "\n"
    }
    txtNameOptions.value = message
  }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
      
      
    } else {
      
      }

} else {
  }

  
}

  
}


  
}
