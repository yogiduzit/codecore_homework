require 'rails_helper'

RSpec.describe JobPostsController, type: :controller do

  describe "#new" do
    it "renders a new template" do 
      # Given
      # There is no given 

      # When
      get(:new) # If a request is made to new route

      # Then
      # response is just like the response header in Express.
      # In Rails, we do not fiddle around with response that 
      # much.
      expect(response).to(render_template(:new))
    end

    it "sets an instance variable with a new JobPost" do

      get(:new)

      # Assigns returns the value of instance variable
      # set in the controller.
      expect(assigns(:job_post)).to(be_a_new(JobPost))

    end
  end

  describe "#create" do
    context 'with valid parameters' do
      
      it "creates a new post in the db" do
        count_before = JobPost.count

        post(:create, params: {
          job_post: {
            title: "Web Developer",
            description: "Build my final project for me",
            salary_min: 1000,
            salary_max: 500_000
            }
          })
        count_after = JobPost.count

        expect(count_after).to eq(count_before + 1)
      end

      it "redirects to the show page" do
        post(:create, params: {
          job_post: {
            title: "Web Developer",
            description: "Build my final project for me",
            salary_min: 1000,
            salary_max: 500_000
            }
          })

        expect(response).to(redirect_to(job_posts_path(JobPost.last)))
      end
    end

    context 'with invalid parameters' do
      it "must not save to the db" do
        count_before = JobPost.count

        post(:create, params: {
          job_post: {
            title: nil,
            description: "Build my final project for me",
            salary_min: 1000,
            salary_max: 500_000
            }
          })
        count_after = JobPost.count

        expect(count_before).to eq(count_after)

      end

      it "must render the new page" do

        post(:create, params: {
          job_post: {
            title: nil,
            description: "Build my final project for me",
            salary_min: 1000,
            salary_max: 500_000
            }
          })
        
          expect(response).to(render_template(:new))
      end

      it "assigns an invalid JobPost as an instance variable" do
        post(:create, params: {
          job_post: {
            title: nil,
            description: "Build my final project for me",
            salary_min: 1000,
            salary_max: 500_000
            }
          })
        
        expect(assigns(:job_post)).to be_a(JobPost)
        expect(assigns(:job_post).valid?).to be(false)
      end
    end
  end
  describe "#show" do
    it "renders the show templates" do
      # Factory bot creates a new job_post in the db using the 
      # already provided data.
      job_post = FactoryBot.create(:job_post)

      get(:show, params: {id:  job_post.id})

      expect(response).to(render_template(:show))
    end

    it "sets @job_post for given object" do
      job_post = FactoryBot.create(:job_post)

      get(:show, params: {id: job_post.id})

      expect(assigns(:job_post)).to eq(job_post)
    end
  end

  describe "#destroy" do
    it "removes a job post from the db" do 
      job_post = FactoryBot.create(:job_post)

      delete(:destroy, params: {id: job_post.id})

      expect(JobPost.find_by(id: job_post.id)).to be(nil)
    end

    it "redirects to job post index" do
      job_post = FactoryBot.create(:job_post)

      delete(:destroy, params: {id: job_post.id})

      expect(response).to redirect_to(job_posts_path)
    end

    it "sets a flash message" do
      job_post = FactoryBot.create(:job_post)

      delete(:destroy, params: {id: job_post.id})

      expect(flash[:notice]).to be
    end
  end
end
