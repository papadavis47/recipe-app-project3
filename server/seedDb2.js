const db = require('./models');

db.User.create({
    name: 'Mom',
    email: 'mom@mom.com',
    password: 'Sunday1990',
    image: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/89386740_10219582818473699_4030729693790470144_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=KDrKnLoxQBYAX9dQX_K&_nc_ht=scontent-sea1-1.xx&oh=1c4ca59bb84d7d5fb881eb5da74c3ddb&oe=5E9E1BA4',
    bio: 'Music teacher and mother to all',
    userRecipes: [],
    favRecipes: []
  }).then(author => {
    db.Recipe.create({
        title: "All American Roast Beef",
        alt: 'a large dish of roast beef',
        userId: author._id,
        image: "https://www.seabond.com/wp-content/uploads/2017/06/roast-beef.jpg",
        servings: '8',
        description: "This is your basic everyday eye round roast beef (I USED A BEEF ROUND BOTTOM ROAST) simply cooked to perfection. Serve it to family or company. The secret is in the time cooked: 20 minutes per pound at 325 degrees.",
        directions: [
          "Preheat oven to 325 degrees F. If roast is untied, tie at 3 inch intervals with cotton twine.",
           "Season roast with salt, garlic powder, onion powder, pepper, and any additional spices you plan to use. Add more or less seasonings to taste.",
           "Spray a dutch oven with PAM then sear roast on all sides over medium high heat.",
           "Place roast in the Dutch oven fat side up, cover, and place in the oven for ____minutes based upon 20 minutes per pound.",
           "Remove from oven, cover loosely with foil, and let rest for 15 to 20 minutes."
        ],
        ingredients: [
          "3 pounds beef eye of round roast, rump roast, or petite sirloin roast",
          "1/2 teaspoon kosher salt",
          "1/2 teaspoon garlic powder",
          "1/2 teaspoon onion powder",
          "1/4 teaspoon freshly ground black pepper",
          "a pinch of thyme, rosemary, and grilling dust"
        ],
        tags: [
          "Beef",
          "american",
          "roast",
          "Savory",
          "Meat",
          "fall",
          "classic"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
      db.Recipe.create({
        title: "Spicy Arrabiata Penne",
        alt: 'a bowl of spicy pasta',
        userId: author._id,
        image: "https://prods3.imgix.net/images/articles/2015_10/Facebook-Pasta-of-the-week-Arrabiata-Recipe-Tomatoes-Spicy-Tomatoes-Basil-Garlic-Penne-Marinara-Simple-cooking-meals-quick-dinner.jpg",
        servings: '4',
        description: "This, Mario Batali wrote in 2013 in The Times, is one of his late-night favorites. Its uncomplicated nature lends itself to an after-midnight feast. It’s basically pasta with tomato sauce and cheese, but red pepper flakes give the sauce a delicious kick.",
        directions: [
          "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.",
          "In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes.",
          "Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste.",
          "Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce.",
          "Garnish with Parmigiano-Reggiano flakes and more basil and serve warm."
        ],
        ingredients: [
            "Kosher salt and freshly ground black pepper",
            "1 pound penne rigate (penne pasta with ridges, I used thin linguine)",
            "1/4 cup olive oil",
            "3 cloves garlic, chopped (I would triple the amount of garlic)",
            "One 26.42-ounce container chopped tomatoes, such as Pomi (I used 3½ fresh tomatoes chopped)",
            "1/2 teaspoon red chile flakes (enough to almost make your nose run)",
            "1/2 teaspoon Italian seasoning",
            "6 leaves fresh basil, chopped, plus more for garnish",
            "Block of Parmigiano-Reggiano, for garnish"
        ],
        tags: [
          "Italian",
          "pasta",
          "spicy",
          "herbs",
          "penne",
          "hot"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
      db.Recipe.create({
        title: "Best Blueberry Buckle",
        alt: 'bluuberry breakfast bread loaf',
        userId: author._id,
        image: "https://hips.hearstapps.com/hmg-prod/images/delish-190611-blueberry-buckle-441-landscape-pf-1561038269.jpg",
        servings: '6',
        description: "Delicious breakfast loaf passed down to me from my Mother, Jan",
        directions: [
          "Preheat oven to 350 degrees F (175 degrees C). Butter and flour a springform pan.",
          "Sift 2 cups flour and baking powder and salt into a bowl.",
          "Beat 1/4 cup butter, 3/4 cup sugar, and egg with an electric mixer in a large bowl until smooth. Gradually add milk and beat until fluffy; stir in flour mixture, making a stiff batter.",
          "Gently fold in blueberries and spread batter into prepared springform pan",
          "Mix 1/2 cup sugar, 1/3 cup flour, cinnamon, and 1/4 cup butter in a bowl until blended and crumbly in texture. Sprinkle on top of batter, then lightly press topping into batter using fingertips.",
          "Bake in preheated oven until golden and a toothpick inserted in the middle comes out with moist crumbs, about 40 minutes."
        ],
        ingredients: [
            "2 cups all-purpose flour",
            "2 teaspoons baking powder",
            "1/2 teaspoon salt",
            "1/4 cup unsalted butter",
            "3/4 cup white sugar",
            "1 large egg",
            "1/2 cup milk",
            "2 1/2 cups fresh blueberries",
            "1/2 cup white sugar",
            "1 tsp vanilla",
            "1/3 cup all-purpose flour",
            "1/2 teaspoon ground cinnamon",
            "1/4 cup unsalted butter, softened"
        ],
        tags: [
          "Breakfast",
          "blueberry",
          "sweet",
          "crumbly"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
      db.Recipe.create({
        title: "Camembert (Brie) Appetizer",
        alt: 'bowl of creamy camembert in suace',
        userId: author._id,
        image: "https://cdn.junglecreations.com/wp/junglecms/2018/06/Baked-Camembert-Spaghetti_Wordpress_Photos-1024x526.jpg",
        servings: '10',
        description: "This recipe was given to us by a chef at Hannah, an outstanding restaurant in Suttons Bay, Michigan. An incredibly delicious fondue",
        directions: [
          "Combine the tomato juice, cream, cider, salt and pepper (I rarely add salt, just a little cracked pepper) in a large sauce pan. Bring to a boil while stirring with a whisk.",
          "Reduce to the lowest temperature possible that continues the boil as you want to reduce the mixture by half. I use a large sauce pan, cover it with a lid, and monitor/whisk the mixture fairly frequently until adequately reduced.",
          "I also increase the recipe depending upon the amount of cheese it will accompany.",
          "As the reduction is nearing completion, bake the camembert (brie) in the oven.", 
          "Just before serving, pour the reduction over the cheese and drizzle with the truffle oil. Serve with bread and apples."
        ],
        ingredients: [
            "Camembert cheese (brie if camembert is not available)",
            "1/4 C tomato juice",
            "1/2 C heavy cream",
            "1/2 C hard cider",
            "Salt and pepper to taste",
            "White truffle oil (optional: pretty expensive)",
            "Apples sliced thin or in matchsticks",
            "Good and heavy crusted bread"
        ],
        tags: [
          "Savory",
          "cheese",
          "brie",
          "appetizer",
          "camembert",
          "salty"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
      db.Recipe.create({
        title: "Couscous Harissa",
        alt: 'dish of couscous and veggies with harrissa sauce',
        userId: author._id,
        image: "https://www.silkroaddiary.com/wp-content/uploads/2012/10/harissa-sauce-for-cous-cous-1.jpg",
        servings: '4',
        description: "Medditeranean couscous dish that warms the soul. Spicy, savory, and utterly delectable",
        directions: [
          "In a skillet, heat 1 teaspoon olive oil, add garlic and onion, and sauté until golden.",
          "In a saucepan, bring broth and remaining olive oil to a boil. Place couscous in oven-safe dish and pour hot broth and garlic mixture over couscous",
          "Stir to mix. Let stand for 10 minutes, until broth is absorbed.",
          "Add cayenne, Harissa, cilantro and salt and pepper to taste as you fluff couscous between fingers to separate the grains. Cover tightly to keep warm.",
          "Sprinkle a small amount of cayenne and cilantro on top just before serving."
        ],
        ingredients: [
            "2 ¼ teaspoons olive oil",
            "4 cloves fresh garlic",
            "A small onion, coarsely chopped",
            "3 Cups chicken or vegetable broth",
            "6 ounces of couscous",
            "2 teaspoons ground cayenne pepper to taste",
            "1 teaspoon Harissa according to taste",
            "Cilantro leaves, finely chopped",
            "Salt and freshly ground pepper to taste"
        ],
        tags: [
          "Savory",
          "spicy",
          "morrocan",
          "pasta",
          "couscous",
          "herbs"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
      db.Recipe.create({
        title: "CROCK POT GARLIC SMASHED RED POTATOES",
        alt: 'dish of smashed potatoes and herbs',
        userId: author._id,
        image: "https://static01.nyt.com/images/2018/11/06/dining/sg-red-potatoes/sg-red-potatoes-articleLarge-v2.jpg",
        servings: '8',
        description: "Super fast and simple smashed potato recipe for every holiday and day in betweeen",
        directions: [
          "Halve or quarter potatoes as necessary to make similar size pieces.",
          "Place in a 4 to 6 quart crock pot.",
          "Add garlic, oil, salt and water; mix well to coat all potato pieces.",
          "Cover and cook on HIGH for 3-1/2 to 4-1/2 hours or until potato pieces are tender.",
          "With a fork or potato masher, mash potatoes and garlic. We used the Kitchen Aid to mash and mix everything",
          "Stir in enough milk for soft serving consistency.",
          "Serve immediately, or cover and hold in slow cooker on LOW setting for up to 2 hours."
        ],
        ingredients: [
            "3 lbs red potatoes",
            "4 garlic cloves, minced (we used twice as much)",
            "2 tablespoons olive oil",
            "1 teaspoon salt",
            "½ cup water",
            "¼ - ½ cup milk"
        ],
        tags: [
          "Savory",
          "fall",
          "thanksgiving",
          "potatoes",
          "potato",
          "mashed",
          "smashed",
          "garlic",
          "herbs",
          "creamy"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
      db.Recipe.create({
        title: "Israeli Halvah",
        alt: "cutting board with halvah and honey",
        userId: author._id,
        image: "https://chowhound1.cbsistatic.com/thumbnail/800/0/chowhound1.cbsistatic.com/blog-media/2018/07/halvah-chowhound.jpg",
        servings: '10',
        description: "Halvah is a dessert made with a sugar syrup and tahini paste. It has a crumbly texture, but the individual pieces are sumptuous and thick, like fudge, with a bit of a drier mouthfeel",
        directions: [
          "Heat honey on medium heat until your candy or instant-read thermometer reads 240˚ F, or indicates the “soft ball stage of candy making.",
          "To confirm that you are at the “soft ball” stage, drop a bit of the honey into a cup of cold water.",
          "It should form a sticky and soft ball that flattens when removed from the water.",
          "Have the tahini ready to heat in a separate small pot, and once the honey is at the appropriate temperature, set the honey aside and heat tahini to 120˚ F.",
          "Add the warmed tahini to the honey and mix with a wooden spoon to combine. At first it will look separated but after a few minutes, the mixture will come together smoothly.",
          "Add the nuts, if using. Continue to mix until the mixture starts to stiffen, for a good 6-8 minutes.",
          "Pour mixture into a well-greased loaf pan, or into a greased cake pan with a removable bottom.",
          "Let cool to room temperature and wrap tightly with plastic wrap. Leave in the refrigerator for up to 36 hours.",
          "This will allow the sugar crystals to form, which will give the halvah its distinctive texture.",
          "Invert to remove from pan and cut into pieces with a sharp knife."
        ],
        ingredients: [
            "2 cups honey",
            "1 1/2 cups tahini, well stirred to combine",
            "Up to 2 cups toasted sliced almonds or other nuts (optional)"
        ],
        tags: [
          "Sweet",
          "candy",
          "Isreali",
          "Halvah",
          "crunchy"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
      db.Recipe.create({
        title: "Italian Pizzelles",
        alt: "Plate of pizzelles with powdered sugar",
        userId: author._id,
        image: "https://theinspiredhome.imgix.net/images/PizzelleFlatLays-4-resize.jpg?fit=clip&q=80&w=850",
        servings: '24',
        description: "Learn to make delicate, buttery pizzelles from a 98-year old Italian grandma.",
        directions: [
          "Preheat pizzelle iron. In a medium bowl, whisk together the flour, sugar, baking powder, and cocoa (if using). set aside.",
          "In a large bowl, whisk together the eggs and vanilla. Beat in melted butter. Whisk in flour mixture.",
          "Make pizzelles according to your manufacturer’s instructions. For mine, put about 1 1/2 teaspoons of batter into the center of each circle and cook for 30-45 seconds.","Remove from the iron and lay flat to cool (or roll into desired shape)."
        ],
        ingredients: [
            "1 3/4 cups all-purpose flour",
            "1 cup granulated sugar",
            "1/2 tsp. baking powder",
            "1/4 cup cocoa powder (only if making chocolate pizzelles)",
            "3 eggs",
            "1 Tbsp. vanilla extract",
            "1/2 cup butter, melted"
        ],
        tags: [
          "Italian",
          "Almond",
          "vanilla",
          "anise",
          "crunchy",
          "pancake",
          "treat",
          "dessert"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
      db.Recipe.create({
        title: "Meat Loaf",
        alt: "Plate of sliced meatloaf",
        userId: author._id,
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1550869906%2F0886_192302_DuPree_MR_13329.jpg%3Fitok%3DDZ6yiNPh&w=450&c=sc&poi=face&q=85",
        servings: '6',
        description: "The most classic of meats.",
        directions: [
          "In medium skillet over medium heat, sauté bacon until partially cooked but not browned.",
          "Drain and set aside. Preheat oven to 350.",
          "In a large bowl, with fork, lightly beat eggs with milk, salt, pepper, thyme, nutmeg and cloves.",
          "Stir in bread crumbs; let stand for 5 minutes.",
          "To egg mixture, add beef onion, parsley, celery leaves and garlic. Stir until well mixed.",
          "Transfer beef mixture to a foil-lined 12 x 8 inch baking pan.",
          "With hands, press and shape mixture into a 10 x 1 inch loaf pan.",
          "Arrange bacon diagonally on top of the loaf. Bake for 45 minutes.",
          "Meanwhile, in small bowl, combine chili sauce, brown sugar, and mustard, stir to blend.",
          "Brush sauce over meat loaf; bake an additional 15 minutes."
        ],
        ingredients: [
            "6 slices of bacon",
            "3 large eggs",
            "½ Cup milk",
            "1 teaspoon salt",
            "¼ teaspoon pepper",
            "¼ teaspoon dried thyme leaves",
            "¼ teaspoon ground nutmeg",
            "Dash of ground cloves",
            "I cup soft bread crumbs",
            "2 lbs. ground beef (or ½ beef &amp; ½ pork)",
            "½ Cup green onions",
            "2 tablespoons chopped parsley",
            "2 Tablespoons chopped celery leaves",
            "1 garlic clove minced",
            "½ Cup chili sauce",
            "½ teaspoon dry mustard",
            "1 Tablespoon light brown sugar"
        ],
        tags: [
          "American",
          "meat",
          "meatloaf",
          "loaf",
          "Savory"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
      db.Recipe.create({
        title: "Quiche with Cheese, Bacon, & Jalapeno",
        alt: "Quiche with jalapenos",
        userId: author._id,
        image: "https://spicysouthernkitchen.com/wp-content/uploads/jalapeno-quiche-1-645x1024.jpg",
        servings: '8',
        description: "The best breakfast dish. Click here NOW!",
        directions: [
          "Preheat oven to 350 degrees F (175 degrees C). Place bacon in a large, deep skillet.",
          "Cook over medium high heat until evenly brown. Drain, crumble and set aside.",
          "Place crust in a 9 inch glass pie plate. Sprinkle bacon inside of crust.",
          "In a small bowl, combine Cheddar cheese, Monterey Jack cheese and flour.",
          "In a separate bowl, beat together eggs, cream, onion and green chiles. Add cheese mixture and stir well.", 
          "Pour mixture into pie crust.",
          "Bake in preheated oven for 60 to 70 minutes, until set.",
          "Let stand 10 minutes before serving."
        ],
        ingredients: [
            "8 ounces bacon",
            "1 unbaked 9 inch pie crust",
            "2 Cups sharp cheddar cheese, shredded",
            "3 Tablespoons all-purpose flour",
            "5 eggs, lightly beaten",
            "1½ Cups half and Half",
            "½ Cup diced onion",
            "1 (4oz.) can diced green chile peppers, drained"
        ],
        tags: [
          "American",
          "spicy",
          "quiche",
          "breakfast",
          "Savory"
        ]
      }).then(recipe => {
        // add recipe to author
        db.User.findByIdAndUpdate(author._id,
          {$push: {userRecipes: recipe._id}}
        ).catch(err=>console.log(err))
      }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))