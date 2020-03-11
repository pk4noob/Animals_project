// // $(document).ready(function(){
// //     $("#btn").on("click",function(){
// //         let data = $("#input_data").val()
// //         $("#ul").append(`<li>${data}</li>`)
// //         $("#input_data").val(" ")
// //     })
// // })


// var response = {
//     animals: {
//         animal_categories: {
//             mammals: {
//                 aardvark: {},
//                 african_Elephant: {
//                     type: "Mammals",
//                     name: "African Elephant",
//                     info:
//                         "An adult African elephant's trunk is about seven feet (two meters) long! It's actually an elongated nose and upper lip. Like most noses, trunks are for smelling.",
//                     diet: "Herbivore",
//                     averageLife: "Up To 70 years",
//                     size: "Height at the shoulder: 8.2 to 13 feet",
//                     weight: "2.5 to 7 tons",
//                     livePic: "./Image/images (1).jpeg",
//                     infoTwo: `When an elephant drinks, it sucks as much as 2 gallons (7.5 liters) of water into its trunk at a time. Then it curls its trunk under, sticks the tip of its trunk into its mouth, and blows. Out comes the water, right down the elephant's throat.

//                 Since African elephants live where the sun is usually blazing hot, they use their trunks to help them keep cool. First they squirt a trunkful of cool water over their bodies. Then they often follow that with a sprinkling of dust to create a protective layer of dirt on their skin. Elephants pick up and spray dust the same way they do water—with their trunks.

//                 Elephants also use their trunks as snorkels when they wade in deep water. An elephant's trunk is controlled by many muscles. Two fingerlike parts on the tip of the trunk allow the elephant to perform delicate maneuvers such as picking a berry from the ground or plucking a single leaf off a tree. Elephants can also use its trunk to grasp an entire tree branch and pull it down to its mouth and to yank up clumps of grasses and shove the greenery into their mouths.`
//                 }
//             },
//             birds: {},
//             reptiles: {},
//             amphibians: {},
//             anvertebrates: {},
//             fish: {}
//         }
//     }
// };

// // document.querySelector("#mammal").addEventListener("click", function() {
// //   event.preventDefault();

// //   console.log(response.animals.animal_categories.mammals.african_Elephant);
// // });
// $(document).ready(function () {
//     $("#btn_click").on("click", function () {
//         console.log("salammmmmmmmmmmmmmmmmm")
//         let input = $("#input_value").val();
//         console.log(input);

//         let c = response.animals.animal_categories.mammals.african_Elephant;
//         let b = Object.keys(c);
//         $("#input_value").val("");
//         b.forEach((item, index) => {
//             if (input == "mammals") {
//                 $("#ul").append(`<li>${index + 1} ${item}</li>`);
//             }
//         });

//         // $("#ul").html("");
//         if (b.indexOf(input) !== -1) {
//             $("#ul").append(`<li>${c[input]}</li>`);
//             if (input === "livePic") {
//                 $("#ul").append($(`<img src="${c[input]}" />`));
//             }
//         }

//         console.log(c);
//     });
// });

// $(document).ready(function(){
//     $("#btn").on("click",function(){
//         let data = $("#input_data").val()
//         $("#ul").append(`<li>${data}</li>`)
//         $("#input_data").val(" ")
//     })
// })


var response = {
    animals: {
        animal_categories: {
            mammals: {
                aardvark: {
                    type: "Mammals",
                    name: "African Elephant",
                    info:
                        "An adult African elephant's trunk is about seven feet (two meters) long! It's actually an elongated nose and upper lip. Like most noses, trunks are for smelling.",
                    diet: "Herbivore",
                    averageLife: "Up To 70 years",
                    size: "Height at the shoulder: 8.2 to 13 feet",
                    weight: "2.5 to 7 tons",
                    livePic: "./Image/images (1).jpeg",
                    infoTwo: `When an elephant drinks, it sucks as much as 2 gallons (7.5 liters) of water into its trunk at a time. Then it curls its trunk under, sticks the tip of its trunk into its mouth, and blows. Out comes the water, right down the elephant's throat.
  
                Since African elephants live where the sun is usually blazing hot, they use their trunks to help them keep cool. First they squirt a trunkful of cool water over their bodies. Then they often follow that with a sprinkling of dust to create a protective layer of dirt on their skin. Elephants pick up and spray dust the same way they do water—with their trunks.
  
                Elephants also use their trunks as snorkels when they wade in deep water. An elephant's trunk is controlled by many muscles. Two fingerlike parts on the tip of the trunk allow the elephant to perform delicate maneuvers such as picking a berry from the ground or plucking a single leaf off a tree. Elephants can also use its trunk to grasp an entire tree branch and pull it down to its mouth and to yank up clumps of grasses and shove the greenery into their mouths.`
                },
                african_Elephant: {
                    type: "Mammals",
                    name: "African Elephant",
                    info:
                        "An adult African elephant's trunk is about seven feet (two meters) long! It's actually an elongated nose and upper lip. Like most noses, trunks are for smelling.",
                    diet: "Herbivore",
                    averageLife: "Up To 70 years",
                    size: "Height at the shoulder: 8.2 to 13 feet",
                    weight: "2.5 to 7 tons",
                    livePic: "./Image/images (1).jpeg",
                    infoTwo: `When an elephant drinks, it sucks as much as 2 gallons (7.5 liters) of water into its trunk at a time. Then it curls its trunk under, sticks the tip of its trunk into its mouth, and blows. Out comes the water, right down the elephant's throat.
  
                Since African elephants live where the sun is usually blazing hot, they use their trunks to help them keep cool. First they squirt a trunkful of cool water over their bodies. Then they often follow that with a sprinkling of dust to create a protective layer of dirt on their skin. Elephants pick up and spray dust the same way they do water—with their trunks.
  
                Elephants also use their trunks as snorkels when they wade in deep water. An elephant's trunk is controlled by many muscles. Two fingerlike parts on the tip of the trunk allow the elephant to perform delicate maneuvers such as picking a berry from the ground or plucking a single leaf off a tree. Elephants can also use its trunk to grasp an entire tree branch and pull it down to its mouth and to yank up clumps of grasses and shove the greenery into their mouths.`
                }
            },
            birds: {
                qus: {
                    type: "quslar",
                    name: "African Elephant",
                    info:
                        "An adult African elephant's trunk is about seven feet (two meters) long! It's actually an elongated nose and upper lip. Like most noses, trunks are for smelling.",
                    diet: "Herbivore",
                    averageLife: "Up To 70 years",
                    size: "Height at the shoulder: 8.2 to 13 feet",
                    weight: "2.5 to 7 tons",
                    livePic: "./Image/images (1).jpeg",
                    infoTwo: `When an elephant drinks, it sucks as much as 2 gallons (7.5 liters) of water into its trunk at a time. Then it curls its trunk under, sticks the tip of its trunk into its mouth, and blows. Out comes the water, right down the elephant's throat.
  
                Since African elephants live where the sun is usually blazing hot, they use their trunks to help them keep cool. First they squirt a trunkful of cool water over their bodies. Then they often follow that with a sprinkling of dust to create a protective layer of dirt on their skin. Elephants pick up and spray dust the same way they do water—with their trunks.
  
                Elephants also use their trunks as snorkels when they wade in deep water. An elephant's trunk is controlled by many muscles. Two fingerlike parts on the tip of the trunk allow the elephant to perform delicate maneuvers such as picking a berry from the ground or plucking a single leaf off a tree. Elephants can also use its trunk to grasp an entire tree branch and pull it down to its mouth and to yank up clumps of grasses and shove the greenery into their mouths.`
                }
            },
            reptiles: {},
            amphibians: {},
            anvertebrates: {},
            fish: {}
        }
    }
};

// document.querySelector("#mammal").addEventListener("click", function() {
//   event.preventDefault();

//   console.log(response.animals.animal_categories.mammals.african_Elephant);
// });
$(document).ready(function () {

    $("#btn_click").on("click", function () {
        let input = $("#input_value").val();
        // console.log(input);
        let imput2 = $("#input_v").val();
        let input3 = $("#input_val").val();
        let c = response.animals.animal_categories.mammals;
        let b = Object.keys(c);
        let d = response.animals.animal_categories.mammals.african_Elephant
        let e = Object.keys(d)
        let d1 = response.animals.animal_categories.mammals.aardvark
        let e1 = Object.keys(d1)
        // let c1 = response.animals.animal_categories.birds;
        // let b2 = Object.keys(c1)
        // let d1 = response.animals.animal_categories.birds.qus;
        // let e1 = Object.keys(d1)
        // let z = Object.keys(response.animals.animal_categories)
        // console.log("azerbaycan", z)
        // console.log("salam :", e)
        $("#input_value").val("");
        $("#input_v").val("");
        $("#input_val").val("");
        b.forEach((item, index) => {
            if (input == "mammals") {
                $("#ul1").append(`<li>${index + 1} ${item}</li>`);
                // if(input == "african_Elephant"){
                //     $("#ul").append(`<li>${index[c]}</li>`)
                // }
            }

        })
        e1.forEach((item) => {
            if (imput2 == "aardvark") {
                $("#ul2").append(`<li>${item}</li>`)
            }
        })
        if (e1.indexOf(input3) !== -1) {
            $("#ul3").append(`<li>${d[input3]}</li>`);
        }
        e.forEach((item) => {
            if (imput2 == "african_Elephant") {
                $("#ul2").append(`<li>${item}</li>`)
            }
            // console.log("sadad", item)
        })

        // $("#ul").html("");
        if (e.indexOf(input3) !== -1) {
            $("#ul3").append(`<li>${d[input3]}</li>`);
            // if (imput2 === "livePic") {
            //     $("#ul2").append($(`<img src="${d[imput2]}" />`));
            // }
        }
        console.log(c);
        $("#input_value").val("");
        e1.forEach((item, index) => {
            if (input == "birds") {
                $("#ul1").append(`<li>${index + 1} ${item}</li>`);
                // if(input == "african_Elephant"){
                //     $("#ul").append(`<li>${index[c]}</li>`)
                // }
            }

        })
        e1.forEach((item) => {
            if (imput2 == "qus") {
                $("#ul2").append(`<li>${item}</li>`)
            }
            // console.log("sadad", item)
        })

        // // $("#ul").html("");
        // if (e1.indexOf(input3) !== -1) {

        //     $("#ul3").append(`<li>${e1[input3]}</li>`);
        //     // if (imput2 === "livePic") {
        //     //     $("#ul2").append($(`<img src="${d[imput2]}" />`));
        //     // }
        // }
        // // if (z.indexOf(input3) !== -1) {
        // //     z.forEach((item) => {
        // //         $("#ul3").append(`<li>${item}</li>`)
        // //         if (z.indexOf(input3) == "birds") {
        // //             console.log("birds:", item)
        // //             console.log("sadfasfqfqwfewkjgiwejhgg")
        // //         }
        // //         console.log("birds:", item)
        // //     })
        // // }

    });
});



