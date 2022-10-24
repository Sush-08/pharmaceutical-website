var img_item=document.getElementsByClassName("div_btn_js");
function img_fun(a,b,c,index,exte="jpg")
{
	img_item[index].innerHTML='<img src=img/'+a+'.'+exte+' alt="'+a+'" class="item_img"><figure><h3 style="text-align:center;color:white" >'+b+'</h3><h2 style="text-align:center;color:red;">'+c+'</h2></figure><button id="buybtn" onclick="pay_fun('+index+')"><a href="pay.html" style="text-decoration:none;" ><strong>Buy</strong></a></button>';
}
var a=null,b=null,c=null,d=null;
function pay_fun(index)
{
	var pay=document.getElementById("pay_id");
	//pay.innerHTML='<h1>hi</h1>';
	a=img_item[index];
	
	b=img_item[index].firstChild.alt;
	
	c=img_item[index].firstChild.nextSibling.firstChild.textContent;
	
	d=img_item[index].firstChild.nextSibling.lastChild.textContent;
	window.localStorage.setItem("alt",b);
	window.localStorage.setItem("name",c);
	window.localStorage.setItem("prize",d);
	
}

function val()
{
	var item=document.getElementById("pay_id");
	var item1=document.getElementById("desc");
	var price=document.getElementById("no_of_item1");
	var tp=document.getElementById("total_price");
	item.innerHTML='<img src=img/'+localStorage.getItem("alt")+'.jpg alt='+localStorage.getItem("alt")+'>'
	item1.innerHTML+='<figure><h3 style="color:black">'+localStorage.getItem("name")+'</h3><h2 style="color:red;">'+localStorage.getItem("prize")+'</h2></figure>';
	price.innerHTML=localStorage.getItem("prize");
	tp.innerHTML=localStorage.getItem("prize");
}

function add_sub(a)
{
	var b=document.getElementById("no_of_item");
	var d=document.getElementById("no_of_item2");
	var c=parseInt(b.value);
	var tp=document.getElementById("total_price");
	var price=localStorage.getItem("prize");
	if(a=='-')
	{
		if(c>1)
		{
			c--;
			b.value=c;
			d.innerHTML=c;
			tp.innerHTML="Rs-"+price.slice(3)*c;
		}
		else
		{
			alert("min 1 items can buy");
		}
	}
	if(a=='+')
	{
		if(c<10)
		{
			c++;
			b.value=c;
			d.innerHTML=c;
			tp.innerHTML="Rs-"+price.slice(3)*c;
		}
		else
		{
			alert("only 10 items are buy");
		}
	}
}
function buy_next()
{
	if(localStorage.getItem("login")=="Yes")
	{	
		var no_of_items=document.getElementById("no_of_item");
		var value=parseInt(no_of_items.value);
		window.localStorage.setItem("NoOfItem",value);
		window.location.replace("address.html");	
	}
	else
	{
		window.location.replace("login.html");
	}
}

function addressload()
{
	var img=document.getElementById("img_O");
	img.innerHTML+='<figure><h3 style="color:black">'+localStorage.getItem("name")+'</h3></figure><img src=img/'+localStorage.getItem("alt")+'.jpg alt='+localStorage.getItem("alt")+'>';
}


function buy_details_next()
{
	var country=document.getElementsByName("Country")[0].value;
	var state=document.getElementsByName("State")[0].value;
	var district=document.getElementsByName("District")[0].value;
	var tehsil=document.getElementsByName("Tehsil")[0].value;
	var pincode=document.getElementsByName("PinCode")[0].value;
	var address=document.getElementsByName("Address")[0].value;
	
	var country_c=document.getElementsByClassName("pass_class")[0];
	var state_c=document.getElementsByClassName("pass_class")[1];
	var district_c=document.getElementsByClassName("pass_class")[2];
	var tehsil_c=document.getElementsByClassName("pass_class")[3];
	var address_c=document.getElementsByClassName("pass_class")[4];
	var pincode_c=document.getElementsByClassName("pass_class")[5];
	
	if(country.length==0)
	{
		country_c.textContent="Enter Country";	
		return false;
	}
	else
	{
		country_c.textContent="";
	}
	
	if(state.length==0)
	{
		state_c.textContent="Enter State";
		return false;
	}
	else
	{
		state_c.textContent="";
	}
	if(district.length==0)
	{
		district_c.textContent="Enter District";
		return false;
	}
	else
	{
		district_c.textContent="";
	}
	if(tehsil.length==0)
	{
		tehsil_c.textContent="Enter Tehsil";
		return false;
	}
	else
	{
		tehsil_c.textContent="";
	}
	if(address.length==0)
	{
		address_c.textContent="Enter address";
		return false;
	}
	else
	{
		address_c.textContent="";
	}
	if(pincode.length==0)
	{
		pincode_c.textContent="Enter Pin Code";
		return false;
	}
	else
	{
		pincode_c.textContent="";
	}
	return true;
}

function buy_details()
{
	var country=document.getElementsByName("Country")[0].value;
	var state=document.getElementsByName("State")[0].value;
	var district=document.getElementsByName("District")[0].value;
	var tehsil=document.getElementsByName("Tehsil")[0].value;
	var address=document.getElementsByName("Address")[0].value;
	var pincode=document.getElementsByName("PinCode")[0].value;
	if(buy_details_next())
	{
		window.localStorage.setItem("Country",country);
		window.localStorage.setItem("State",state);
		window.localStorage.setItem("Tehsil",tehsil);
		window.localStorage.setItem("District",district);
		window.localStorage.setItem("Address",address);
		window.localStorage.setItem("PinCode",pincode);
		window.location.replace("bill.html");
	}
}

function bill()
{
	var bill_details=document.getElementById("f1");
	bill_details.innerHTML='<fieldset><legend>Your Order</legend><table align="center" cellpadding="5px" cellspacing="5px"><tr><td>Product Name</td><td>'+localStorage.getItem("name")+'</td></tr><tr><td>shipping Address</td><td>'+localStorage.getItem("Address")+'<br>'+localStorage.getItem("Tehsil")+' '+localStorage.getItem("District")+'<br>'+localStorage.getItem("State")+' '+localStorage.getItem("PinCode")+'</td></tr><tr><td>Product Price</td><td>'+localStorage.getItem("prize")+'</td></tr><tr><td>No. of Item</td><td>'+localStorage.getItem("NoOfItem")+'</td></tr><tr><td>Total Price</td><td>'+localStorage.getItem("NoOfItem")*localStorage.getItem("prize").slice(3)+'</td></tr><tr><td colspan="2" align="center"><button><a href="orderPlaced.html" target="_top">Place Order</a></button></td></tr></table><span style="color:red;">*Cash On Delivary</span></fieldset>';
	
}






