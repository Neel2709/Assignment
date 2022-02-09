let i = 0 ;
let pName = document.getElementById("productName");
let pImage = document.getElementById("productImage");
let pDesc = document.getElementById("productDesc");
let pQty = document.getElementById("productQuan");
let pPrice = document.getElementById("productPrice");
let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset");
submitButton.addEventListener('click',respondClick);

resetButton.addEventListener('click',resetForm);
let listItems = document.getElementById("listItems");

// let images = document.getElementById("Images");
// let content = document.getElementById("Content");

function respondClick(){

    const div1 = document.createElement("div");
    div1.setAttribute("height","fit-content");
    div1.setAttribute("width","100%");
    div1.id="Div"+i;
    div1.setAttribute("class","Division")

    //left division for Image
    const divLeft = document.createElement("div");
    divLeft.setAttribute("class","col-4");

    //Right division for content 
    const divRight = document.createElement("div");
    divRight.setAttribute("class","col-8");

    const divInrCont = document.createElement("div");
    divInrCont.setAttribute("class","row justify-content-start");

    const divInrLeft = document.createElement("div");
    divInrLeft.setAttribute("class","col-7");

    const divInrRight = document.createElement("div");
    divInrRight.setAttribute("class","col-5");
    // let Devision = document.getElementById("Div1");

    var PImage = document.createElement("img");
    var temp = window.URL.createObjectURL(productImage.files[0]);

    PImage.setAttribute("src", temp);
    PImage.setAttribute("width", "150");
    PImage.setAttribute("height", "150");
    PImage.id="PImage"+i;
    divLeft.appendChild(PImage);

    const label1 = document.createElement("label");
    label1.innerText = "Product Name: ";
    divInrLeft.appendChild(label1);

    const PName = document.createElement("label");
    PName.innerText = pName.value;
    divInrRight.appendChild(PName);

    // listItems.appendChild(div1);
 
    const breake1 = document.createElement("br");
    divInrRight.appendChild(breake1);

    const breake11 = document.createElement("br");
    divInrLeft.appendChild(breake11);

    const label3 = document.createElement("label");
    label3.innerText = "Product Description: ";
    divInrLeft.appendChild(label3)

    const PDesc = document.createElement("label");
    PDesc.innerText = pDesc.value;
    divInrRight.appendChild(PDesc);

    const breake2 = document.createElement("br");
    divInrRight.appendChild(breake2);

    const breake21 = document.createElement("br");
    divInrLeft.appendChild(breake21);

    const label4 = document.createElement("label");
    label4.innerText = "Product Quantity: ";
    divInrLeft.appendChild(label4);

    const PQty = document.createElement("span");
    PQty.innerText = pQty.value;
    divInrRight.appendChild(PQty);


    const breake3 = document.createElement("br");
    divInrRight.appendChild(breake3);

    const breake31 = document.createElement("br");
    divInrLeft.appendChild(breake31);

    const label5 = document.createElement("label");
    label5.innerText = "Product Price: ";
    label5.id="pPrice";
    divInrLeft.appendChild(label5);

    const PPrice = document.createElement("label");
    PPrice.innerText = pPrice.value;
    PPrice.id="pPriceValue"+i;
    divInrRight.appendChild(PPrice);

    const btn = document.createElement("Button");
    btn.setAttribute("class","btns");
    btn.id="btn"+ i;
    btn.type = 'button';
    btn.innerHTML = 'Add To Cart';

    divInrCont.appendChild(divInrLeft);
    divInrCont.appendChild(divInrRight);
    divInrCont.appendChild(btn);
    divRight.appendChild(divInrCont);
    div1.appendChild(divLeft);
    div1.appendChild(divRight);
    listItems.appendChild(div1);

    //gettiing the object of button
    let cart = document.getElementById("btn"+i);

    //onclick event listener of button 
    cart.addEventListener('click',function(){
        var randomID="id" + Math.random().toString(16).slice(2);
        //Div 0 
        const div1 = document.createElement("div");

        let parent = this.parentNode.parentNode.parentNode.id;
        console.log(parent);

        var pimgs = document.getElementById(parent).getElementsByClassName("col-4")[0].getElementsByTagName("img")[0].src;
        var pnames = document.getElementById(parent).getElementsByClassName("col-8")[0].getElementsByClassName("row justify-content-start")[0].getElementsByClassName("col-5")[0].getElementsByTagName("label")[0].innerHTML;
        var pdescs = document.getElementById(parent).getElementsByClassName("col-8")[0].getElementsByClassName("row justify-content-start")[0].getElementsByClassName("col-5")[0].getElementsByTagName("label")[1].innerHTML;
        var pquans = document.getElementById(parent).getElementsByClassName("col-8")[0].getElementsByClassName("row justify-content-start")[0].getElementsByClassName("col-5")[0].getElementsByTagName("span")[0].innerHTML;
        var pprices = document.getElementById(parent).getElementsByClassName("col-8")[0].getElementsByClassName("row justify-content-start")[0].getElementsByClassName("col-5")[0].getElementsByTagName("label")[2].innerHTML;

        //getting division object
        var cartprod = document.getElementById("leftdivison");

        //Enter new Quantity
        var qty=parseInt(prompt("Enter Quantity you want to buy : "));
        if(qty>pquans){
            alert("This much quantity is not available....");
        }
        else{
            PQty.innerText = pquans - qty ;

            //create parent div
            var parentDiv = document.createElement("div");
            parentDiv.className="row justify-content-between singleProduct";
            parentDiv.id="ct"+randomID;
            
            //create div for image 
            var childDiv1 = document.createElement("div");
            childDiv1.className="col-4 prodimg";
        
            var imgTag = document.createElement("img");
            imgTag.classList.add("productImage");
            imgTag.setAttribute("src", pimgs);
            imgTag.setAttribute("width", "80");
            imgTag.setAttribute("height", "80");

            childDiv1.appendChild(imgTag);

            //create div for product list 
            var childDiv2 = document.createElement("div");
            childDiv2.className="col-8 productList";

            const closebtn = document.createElement("Button");
            closebtn.type = 'button';
            closebtn.className="btn-close";
            closebtn.style="float:right";
            closebtn.id="close"+randomID;

            var nameTag0 = document.createElement("b");
            nameTag0.innerText = "Product Name: ";

            var nameTag1 = document.createElement("span");
            nameTag1.innerText = pnames;
            nameTag1.id="pn"+parent;

            var qtyTag0 = document.createElement("b");
            qtyTag0.innerText = qty;
            qtyTag0.id="pq"+parent;

            var qtyTag1 = document.createElement("b");
            qtyTag1.innerText = " x ";

            var priceTag0 = document.createElement("b");
            priceTag0.innerText = pprices;
            priceTag0.id="pp"+parent;

            var equalTag = document.createElement("b");
            equalTag.innerText = " = ";

            var sumTag = document.createElement("b");
            sumTag.innerText = parseInt(qty*pprices);
            sumTag.id="pt"+parent;

            //Add product to child product list
            childDiv2.appendChild(closebtn);
            childDiv2.appendChild(document.createElement("br"));
            childDiv2.appendChild(nameTag0);
            childDiv2.appendChild(nameTag1);
            childDiv2.appendChild(document.createElement("br"));
            childDiv2.appendChild(qtyTag0);
            childDiv2.appendChild(qtyTag1);
            childDiv2.appendChild(priceTag0);
            childDiv2.appendChild(equalTag);
            childDiv2.appendChild(sumTag);
            childDiv2.appendChild(document.createElement("br"));

            parentDiv.appendChild(childDiv1);
            parentDiv.appendChild(childDiv2);

            cartprod.appendChild(parentDiv);

            let dltitem = document.getElementById("close"+randomID);

            dltitem.addEventListener('click',function(){
                var leftdiv = document.getElementById("leftdivison");
                console.log(leftdiv);
                var pquans = document.getElementById(parent).getElementsByClassName("col-8")[0].getElementsByClassName("row justify-content-start")[0].getElementsByClassName("col-5")[0].getElementsByTagName("span")[0].innerHTML;
                console.log("Quan:"+pquans);
                var closeparent = this.parentNode.parentNode;
                console.log(closeparent);

                PQty.innerText = Number(pquans) + qty;

                leftdiv.removeChild(closeparent);

            });

        }        
    });
    i++;
}

function resetForm(){
    pName.value="";
    pImage.value="";
    pDesc.value="";
    pPrice.value="";
    pQty.value="";
}