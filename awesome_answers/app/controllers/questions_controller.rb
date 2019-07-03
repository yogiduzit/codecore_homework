class QuestionsController < ApplicationController
  def new
    @question = Question.new
  end
  def create
    p params
    # Rails does not allow us to access question via params simply
    # becuase data coming from client cannot be truested.
    # @question = Question.new params["question"]
    # Hackers could insert their own keys and and cause an
    # SQL injection
    # Hence, we only permit title and body as keys
    @question = Question.new params.require(:question).permit(:title, :body)
    @question.save!
  end
end
