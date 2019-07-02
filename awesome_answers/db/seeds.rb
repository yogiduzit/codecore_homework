# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# To run your seeds, do:
Question.delete_all

NUM_QUESTIONS = 200

NUM_QUESTIONS.times do 
  created_at = Faker::Date.backward(365 * 5)
  Question.create(
    title: Faker::Hacker.say_something_smart, 
    body: Faker::ChuckNorris,
    created_at: created_at,
    updated_at: created_at
    )
  end

  question = Question.all

  puts(Cowsay.say("Generated #{question.count}", :frogs))