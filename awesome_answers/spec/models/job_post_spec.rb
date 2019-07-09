require 'rails_helper'

RSpec.describe JobPost, type: :model do
  describe "validates" do

    it("requires a title") do
      job_post = JobPost.new

      job_post.valid?

      expect(job_post.errors.messages).to(have_key(:title))
    end

    it "requires a unique title" do 
      # Given
      persisted_jp = JobPost.create(title: "Sheeple Buster", description: "Deez nutz")
      jp = JobPost.new title: persisted_jp.title, description: "Deez nutz"

      # When validations are triggered
      # Get an error on the title.
      jp.valid?

      expect(jp.errors.messages).to(have_key(:title))

    end

    it "requires a description" do
      # Given
      job_post = JobPost.new(title: "Something")

      # When validations are triggered
      job_post.valid?

      # Then, get an error on description
      expect(job_post.errors.messages).to(have_key(:description))
    end
  end
  describe ".search" do
    it "should return all job posts containing a search string" do
      # Given
      job_post_a = JobPost.create(
        title: "Software Developer",
        description: "Doing Something"
      )
      job_post_b = JobPost.create(
        title: "Agile Developer",
        description: "Doing Something"
      )
      job_post_c = JobPost.create(
        title: "Agile Developer",
        description: "Creating software"
      )
      # When

      softwares = JobPost.search("software")
      # End

      expect(softwares).to(eq([job_post_c, job_post_a]))
    end
  end
end
