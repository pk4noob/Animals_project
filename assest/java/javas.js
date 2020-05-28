function addInfoAnimal() {
    let type = document.querySelector("#category").value;
    console.log(type);

    let name = document.querySelector("#name").value;
    console.log(name);

    let diet = document.querySelector("#diet").value;
    console.log(diet);

    let averageLife = document.querySelector("#average-life").value;
    console.log(averageLife);

    let size = document.querySelector("#size").value;
    console.log(size);

    let weight = document.querySelector("#weight").value;
    console.log(weight);

    let livePic = document.querySelector("#live-picture").value;
    console.log(livePic);

    let animalPic = document.querySelector("#animal-picture").value;
    console.log(animalPic);

    let about = document.querySelector("#about").value;
    console.log(about);

    const json = {
        type,
        name,
        diet,
        averageLife,
        size,
        weight,
        livePic,
        animalPic,
        about
    };

    pushToCategory("animals", json);

    document.querySelector("#category").value = "Choose";
    document.querySelector("#name").value = "";
    document.querySelector("#diet").value = "";
    document.querySelector("#average-life").value = "";
    document.querySelector("#size").value = "";
    document.querySelector("#weight").value = "";
    document.querySelector("#live-picture").value = "";
    document.querySelector("#animal-picture").value = "";
    document.querySelector("#about").value = "";
}

function getStorage(key) {
    let arr = {};
    let storage = localStorage.getItem(key);
    if (storage !== null) {
        arr = JSON.parse(storage);
    }
    return arr;
}

function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function pushToCategory(key, value) {
    let data = getStorage(key);
    if (data[value.type] === undefined) {
        return false;
    }
    data[value.type].push(value);
    setStorage(key, data);
}

if (localStorage.getItem("animals") === null) {
    let initialState = {
        mammals: [],
        birds: [],
        reptiles: [],
        amphibians: [],
        invertebrates: [],
        fish: []
    };
    setStorage("animals", initialState);
}
function getAnimals(val) {
    let cat = val.split("=")[1];

    let animals = JSON.parse(localStorage.getItem("animals"));

    animals[cat].forEach(item => {
        document.querySelector("#table tbody").innerHTML += `<tr>
        <th scope="row">1</th>
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td>
          <button type="button" class="btn btn-outline-success" onclick="showinfo('${item.name}', '${cat}')" data-toggle="modal" data-target="#exampleModalLong">
            info 
          </button>
        </td>
      </tr>`;
    });
}

function showinfo(val, cat) {
    let data = JSON.parse(localStorage.getItem("animals"));


    data[cat].forEach(item => {
        if (item.name == val) {
            document.querySelector("#modal-content").innerHTML = `
        <img src="${item.animalPic}">
        <ul class="list-group">
      
        <li class="list-group-item">Name: ${item.name}</li>
        <li class="list-group-item">Diet: ${item.diet}</li>
        <li class="list-group-item">Average Life: ${item.averageLife}</li>
        <li class="list-group-item">Size: ${item.size}</li>
        <li class="list-group-item">Weight: ${item.weight}</li>
        <li class="list-group-item">About: ${item.about}</li>      
      </ul>
      <img src="${item.livePic}"></img>`;
        }

    });
}
// let username = document.querySelector("#username");

// username.addEventListener("focus", function() {
//     console.log("focus olundu")
// })

// username.addEventListener("blur", function() {
//     if (this.value == "") {
//         var str = this.getAttribute("data-msg");
//         if (this.nextElementSibling == null) {
//             var small = alertText(str);
//             this.parentNode.appendChild(small)
//         }
//     } else {
//         if (this.nextElementSibling != null) {
//             this.nextElementSibling.remove()
//         }
//     }

// })

// username.addEventListener("keyup", function() {
//     var str = this.getAttribute("data-msg");
//     if (this.value != "") {
//         if (this.nextElementSibling != null) {
//             this.nextElementSibling.remove()
//         }
//     } else {
//         if (this.nextElementSibling == null) {
//             var small = alertText(str);
//             this.parentNode.appendChild(small)
//         }
//     }
// })

// var city = document.querySelector("#city");

// city.addEventListener("change", function() {
//     if (this.value == 2) {
//         this.parentNode.nextElementSibling.classList.remove("d-none")
//     } else {
//         this.parentNode.nextElementSibling.classList.add("d-none")
//     }
// })

let requireds = document.querySelectorAll(".required");

for (let i = 0; i < requireds.length; i++) {
    requireds[i].addEventListener("blur", function () {
        if (this.value == "") {
            var str = this.getAttribute("data-msg");
            if (this.nextElementSibling == null) {
                var small = alertText(str);
                this.parentNode.appendChild(small)
            }
        } else {
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove()
            }
        }

    })
}

for (let i = 0; i < requireds.length; i++) {
    requireds[i].addEventListener("keyup", function () {
        var str = this.getAttribute("data-msg");
        if (this.value != "") {
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove()
            }
        } else {
            if (this.nextElementSibling == null) {
                var small = alertText(str);
                this.parentNode.appendChild(small)
            }
        }
    })
}



function alertText(str) {
    var small = document.createElement("small");
    small.classList.add("text-danger");
    small.innerText = str;
    return small;
}

var form = document.querySelector("#registr");

if (form === null) {
    console.log("duzdur")
} else {
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        for (let i = 0; i < requireds.length; i++) {
            if (requireds[i].value == "") {
                var str = requireds[i].getAttribute("data-msg");

                if (requireds[i].nextElementSibling == null) {
                    var small = alertText(str);
                    requireds[i].parentNode.appendChild(small)
                }
            } else {
                if (requireds[i].nextElementSibling != null) {
                    requireds[i].nextElementSibling.remove()
                }
            }
        }


    })
}
function searchData(e) {
    let searchValue = document.querySelector("#search-input").value
    let dataLocalStorage = getStorage("animals")
    let dataArr = [];
    for (let property in dataLocalStorage) {
        // console.log(dataLocalStorage[property])
        dataLocalStorage[property].forEach(item => {
            if (item.name.search(searchValue) !== -1) {
                dataArr.push(item);
            }
        })
    }
    renderDOM(dataArr, searchValue);
}

function renderDOM(data, userValue) {
    if (userValue == '') {
        document.querySelector('#accordion').innerHTML = '';
        return false
    }
    data.forEach((item, index) => {
        document.querySelector('#accordion').innerHTML = `
        <div class="card">
            <div class="card-header" id="heading${index}">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">${index + 1}. 
                ${item.name}
                </button>
            </h5>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
            <img src="${item.animalPic}">
            <ul class="list-group">
                <li class="list-group-item">Name: ${item.name}</li>
                <li class="list-group-item">Diet: ${item.diet}</li>
                <li class="list-group-item">Average Life: ${item.averageLife}</li>
                <li class="list-group-item">Size: ${item.size}</li>
                <li class="list-group-item">Weight: ${item.weight}</li>
                <li class="list-group-item">About: ${item.about}</li>
        </ul>
        <img src="${item.livePic}"></img> 
            </div>
        </div>
        `
    });
}




    // var values = [],
    //     keys = JSON.stringify(window.localStorage),
    //     i = keys.length;

    // // while ( i-- ) {
    // //     values.push( localStorage.getItem(keys[i]) );
    // // }
    // console.log(keys)
    // return values;



// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");

//     for (i = 0; i < localStorage.length; i++) {
//         a = localStorage[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
// myFunction()