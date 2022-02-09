//variables
var count = 1 ;
var marks = 0 ;
// To store the Answer
var Answer ; 

//Main Ready Function
$(document).ready(function(){
    $('#finish').hide();
    $('#result').hide();
    $('#main').hide();

    //start click
    $('#btn').click(function(){
        $('#start_page').hide();
        $('#finish').hide();
        $('#result').hide();
        $('#main').hide();
        addingQuestions(Questions,0);
    });

    //Next Cick
    $('#next').click(function(){
        //checking the answer
        check_result(Questions,count);

        if(count == 5){
            $('#start_page').hide();
            $('#result').hide();
            $('#finish').show();
            $('#next').hide();
        }
        else{
            console.log(count);
            $('#start_page').hide();
            $('#finish').hide();
            $('#result').hide();
            $('#next').show();
            buttons_manager();
            addingQuestions(Questions,count); 
            count++;  
        }

    });

    function buttons_manager(){
        if(count == 4){
            $('#next').hide();
            $('#finish').show();
        }
    }

    function check_result(Question,i){
        var radioValue = $("input[type='radio']:checked").val();
        console.log("radio Value : " + radioValue);
        console.log("Ansewer : " + Answer);
        if(radioValue == Answer){
            marks = marks + 5 ;
        }
        console.log("MArks : " + marks);
    }

    //Finish Cick
    $('#finish').click(function(){
        //checking the answer
        check_result(Questions,count);
        $('#main').hide();
        $('#result').show();
        $("#marks").text(marks);
        $('#correct-answer').text(marks / 5);
        $('#percentage').text((marks / 25) * 100 + "%");
    });

    $('#start_again').click(function(){
        count = 1;
        marks=0;    
        $('#start_page').show();
        $('#finish').hide();
        $('#result').hide();
        $('#main').hide();
        $('#next').show();
    });

    // //create Question function
    function addingQuestions(Question,i){
        $('#main').show();
        $('#question').text(Question[i].Quiz); 
        // $('#options1').text(Question[i].options[0]);
        // $('#options2').text(Question[i].options[1]);
        // $('#options3').text(Question[i].options[2]);
        // $('#options4').text(Question[i].options[3]);
        // $('#number').text(Number(i+1));
       
        $('.form-check-input').prop( "checked", false );

        //setting text to the Label
        $('#lbl1').text(Question[i].options[0]);
        $('#lbl2').text(Question[i].options[1]);
        $('#lbl3').text(Question[i].options[2]);
        $('#lbl4').text(Question[i].options[3]);
        $('#number').text(Number(i+1));

        //set the value to the radio button 
        $('#flexRadioDefault1').attr("value",Question[i].options[0]);
        $('#flexRadioDefault2').attr("value",Question[i].options[1]);
        $('#flexRadioDefault3').attr("value",Question[i].options[2]);
        $('#flexRadioDefault4').attr("value",Question[i].options[3]);

        //storing the answer in Answer var
        Answer = Question[i].answer;
        
        // $('input[id^="flexRadio"]').click( function(){
        //     alert($(this.id).children('label').);
        // });

        // $('#options1').click(function(){
        //     $(this).css("background-color", "green");
        //     $(this).css("color", "white");
        //     var a = $(this).text();
        //     var b = Question[i].answer;
        //     console.log(a);
        //     console.log(b);
        //     if(a == b){
        //         // console.log("in if");
        //         marks = marks + 5 ;
        //     }
        //     console.log("Option1 clicked" + marks);
        // });

        // $('#options2').click(function(){
        //     $(this).css("background-color", "green");
        //     $(this).css("color", "white");
        //     var a = $(this).text();
        //     var b = Question[i].answer;
        //     console.log(a);
        //     console.log(b);
        //     if(a == b){
        //         console.log("in if");
        //         marks = marks + 5 ;
        //     }
        //     console.log("Option2 clicked" + marks);
        // });
            
        // $('#options3').click(function(){
        //     $(this).css("background-color", "green");
        //     $(this).css("color", "white");
        //     var a = $(this).text();
        //     var b = Question[i].answer;
        //     console.log(a);
        //     console.log(b);
        //     if(a == b){
        //         console.log("in if");
        //         marks = marks + 5 ;
        //     }
        //     console.log("Option3 clicked" + marks);
        // });
         
        // $('#options4').click(function(){
        //     $(this).css("background-color", "green");
        //     $(this).css("color", "white");
        //     var a = $(this).text();
        //     var b = Question[i].answer;
        //     console.log(a);
        //     console.log(b);
        //     if(a == b){
        //         console.log("in if");
        //         marks = marks + 5 ;
        //     }
        //     console.log("Option4 clicked" + marks);
        // });

    }

})

//Questions Array
let Questions = [{
    Quiz:"Q.1) What does HTML stand for?",
    options:["Hyper Type Markup Language","Home Tool Markup Language","Hyper Link and Text Markup Language","Hyper Text Markup Language"],
    answer : "Hyper Text Markup Language"
    },
    {
        Quiz:"Q.2) How many sizes of headers are available in HTML by default?",
        options:["5","1","3","6"],
        answer : "6"
    },
    {
        Quiz:"Q.3) What is the smallest header in HTML by default?",
        options:["H1","H6","H2","H3"],
        answer : "H6"
    },
    {
        Quiz:"Q.4) How to create an ordered list in HTML?",
        options:["<ul>","<href>","<ol>","<b>"],
        answer : "<ol>"
    },
    {
        Quiz:"Q.5) What are the attributes used to change the size of an image?",
        options:["Width and Hight","Big and Small","Top and Bottom","None of Above"],
        answer : "Width and Hight"
    }
];

// ~^d.AH92.Y]JwN@!