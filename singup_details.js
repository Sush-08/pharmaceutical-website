function singup1()
{
	var fname=document.getElementsByName("Fname")[0].value;
	var lname=document.getElementsByName("Lname")[0].value;
	var usename=document.getElementsByName("Username")[0].value;
	var pass=document.getElementsByName("Pass")[0];
	var rpass=document.getElementsByName("RPass")[0].value;
	var dob=document.getElementsByName("Dob")[0].value;
	
	var fname_c=document.getElementsByClassName("pass_class")[0];
	var lname_c=document.getElementsByClassName("pass_class")[1];
	var usename_c=document.getElementsByClassName("pass_class")[2];
	var pass_c=document.getElementsByClassName("pass_class")[3];
	var rpass_c=document.getElementsByClassName("pass_class")[4];
	var dob_c=document.getElementsByClassName("pass_class")[5];
	
	if(fname.length==0)
	{
		fname_c.textContent="Enter First Name";	
		return false;
	}
	else
	{
		fname_c.textContent="";
	}
	
	if(lname.length==0)
	{
		lname_c.textContent="Enter Last Name";
		return false;
	}
	else
	{
		lname_c.textContent="";
	}
	if(usename.length<8)
	{
		usename_c.textContent="length is greater then 8";
		return false;
	}
	else
	{
		usename_c.textContent="";
	}
	if(pass.value.length>8)
	{
		pass_c.textContent="";
		if(pass.value!=rpass)
		{
			rpass_c.textContent="password not matchs";
			return false;
		}
		else
		{
			rpass_c.textContent="";
		}
	}
	else
	{
		pass_c.textContent="length is greater then 8";
		return false;
	}
	if(dob.length<=0)
	{
		dob_c.textContent="Enter DOB";
		return false;
	}
	else
	{
		dob_c.textContent="";
	}
	return true;
}

function singup()
{
	var fname=document.getElementsByName("Fname")[0].value;
	var lname=document.getElementsByName("Lname")[0].value;
	var usename=document.getElementsByName("Username")[0].value;
	var pass=document.getElementsByName("Pass")[0].value;
	var dob=document.getElementsByName("Dob")[0].value;
	if(singup1())
	{
		window.localStorage.setItem("Fname",fname);
		window.localStorage.setItem("Lname",lname);
		window.localStorage.setItem("Pass",pass);
		window.localStorage.setItem("Username",usename);
		window.localStorage.setItem("Dob",dob);
		window.location.replace("login.html");
	}
}

function login()
{
	var uname=document.getElementsByName("Uname")[0].value;
	var pass=document.getElementsByName("Psw")[0].value;
	var uname_c=document.getElementsByClassName("pass_class")[0];
	var pass_c=document.getElementsByClassName("pass_class")[1];
	if(uname!=localStorage.getItem("Username"))
	{
		uname_c.textContent="Username not Match";
		if(pass!=localStorage.getItem("Pass"))
		{
			pass_c.textContent="Password not Match";
		}
		else
		{
			pass_c.textContent="";
		}
	}
	else
	{
		uname_c.textContent="";
		if(pass!=localStorage.getItem("Pass"))
		{
			pass_c.textContent="Password not Match";
		}
		else
		{
			pass_c.textContent="";
			alert("You have Successfully Log In");
			window.localStorage.setItem("login","Yes");
			window.location.replace("home.html");
		}
	}
}








