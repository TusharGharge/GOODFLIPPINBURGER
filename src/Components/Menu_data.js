import Chicken from '../Assets/Burgers/Chicken/Cluckinator.webp';
import Grilla from '../Assets/Burgers/Chicken/The-Grilla.jpg.webp';
import scluter from '../Assets/Burgers/Chicken/The-Saucy-Clucker.png.webp';
import ccluter from '../Assets/Burgers/Chicken/The-Classy-Clucker.png.webp';
import Thrilla from '../Assets/Burgers/Chicken/The-Thrilla.jpg';
import Porkback from '../Assets/Burgers/Meat/Porkback-Mountain.png.webp';
import Bhoot from '../Assets/Burgers/Meat/The-Bhoot.jpg.webp';
import Flippin from '../Assets/Burgers/Meat/The-Flippin-Standard.png.webp';
import Kerfuffle from '../Assets/Burgers/Meat/The-Kerfuffle.jpg.webp';
import tlc from '../Assets/Burgers/Meat/TLC.png.webp';
import Bean from '../Assets/Burgers/Veg/Bean-Bomb.webp';
import Cheese from '../Assets/Burgers/Veg/Cheese-Bomb.jpg.webp';
import Sir from '../Assets/Burgers/Veg/Sir-Truffalot.png.webp';
import The from '../Assets/Burgers/Veg/The-Habibi.png.webp';
import Vegan from '../Assets/Burgers/Veg/Vegan-Seagal.webp';
import Atomic from '../Assets/Wraps/Nonveg/Atomic-Chicken-Wrap.webp';
import Grill from '../Assets/Wraps/Nonveg/Grill-Chick-N-Cheese-Wrap.webp';
import Falafel from '../Assets/Wraps/Veg/Falafel-Wrap-1.webp';
import Truffle from '../Assets/Wraps/Veg/Truffle-Shroom-Wrap_Product.webp';    
import Dog from '../Assets/Hotdogs/Atomic-Dog.webp';    
import Hog from '../Assets/Hotdogs/Hog-Dog-1.webp';    
import Phat from '../Assets/Hotdogs/Phat-Dog.webp';    
import Underdog from '../Assets/Hotdogs/The-Underdog.jpg.webp';    
import Tenders from '../Assets/Slides/Chicken/Atomic-Tenders.jpg.webp';    
import bpl from '../Assets/Slides/Chicken/bpl-wings.webp';    
import nuggets from '../Assets/Slides/Chicken/chicken-nuggets.webp';    
import tenders from '../Assets/Slides/Chicken/chicken-tenders.webp';    
import Peri from '../Assets/Slides/Chicken/Peri-Peri-Wings.jpg.webp';    
import Smoky from '../Assets/Slides/Chicken/Smoky-BBQ-Wings.jpg.webp';    
import cheesy from '../Assets/Slides/Veg/cheesy-fries.webp';    
import crispersm from '../Assets/Slides/Veg/crispers-1.webp';    
import fries from '../Assets/Slides/Veg/fries.webp';    
import Paneer from '../Assets/Slides/Veg/Paneer-Nuggets-Veg.webp';    
import Crispers from '../Assets/Slides/Veg/Peri-Crispers.png.webp';    
import perif from '../Assets/Slides/Veg/peri-fries-1.webp';    
import wedges from '../Assets/Slides/Veg/peri-peri-wedges.webp';    
import potato from '../Assets/Slides/Veg/potato-wedges-new.webp';    
import Chocolate from '../Assets/Shakes/ThicShakes/Chocolate-Thicc-Shake.webp';
    
import Salted from '../Assets/Shakes/ThicShakes/Salted-Caramel-Thicc-Shake.jpg';    
import strawberry from '../Assets/Shakes/ThicShakes/strawberry-milk-shake.webp';    
import chip from '../Assets/Shakes/Milkshakes/chocolate-chip-milk-shake.webp'; 
import chocolatemm from '../Assets/Shakes/Milkshakes/chocolate-milk-shake-1.webp'; 
import Mixed from '../Assets/Shakes/Milkshakes/Mixed-Berry-Milk-Shake.png.webp'; 
import Saltedmm from '../Assets/Shakes/Milkshakes/Salted-Caramel-Milk-Shake.png.webp'; 
import strawberrym from '../Assets/Shakes/Milkshakes/Strawberry-Milk-Shake.jpg-1.webp'; 
import americano from '../Assets/Coffee/americano-coffee.webp'; 
import cappuccino from '../Assets/Coffee/cappuccino-coffee.webp'; 
import coffee from '../Assets/Coffee/cold-coffee.webp'; 
import flat from '../Assets/Coffee/flat-white-coffee.webp'; 
import Latte from '../Assets/Coffee/Latte-Coffee.jpg.webp'; 
import cold from '../Assets/Coffee/cold-coffee-lite.webp'; 

const Menudata={
    "BURGERS":{
        "Chicken":[
            {
                "title":"The Cluckinator™", "description":"Spicy Buttermilk Fried Chicken Breast deep fried till golden and crispy, served with our Spicy Honey Mustard Sauce and Lettuce on a freshly Baked Bun.","size":"Serving Size – 275g/667.81Kcal","price":"Price – ₹ 325","img":Chicken
        },
        {"title":"The Grilla","description":"Juicy Grilled Chicken Breast marinated in our Peri Peri Spice Rub on a bed of Fresh Lettuce, Tomatoes and Onions with creamy Jalapeno Cheese Sauce on our freshly Baked Buns.","size":"Serving Size – 250g/523.48Kcal","price":"Price – ₹ 345","img":Grilla},
        {"title":"The Saucy Clucker","description":"Our Saucy, Sweet & Spicy Clucker made of Crispy Fried Chicken Breast Coated in our inhouse Smoky BBQ Sauce served with Lettuce and Spicy Bhoot Sauce on a freshly baked bun.","size":"Serving Size – 300g/656.43Kcal","price":"Price – ₹ 335","img":scluter},
        {"title":"The Classy Clucker™","description":"Southern Fried Chicken Breast deep fried till Golden and Crispy served with Hot Mayo, Gherkins and Lettuce on a freshly Baked Bun.","size":"Serving Size – 275g/663.05Kcal","price":"Price – ₹ 315","img":ccluter},
        {"title":"The Thrilla","description":"Our Signature Spicy Grilled Chicken Breast layered with Garlic Aioli topped with a creamy Coleslaw to create the perfect balance all packed in a freshly baked bun","size":"Serving Size – 250g/562Kcal", "price":"Price – ₹ 345","img":Thrilla}
        ],
        "Meat":[
            {"title":"The Flippin' Standard™","description":"Handmade Buff Patty cooked to order with Cheddar Cheese served with Caramelized Onions, The Good Sauce, Sliced Tomatoes and Lettuce on a freshly Baked Bun.","size":"Serving Size – 250g/618.25Kcal","price":"Price – ₹ 315","img":Flippin},
            {"title":"The Kerfuffle™","description":"TWO Juicy Buff Patties & TWO Cheddar Cheese slices, layered with Truffle Mayo and Lettuce on a freshly Baked Brioche Bun. Juicy, Simple & Delicious…","size":"Serving Size – 250g/745.5Kcal","price":"Price – ₹ 395","img":Kerfuffle},
            {"title":"The Bhoot","description":"Handmade Buff Patty cooked to order sprinkled with our Signature Spicy Bhut Jolokia flakes, with our Signature Bhoot sauce, Cheddar Cheese, Caramelized Onions, Gherkins and Lettuce on a freshly Baked Bun.","size":"Serving Size – 250g/607.75Kcal","price":"Price – ₹ 345","img":Bhoot},
            {"title":"T L C","description":"The Tender Lovin Cheeseburger is a Handmade Buff Patty stuffed with Melted Cheddar Cheese cooked to perfection, with our Signature Bhoot Sauce, Lettuce and Gherkins on a freshly Baked Bun.","size":"Serving Size – 264g/626.71Kcal","price":"Price – ₹ 385","img":tlc},
            {"title":"Porkback Mountain","description":"Juicy Pork Patty topped with Cheddar Cheese, our Signature Smoked Pork Chorizo Sauce. Served with Caramelized Onions, Gherkin and Lettuce on a freshly Baked Bun.","size":"Serving Size – 250g/759.35Kcal","price":"Price – ₹ 385","img":Porkback},

        
        ],
        "Veg":[
            {"title":"The Habibi","description":"A Crispy Falafel Patty topped with Creamy Beet Hummus served with Lettuce and fresh onions on a freshly baked bun.","size":"Serving Size- 240g/583.36Kcal","price":"Price – ₹ 255","img":The},
            {"title":"Cheese Bomb","description":"The Crispiest Cheesiest Patty that we could dream of in a burger with the Good Sauce, Herbed Cheese seasoning, Tomatoes, Onions and Lettuce on a freshly Baked Bun.","size":"Serving Size – 280g/696.75Kcal","price":"Price – ₹ 295","img":Cheese},
            {"title":"Vegan Seagal","description":"Crispy Potato Patty Loaded with Beets, Broccoli and Corn with Spicy Bbq Sauce served with fresh Onions, Gherkins and Lettuce on a freshly Baked Vegan Bun.","size":"Serving Size – 240g/449.26Kcal","price":"Price – ₹ 295","img":Vegan},
            {"title":"Bean Bomb","description":"Panko Crusted Bean and Mushroom Patty served with our Hot Mayo, Onions and Lettuce on a freshly Baked Bun.","size":"Serving Size – 240g/576.64Kcal","price":"Price – ₹ 295","img":Bean},
            {"title":"Sir Truffalot","description":"An Umami-packed Shiitake Mushroom patty layered with our signature Truffle Aioli topped with Cheddar Cheese, lettuce, onions and served on a freshly baked, ultra-soft Brioche Bun.","size":"Serving Size – 274g/756kcal","price":"Price – ₹ 355","img":Sir},


        ],

    },

    "WRAPS":{
        "Veg":[
            {
                "title":"Falafel Crunch Wrap", "description":"Flavour packed falafel filling, fresh lettuce and onions layered with our garlic aioli wrapped in a grilled tortilla.","size":"Serving Size – 250g/583Kcal","price":"Price – ₹ 245","img":Falafel
        },
        {"title":"Truffle Shroom Wrap","description":"Shiitake mushroom with umami, our signature truffle aioli, creamy cheddar cheese, lettuce, and onions in a grilled tortilla wrap.","size":"Serving Size – 287g/689Kcal","price":"Price – ₹ 325","img":Truffle},
       ],
        "Non_Veg":[
            {"title":"Grill Chick 'N Cheese Wrap","description":"Grilled chicken breast, fresh lettuce and onions layered with a creamy cheese sauce wrapped in a grilled tortilla.","size":"Serving Size – 250g/523Kcal","price":"Price – ₹ 265","img":Grill},
            {"title":"The Kerfuffle™","description":"TWO Juicy Buff Patties & TWO Cheddar Cheese slices, layered with Truffle Mayo and Lettuce on a freshly Baked Brioche Bun. Juicy, Simple & Delicious…","size":"Serving Size – 250g/745.5Kcal","price":"Price – ₹ 395","img":Atomic},

        ]

    },

    "HOTDOGS":{
        "Non_veg":[
            {"title":"Phat Dog","description":"Grilled Chicken Sausage Tucked In The Softest Hot Dog Bun With Jalapeno Cheese Sauce, Caramelized Onions, Mustard And Smoky Bbq Sauce.","size":"Serving Size – 174G/470.60Kcal","price":"Price – ₹ 265","img":Phat},
            {"title":"Hog Dog (Pork)","description":"Grilled Pork Sausage tucked in the softest Hot Dog Bun with Jalapeno cheese sauce, Caramelized onions, Mustard and Smoky BBQ sauce.","size":"Serving Size – 174G/463.38Kcal","price":"Price – ₹ 265","img":Hog},
            {"title":"The Underdog","description":"Spiced, grilled chicken sausage layered with a creamy coleslaw, topped with mustard all packed in a freshly baked toasted bun.","size":"Serving Size – 181g/402Kcal","price":"Price – ₹ 195","img":Underdog},
            {"title":"Atomic Dog","description":"Our signature spicy Atomic Tender tucked in the softest hot dog bun with Jalapeno Cheese sauce & Smoky Bbq Sauce.","size":"Serving Size – 130g/420.6Kcal","price":"Price – ₹ 185","img":Dog},
           

        ]
    },
    "SIDES":{
        "Chicken":[
            {"title":"Chicken Tenders","description":"5 Southern Fried Pieces of Chicken Supremes deep fried till golden and crispy served with Hot Mayo Dip.","size":"Serving Size – 256g/721.77Kcal ","price":"Price – ₹ 225","img":tenders},
            {"title":"Atomic Tendors™","description":"5 Chicken Supremes marinated overnight in our super-secret spice rub and served with a delicious Honey Mustard Dip.","size":"Serving Size – 256g/721.10Kcal","price":"Price – ₹ 245","img":Tenders},
            {"title":"Smoky BBQ Wings","description":"8 Crispy Fried Chicken Wings tossed in our inhouse Sweet, Smoky and Spicy BBQ sauce.","size":"Serving Size – 418g/1122Kcal","price":"Price – ₹ 295","img":Smoky},
            {"title":"Very Peri Hot Wings","description":"8 Very Crispy, Very Juicy pieces of Chicken Wings coated with our very spicy Peri – Peri Seasoning and served with our homemade Hot Sauce.","size":"Serving Size – 390g/1143.52Kcal","price":"Price – ₹ 295","img":Peri},
            {"title":"BPL Wings","description":"8 Chicken Wings coated with a zesty Lemon Pepper seasoning Fried till Golden Brown and served with our Lemon Pepper Ranch.","size":"Serving Size – 390g/1249.32Kcal","price":"Price – ₹ 295","img":bpl},
            {"title":"Chicken Nuggets","description":"8 Juicy, Crispy Chicken Nuggets sprinkled lightly with our Cajun Seasoning served with our Garlic dip.","size":"Serving Size – 120g/340Kcal","price":"Price – ₹ 185","img":nuggets},
           

        ],

        "Veg":[
            {"title":"Fries","description":"Classic, Crispy & Golden Skin on Fries, Lightly Salted And Served With Our In-House Fry Sauce.","size":"Serving Size- 210g/662.6Kcal ","price":"Price – ₹ 125","img":fries},
            {"title":"Cheesy Fries","description":"Golden Thick Cut Fries sprinkled with a herbed cheese seasoning served with a Jalapeno Cheese Sauce.","size":"Serving Size- 210g/677.1Kcal","price":"Price – ₹ 135","img":cheesy},
            {"title":"Peri Fries","description":"Crispy Thick Cut Fries Sprinkled With Our Peri Peri Powder Served With Our Signature Garlic Dip.","size":"Serving Size- 210g/672.2Kcal","price":"Price – ₹ 135","img":perif},
            {"title":"Peri Peri Wedges","description":"Crispy, Herb Crusted Potato Wedges Sprinkled with our Peri Peri Seasoning served with our Garlic Dip.","size":"Serving Size – 215g/509.26Kcal","price":"Price – ₹ 135","img":wedges},
            {"title":"Potato Wedges","description":"Crispy, Herb Crusted Potato Wedges are served with our Garlic Dip.","size":"Serving Size- 215g/460.53Kcal","price":"Price – ₹ 135","img":potato},
            {"title":"Crispers","description":"Crispy, skin-on, crinkle cut potatoes, lightly salted and served with our Garlic Dip.","size":"Serving Size- 170g/394.2Kcal","price":"Price – ₹ 145","img":Crispers},
            {"title":"Peri Crispers","description":"Crispy, skin-on, crinkle cut potatoes, sprinkled with peri peri seasoning and served with our Garlic Dip.","size":"Serving Size- 170g/405.6Kcal","price":"Price – ₹ 155","img":crispersm},
            {"title":"Paneer Nuggets","description":"8 Crispy Jalapeno Paneer nuggets, lightly sprinkled with your choice of seasoning, served with our garlic dip.","size":"Serving Size- 180g/394Kcal","price":"Price – ₹ 195","img":Paneer},
           

        ]
    },
    "SHAKES":{
        "Thicc_Shakes":[
            {"title":"Double Chocolate","description":"A truly Satisfying and rich Chocolate thick shake.","size":"Serving Size – 250ml/413Kcal ","price":"Price – ₹ 185","img":Chocolate},
            {"title":"Classic Strawberry","description":"A delicious and thick nostalgic treat, ideal for berry lovers.","size":"Serving Size – 250ml/399Kcal","price":"Price – ₹ 185","img":strawberry},
            {"title":"Salted Caramel","description":"This sweet, salted shake will win your heart from the very first sip.","size":"Serving Size – 250ml/424Kcal","price":"Price – ₹ 185","img":Salted},
       
        ],

        "Milkshakes":[
            {"title":"Chocolate Milkshake","description":"Signature cocoa blended with milk and ice.","size":"Serving Size/Kcal – 350ml/472Kcal","price":"Price – ₹ 170","img":chocolatemm},
            {"title":"Chocolate-Chip Milkshake","description":"Signature cocoa, milk and chocochips blended with ice.","size":"Serving Size/Kcal – 350ml/472Kcal","price":"Price – ₹ 190","img":chip},
            {"title":"Strawberry Milkshake","description":"Fresh and delicious Strawbery milkshake.","size":"Serving Size/Kcal – 350ml/334Kcal","price":"Price – ₹ 170","img":strawberrym},
            {"title":"Mixedberry Milkshake","description":"Milkshake packed with fruity berries.","size":"Serving Size/Kcal – 350ml/375Kcal","price":"Price – ₹ 170","img":Mixed},
            {"title":"Salted Caramel Milkshake","description":"Perfect sweet and salty milkshake.                            ","size":"Serving Size/Kcal – 350ml/396Kcal","price":"Price – ₹ 170","img":Saltedmm},

        ],},

        "COFFEE":{
            "Thicc_Shakes":[
                {"title":"Americano","description":"Double shot Espresso with Hot water.","size":"Serving Size/Kcal – 250ml/0Kcal","price":"Price – ₹ 120","img":americano},
                {"title":"Latte","description":"Double shot Espresso with Steamed Milk and Microfoam.","size":"Serving Size/Kcal – 250ml/90Kcal","price":"Price – ₹ 140","img":Latte},
                {"title":"Cappuccino","description":"Double shot Espresso with equal parts Steamed Milk and Microfoam.","size":"Serving Size/Kcal – 250ml/87Kcal","price":"Price – ₹ 140","img":cappuccino},
                // {"title":"Flat White","description":"Double shot Espresso with Steamed Milk.","size":"Serving Size/Kcal – 250ml/92Kcal","price":"Price – ₹ 150","img":flat},
                {"title":"Cold Coffee","description":"Rich and Creamy Classic Cold Coffee with espresso,milk and vanilla blended with Ice.","size":"Serving Size/Kcal – 350ml/294Kcal ","price":"Price – ₹ 190","img":coffee},
                // {"title":"Cold Coffee Lite","description":"Thick and Rich chilled cold coffee.","size":"Serving Size/Kcal – 350ml/288Kcal ","price":"Price – ₹ 190","img":cold}
            ],
}
}


export default Menudata;