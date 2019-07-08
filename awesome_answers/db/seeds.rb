# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# To run your seeds, do:
User.destroy_all


NUM_USERS = 50

NUM_USERS.times do 
  # Faker is an application used to create fake data
  
  created_at = Faker::Date.backward(365 * 5)
  user = User.new(
    first_name: Faker::Creature::Dog.meme_phrase,
    last_name: Faker::Creature::Dog.gender,
    email: Faker::Games::Pokemon.name + "@" + Faker::Games::Pokemon.location + ".com",
    password: "yogiduzit"
    )

  user.questions = rand(0..15).times.map do 
    question = Question.new(
      title: Faker::Hacker.say_something_smart, 
      body: Faker::ChuckNorris,
      like_count: rand(40)
    )

    question.answers = rand(0..15).times.map do
      answer = Answer.new(
        body: Faker::Movies::StarWars.quote
      )
      end
    end


    
  end

  def createQuestions

  end

  def createAnswers
  end
  

  question = Question.all
  answer = Answer.all

  puts(Cowsay.say("Generated #{question.count} questions", :frogs))
  puts(Cowsay.say("Generated #{answer.count} answers", :frogs))