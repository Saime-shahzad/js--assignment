 _____________________________________________________________________
//                            CHAPTER 38 -------42
// ________________________________________________________________________*/


// _______________________QUESTION NO 01 (Raise A to B)_________//


var x = Math.pow(4, 3)
document.write(x)


// _______________________QUESTION NO 02 (Leap Year)_________//

var write = +prompt("enter your year")


var dayOfWk = (write);
switch (dayOfWk) {
    case 2016:
        alert("2016 is a leap year");
        break;
    case 2012:
        alert("2012 is also a leap year");
        break;
    case 2020:
        alert("2020 is a leap year!");
        break;
    default:
        alert("Try again ");
}


// _______________________QUESTION NO 03 (Area Of triangle)_________//


var s1 = 2;
var s2 = 3;
var s3 = 4;
var s = (s1 + s2 + s3) / 2;
var area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
console.log(area);

// _______________________QUESTION NO 04 (Average percentage)_________//

var a = +prompt("Enter your Mark Obtained in Mathematics");
var b = +prompt("Enter your Mark Obtained in Physics");
var c = +prompt("Enter your Mark Obtained in Chemistry");

function main() {
    return a + b + c

}

function Average() {
    return main() / 3
}

function percentage() {
    return main() / 300 * 100
}

document.write("Your Average Mark Is" + " " + +Average() + "<br>")
document.write("Your Average Percentage Is" + " " + percentage())


// _______________________QUESTION NO 05 (indexOf)_________//


var a = "The quick brown fox jumps over the lazy dog"
var b = a.indexOf("w")

document.write(b)


// _______________________QUESTION NO 06 (Delete vowels)_________//


var strings = ["My name is ameen my father name is zahid hussain"];

strings = strings.map(function(string) {
    return string.replace(/[aeiou]/g, '');
});

console.log(strings);


// _______________________QUESTION NO 07 (occurrences of any two vowels)_________//


function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}

document.write(findOccurrences())

// _______________________QUESTION NO 08 (Distance)_________//


var distance = +prompt("Write the distence B/W two cities", "in KM")

var b = distance * 1000; //for KM to meter
var c = distance * 3280.84; // for km to feets
var d = distance * 39370.1 //for KM to inches
var e = distance * 100000 //for Km to centimeter
document.write(distance + " KM convert into meter is = " + b + "<br>" +
    distance + " KM convert into feet is = " + c + "<br>" +
    distance + " KM convert into inches is = " + d + "<br>" +
    distance + " KM convert into centimeter is = " + e + "<br>")


// _______________________QUESTION NO 09 (over time)_________//

// Sir ne skip karne kaha he

// _______________________QUESTION NO 10 (Withdraw)_________//

// baqi hey



/* _____________________________________________________________________
//                            CHAPTER 43 -------48
// ________________________________________________________________________*/


// _______________________QUESTION NO 01 (onclick)_________//

// // ---FOR HTML---//

// //  <a href="#" onclick="clickMe()">click</a>
// // --------------------------------------------------------//

function clickMe() {
    alert("Hello world")
}


// // _______________________QUESTION NO 02 (onclick mobile)_________//

// // ---FOR HTML---//

// <img onclick="imgClick()" src="https://media1.santabanta.com/full1/Technology/Mobiles/mobiles-9a.jpg" width="150px" />
// <img onclick="imgClick()" src="https://i.pinimg.com/474x/82/e3/d2/82e3d2830e308aca68b1b844147ce3b0.jpg" width="150px" />
// <img onclick="imgClick()" src="https://candytech.in/wp-content/uploads/2018/05/Xiaomi-Mi8.jpg" width="150px" />

// // --------------------------------------------------------//

function imgClick() {
    alert("Thanks For purchasing This World Class Mobile Phone")
}



// //_______________________QUESTION NO 03 (button)_________//


// // ---FOR HTML---//


// <h1>Index name class</h1>
// <table id="myTable">
//     <tr>
//         <td>John 10</td>
//         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
//     </tr>
//     <tr>
//         <td>Doe 9</td>
//         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
//     </tr>
//     <tr>
//         <td>Mark 10</td>
//         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
//     </tr>
//     <tr>
//         <td>James 8</td>
//         <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
//     </tr>
// </table>

// // --------------------------------------------------------//


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}



// //_______________________QUESTION NO 04 (On Mouse over)_________//

// // ---FOR HTML---//


// <img id="myImg" onmouseover="mouseOver()" onmouseout="mouseOut()" src="https://miro.medium.com/proxy/0*HICLyAdNSIyT0ODU.jpg" width="700px">

// // --------------------------------------------------------//


function mouseOver() {
    var x = document.getElementById("myImg").src = "https://www.mockrabbit.com/wp-content/uploads/2018/12/Become-a-Full-Stack-Developers.jpg";
}

function mouseOut() {
    var y = document.getElementById("myImg").src = "https://miro.medium.com/proxy/0*HICLyAdNSIyT0ODU.jpg"
}



// _______________________QUESTION NO 05 (Counter)_________//

// baqi he


/* _____________________________________________________________________
//                            CHAPTER 49 -------52
// ________________________________________________________________________*/



// _______________________QUESTION NO 01 (Collect data)_________//


// // ---FOR HTML---//


// <input id="in" type="text" placeholder="Enter your Email">
// <input id="put" type="text" placeholder="Enter your pasword">
// <button onclick="check()">clcik</button>

// // --------------------------------------------------------//


function check() {
    var x = document.getElementById("in")

    var y = document.getElementById("put")
    document.write(x.value + "</br>")
    document.write(y.value)
}