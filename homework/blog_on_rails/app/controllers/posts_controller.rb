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

  def show
    @post = find_post
    # p time_ago_in_words @post["created_at"] =>  This is a helper so it can be only used in the views file
  end

  def edit
    @post = find_post


  end

  def update
    @post = find_post

    if @post.update post_params
      redirect_to post_path(@post)
    else
      render :edit
    end
  end

  def destroy
    post = find_post
    post.destroy
    redirect_to posts_path
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end

  def find_post
    Post.find(params["id"])
  end
end
