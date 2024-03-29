class CommentsController < ApplicationController
  def create
    @comment = Comment.new comment_params
    @post = Post.find(params["post_id"])

    @comment.post = @post

    if @comment.valid?
      @comment.save
      redirect_to post_path(@post)
    else
      render 'posts/show'
    end
  end

  def destroy
    @comment = Comment.find(params["id"])
    @comment.destroy
    redirect_to post_path @comment.post
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
