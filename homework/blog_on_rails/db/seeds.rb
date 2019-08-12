# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

LOREM_IPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry
. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

NUM_POSTS = 50

NUM_POSTS.times do
  post = Post.new(
    title: Faker::Name.unique.name,
    body: LOREM_IPSUM 
  )
  post.save if post.valid?
end
