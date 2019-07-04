class AnswersController < ApplicationController
  # This file was created with the command rails g controller answers --skip-template-engine
  # which skips the creation of views/answers folder.
  
  def create
    @answer = Answer.new answer_params
    @question = Question.find(params["question_id"])

    @answer.question = @question

    if @answer.save
      redirect_to question_path(@question)
    else
      render 'questions/show'
    end
  end

  def destroy
    @answer = Answer.find(params["id"])
    @answer.destroy

    # This answer has been destroyed in the database but still exists
    # in this variable
    redirect_to question_path(@answer.question)

  end

  private

  def answer_params
    params.require(:answer).permit(:body)
  end
end
