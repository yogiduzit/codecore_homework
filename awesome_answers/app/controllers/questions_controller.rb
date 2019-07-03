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

    if @question.save
      redirect_to_question_path(@question)
    else
      render :new
    end
  end

  def show
    @question = Question.find(params["id"])
  end

  def index
    @questions = Question.all
  end

  def edit
    @question = Question.find(params['id'])
  end

  def update
    question_params = params.require(:question).permit(:title, :body)
    @question = Question.find params[:id]

    if @question.update question_params
      redirect_to question_path(@question)
    else
      render :edit
    end
  end
end
