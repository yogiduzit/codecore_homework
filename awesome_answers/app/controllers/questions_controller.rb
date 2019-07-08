class QuestionsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show] 
  def new
    @question = Question.new
  end

  def create
    # Rails does not allow us to access question via params simply
    # becuase data coming from client cannot be truested.
    # @question = Question.new params["question"]
    # Hackers could insert their own keys and and cause an
    # SQL injection
    # Hence, we only permit title and body as keys
    @question = Question.new question_params

    if @question.save
      redirect_to question_path(@question)
    else
      render :new
    end
  end

  def show
    @question = Question.find(params["id"])
    @answer = Answer.new

    # Returns an array containing all the answers related to 
    # this question
    @answers = @question.answers.order(created_at: :desc)
  end

  def index
    @questions = Question.all
  end

  def edit
    @question = Question.find(params['id'])
  end

  def update
 
    @question = Question.find params[:id]

    if @question.update question_params
      redirect_to question_path(@question)
    else
      render :edit
    end
  end

  private 
  
    def question_params
      params.require(:question).permit(:title, :body)
    end
end
