class PostsController < ApplicationController
  def home
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new post_params
    if @post.valid?
      @post.save
      redirect_to posts_path
    else
      render :new
    end
  end

  def index
    @posts = Post.all.order("id DESC")
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
