# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.delete_all
Snack.delete_all

Snack.create(name:"Squeezit", description: "juice", image: "https://cdn.playbuzz.com/cdn/6b04acf2-5579-4683-97c0-d9c1d3efeed7/b5c3738f-441b-47fa-97c1-9b3bc9a716f4.jpg", vote:0)
Snack.create(name:"Fruit String Thing",description: "candy",image:"https://redtricom.files.wordpress.com/2018/01/fruit-string-thing.jpg?w=605", vote:0)
Snack.create(name:"DunkAroos",description: "cookie & cream",image:"https://thechive.files.wordpress.com/2016/05/these-snacks-from-the-90s-will-take-a-bite-out-of-your-childhood-39.jpg?quality=85&strip=info", vote:0)
Snack.create(name:"PushPop",description: "candy",image:"https://tul.imgix.net/content/article/90s-Food_2.jpg?auto=format,compress&w=740&h=486&fit=crop", vote:0)
Snack.create(name:"Kid Cuisine",description: "hicken nugget, mac & cheese, chocolate pudding and corn",image:"https://typeset-beta.imgix.net/uploads/image/2018/2/19/05572dd5-9a50-4b8b-bad9-6ea91b76b38c-kid-cuisine.jpg", vote:0)
Snack.create(name:"Bubble Jug",description: "gum",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqcmbOdCATuwEpIW_bkk5Oane0jowLQGKcRji1NQfzCK75dun", vote:0)
Snack.create(name:"Chubby",description: "colored drinks",image:"https://cdn.shopify.com/s/files/1/0339/5757/products/CHUBBY_1024x1024.jpg?v=1405803100", vote:0)

Comment.create(user_name:"Jahan", comment_content: "this was the worse", snack_id:5)
Comment.create(user_name:"Jahan", comment_content: "my favorite", snack_id:7)
Comment.create(user_name:"Jahan", comment_content: "never tried it", snack_id:3)
Comment.create(user_name:"Jahan", comment_content: "I like the ring pop", snack_id:4)
Comment.create(user_name:"Jahan", comment_content: "too colorfull", snack_id:1)

